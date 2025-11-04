import Image from "next/image";

const MENU = [
  { title: "Beans", img: "/images/gallery/beans.jpg", desc: "季節ごとに変わるスペシャルティコーヒー豆。" },
  { title: "Drip", img: "/images/gallery/dripper.jpg", desc: "一杯ずつ丁寧に抽出するハンドドリップ。" },
  { title: "Latte", img: "/images/gallery/latteart.jpg", desc: "美しいラテアートで、心地よい時間を。" },
];

export default function MenuCards() {
  return (
    <section className="section py-20">
      <h2 className="h2 font-serif text-center mb-10">Menu</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {MENU.map((m) => (
          <article key={m.title} className="card overflow-hidden group">
            <div className="relative aspect-[4/3]">
              <Image
                src={m.img}
                alt={m.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-white mb-2">{m.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{m.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
