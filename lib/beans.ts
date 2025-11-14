// lib/beans.ts
import { fetchCsv } from "./fetchCsv";

type RawBean = {
  id: string;
  name: string;
  origin: string;
  process: string;
  roast: string;
  notes_ja?: string;
  notes_en?: string;
  price_bag?: string;
  in_stock?: string;
  visible?: string;
};

export type Bean = {
  id: string;
  name: string;
  origin: string;
  process: string;
  roast: string;
  notes_ja?: string;
  notes_en?: string;
  price_bag: number;
  in_stock: boolean;
  visible: boolean;
};

export async function getBeans(): Promise<Bean[]> {
  const url = process.env.BEANS_SHEET_CSV_URL!;
  const raw = (await fetchCsv(url, 1800)) as RawBean[];

  return raw
    .filter((b) => (b.visible || "").toLowerCase() === "true")
    .map((b) => ({
      id: b.id,
      name: b.name,
      origin: b.origin,
      process: b.process,
      roast: b.roast,
      notes_ja: b.notes_ja,
      notes_en: b.notes_en,
      price_bag: Number(b.price_bag || 0),
      in_stock: (b.in_stock || "").toLowerCase() === "true",
      visible: (b.visible || "").toLowerCase() === "true",
    }));
}
