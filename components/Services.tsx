const SERVICES = [
  { num: "01", title: "Hand Drip", text: "豆本来の香りと味わいを引き出す抽出。" },
  { num: "02", title: "French Press", text: "しっかりとした質感を楽しむ抽出スタイル。" },
  { num: "03", title: "Take Out", text: "時間がなくても本格的な味をお持ち帰りで。" },
];

export default function Services() {
  return (
    <section className="section py-20 text-center">
      <h2 className="h2 font-serif mb-12">Our Style</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {SERVICES.map((s) => (
          <div key={s.num}>
            <div className="text-4xl text-brand font-serif mb-2">{s.num}</div>
            <h3 className="text-xl font-serif">{s.title}</h3>
            <p className="mt-2 text-white/70 max-w-xs mx-auto">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
