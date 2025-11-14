import { getBeans } from "@/lib/beans";

export default async function Beans() {
  const beans = await getBeans();
  console.log(beans);
  
  return (
    <section id="beans" className="section">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="h2 mb-2">Beans</h2>
        <p className="mb-8 text-sm text-white/60">
          その時期ごとに、焙煎士と相談しながら数種類の豆をセレクトしています。
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {beans.map((b) => (
            <article
              key={b.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="font-serif text-lg mb-1">{b.name}</h3>
              <p className="text-xs text-white/60">
                {b.origin} / {b.process} / {b.roast}
              </p>
              {(b.notes_ja || b.notes_en) && (
                <p className="mt-3 text-sm text-white/80">
                  {b.notes_ja || b.notes_en}
                </p>
              )}
              <div className="mt-4 flex justify-between text-xs text-white/60">
                <span>¥{b.price_bag} / 100g</span>
                {!b.in_stock && <span className="text-red-300">Sold out</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
