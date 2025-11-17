import { getMenu } from "@/lib/data/menu"; // CSV読み込み（サーバー側）

export default async function Menu() {
  const items = await getMenu();
  console.log(items);
  const seasonal = items.filter((i) => i.seasonal);
  const coffee = items.filter((i) => i.category === "coffee" && !i.seasonal);
  const latte = items.filter((i) => i.category === "latte" && !i.seasonal);

  const Line = ({ i }: { i: any }) => (
    <div className="flex items-baseline justify-between border-b border-white/10 py-2">
      <div>
        <div className="font-serif">
          {i.name_ja}
          {i.name_en && (
            <span className="ml-2 text-xs text-white/50">/ {i.name_en}</span>
          )}
        </div>
        {(i.desc_ja || i.desc_en) && (
          <p className="mt-1 text-xs text-white/60">{i.desc_ja || i.desc_en}</p>
        )}
      </div>
      <div className="ml-4 text-sm tabular-nums">¥{i.price}</div>
    </div>
  );

  return (
    <section id="menu" className="section">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="h2 mb-2">Menu</h2>
        <p className="mb-8 text-sm text-white/60">
          テイクアウト中心で、日常使いしやすいメニューをご用意しています。
        </p>

        {seasonal.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-serif tracking-[0.2em] uppercase text-brand mb-2">
              Seasonal
            </h3>
            {seasonal.map((i) => (
              <Line key={i.id} i={i} />
            ))}
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-sm font-serif tracking-[0.2em] uppercase text-white/60 mb-2">
            Drip / Coffee
          </h3>
          {coffee.map((i) => (
            <Line key={i.id} i={i} />
          ))}
        </div>

        <div>
          <h3 className="text-sm font-serif tracking-[0.2em] uppercase text-white/60 mb-2">
            Latte
          </h3>
          {latte.map((i) => (
            <Line key={i.id} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
