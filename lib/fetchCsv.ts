export async function fetchCsv(url: string, revalidateSec = 1800) {
  const res = await fetch(url, { next: { revalidate: revalidateSec } });
  const text = await res.text();

  // 簡易CSVパーサ（カンマ区切り前提）
  const rows = text.trim().split(/\r?\n/).map(line => {
    const cells: string[] = [];
    let cur = "", insideQuote = false;

    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      const next = line[i + 1];

      if (c === '"' && insideQuote && next === '"') {
        cur += '"';
        i++;
        continue;
      }
      if (c === '"') {
        insideQuote = !insideQuote;
        continue;
      }
      if (c === ',' && !insideQuote) {
        cells.push(cur);
        cur = "";
        continue;
      }
      cur += c;
    }
    cells.push(cur);
    return cells;
  });

  const headers = rows.shift()!;
  return rows.map(row => Object.fromEntries(headers.map((h, i) => [h, row[i]])));
}
