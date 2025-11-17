// lib/news.ts
import { fetchCsv } from "./fetchCsv";

type RawNews = {
  date: string;
  title: string;
  body: string;
  visible?: string;
  order?: string;
};

export type NewsItem = {
  date: string;      // "2025-11-10" 形式のまま保持
  title: string;
  body: string;
  visible: boolean;
  order: number;     // 並び順（未設定なら大きめの数を入れておく）
};

/**
 * News 一覧を取得
 * - Google Sheets から CSV 取得
 * - visible = TRUE のものだけ残す
 * - order があれば order 昇順 → なければ date 降順（新しい順）
 */
export async function getNews(): Promise<NewsItem[]> {
  const url = process.env.NEWS_SHEET_CSV_URL!;
  const raw = (await fetchCsv(url, 600)) as RawNews[];

  const items: NewsItem[] = raw
    .filter((n) => (n.visible || "").toLowerCase() === "true")
    .map((n, index) => ({
      date: n.date,
      title: n.title,
      body: n.body,
      visible: (n.visible || "").toLowerCase() === "true",
      // order が空なら index ベースでそこそこ安定する値にする
      order: n.order ? Number(n.order) : index + 1,
    }));

  // 並び順：
  // 1. order 昇順
  // 2. order が同じなら date の新しい順
  return items.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    // YYYY-MM-DD なら文字列比較でOK（新しい日付を前に）
    if (a.date === b.date) return 0;
    return a.date > b.date ? -1 : 1;
  });
}