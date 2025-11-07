const BEANS = [
  {
    num: "01",
    title: "Brazil Cerrado",
    text: "ナッツやミルクチョコのまろやかな甘さ。やわらかな口当たりで毎日飲みたくなる定番。",
  },
  {
    num: "02",
    title: "Colombia Lavado Decaf",
    text: "カフェインレスでもしっかり満足。やさしいキャラメルの甘みとクリーンな後味。",
  },
  {
    num: "03",
    title: "Kenya Baragwi AA Washed",
    text: "ブラックカラントやシトラスの鮮やかな酸。ジューシーで立体的なフレーバー。",
  },
  {
    num: "04",
    title: "East Timor CQC #1",
    text: "クリーンでやわらかな甘み。ハーブやスパイスを思わせる余韻が心地よい特別ロット。",
  },
  {
    num: "05",
    title: "Colombia La Loma Barrel Aged Natural",
    text: "樽熟成由来の芳醇なアロマ。ドライフルーツやラムを想起させる奥行きある甘さ。",
  },
  {
    num: "06",
    title: "Brazil COE 2024 Experimental #3",
    text: "COE受賞ロット。トロピカルフルーツのニュアンスと複雑な甘酸のハーモニー。",
  },
  {
    num: "07",
    title: "Taiwan Geisha Zhuowu Mountain Coffee Farm",
    text: "ジャスミンやベルガモットの華やかな香り。透明感のある甘さと長い余韻。",
  },
];

export default function Beans() {
  return (
    <section className="section py-20 text-center">
      <h2 className="h2 font-serif mb-12">Our Beans</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {BEANS.map((b) => (
          <div key={b.num}>
            <div className="text-4xl text-brand font-serif mb-2">{b.num}</div>
            <h3 className="text-xl font-serif">{b.title}</h3>
            <p className="mt-2 text-white/70 max-w-xs mx-auto">{b.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-white/50">
        ※焙煎度・提供メニューは週ごとに変わる場合があります。
      </p>
    </section>
  );
}
