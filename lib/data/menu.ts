import { fetchCsv } from "./fetchCsv";

export async function getMenu() {
  const raw = await fetchCsv(process.env.MENU_SHEET_CSV_URL!, 1800);

  return raw
    .filter(i => (i.visible || "").toLowerCase() === "true")
    .map(i => ({
      id: i.id,
      name_ja: i.name_ja,
      name_en: i.name_en,
      category: i.category,
      price: Number(i.price),
      seasonal: i.seasonal?.toLowerCase() === "true",
      desc_ja: i.desc_ja,
      desc_en: i.desc_en
    }));
}
