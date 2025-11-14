// components/sections/NewsSection.tsx
const NEWS = [
  {
    date: "2025-11-10",
    title: "ジンジャースパイスラテ、冬季限定でスタートしました。",
    body: "サトウキビ由来のジンジャーシロップを使った、やさしい甘さのラテです。",
  },
  {
    date: "2025-11-01",
    title: "11月の営業日について",
    body: "火曜定休。その他の臨時休業はInstagramにてお知らせします。",
  },
];

export default function News() {
  return (
    <section id="news" className="section border-y border-white/5 bg-black/60">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h2 className="h2 mb-1">News</h2>
            <p className="text-sm text-white/60">
              営業時間の変更や限定メニューなどのお知らせ。
            </p>
          </div>
          <a
            href="https://www.instagram.com/your_account"
            target="_blank"
            className="text-xs text-white/60 underline underline-offset-4"
          >
            More on Instagram
          </a>
        </div>

        <div className="space-y-4">
          {NEWS.map((n) => (
            <article key={n.date} className="border border-white/10 rounded-2xl p-4">
              <p className="text-xs text-white/50">{n.date}</p>
              <h3 className="mt-1 text-sm font-medium">{n.title}</h3>
              {n.body && (
                <p className="mt-1 text-xs text-white/70">{n.body}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
