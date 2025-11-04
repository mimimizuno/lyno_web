import Image from "next/image";

type Item = {
  src: string;
  title: string;
  body: string;
  cta?: string;
  href?: string;
};

const ITEMS: Item[] = [
  {
    src: "/images/gallery/lyno_inside.jpg",
    title: "静けさに、灯りを。",
    body:
      "柔らかな照明と深い緑。カップから立ちのぼる香りを、ゆっくりと楽しむ時間をデザインします。",
    cta: "店内を見る",
    href: "#access",
  },
  {
    src: "/images/gallery/dripper.jpg",
    title: "一杯ずつのハンドドリップ",
    body:
      "フルーティでクリーンな抽出。レシピは季節の豆に合わせて微調整し、甘さを最大化します。",
    cta: "メニューへ",
    href: "#menu",
  },
  {
    src: "/images/gallery/latteart.jpg",
    title: "ラテのやさしさ",
    body:
      "エスプレッソの余韻とミルクの甘み。温度と質感を整え、後味にやわらかさを残します。",
    cta: "お問い合わせ",
    href: "#contact",
  },
  {
    src: "/images/gallery/lyno_outside.jpg",
    title: "通りに開く緑",
    body:
      "外の空気とつながる席もご用意しています。テイクアウトでも、日常に小さな灯りを。",
    cta: "アクセス",
    href: "#access",
  },
];

export default function Gallery() {
  return (
    <section className="section py-16 md:py-24 space-y-16">
      {ITEMS.map((it, i) => (
        <article
          key={it.src}
          className="grid md:grid-cols-5 gap-8 items-center"
        >
          {/* 画像（左・3カラム分） */}
          <div className="md:col-span-3">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-soft aspect-[16/10]">
              <Image
                src={it.src}
                alt={it.title}
                fill
                sizes="(max-width:768px) 100vw, 60vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </div>

          {/* 説明（右・2カラム分） */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 leading-snug">
              {it.title}
            </h3>
            <p className="font-sans text-white/80 leading-relaxed">
              {it.body}
            </p>

            {it.cta && (
              <a
                href={it.href ?? "#"}
                className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-2.5 text-white hover:bg-brand/20 hover:border-brand transition-colors"
              >
                {it.cta}
              </a>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
