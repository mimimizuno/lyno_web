"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { texts } from "@/lib/text";
import type { MenuItem } from "@/lib/data/menu";

type Props = {
  items: MenuItem[];
};

// ASK対策
function formatPrice(raw: string, askLabel: string) {
  const v = (raw || "").trim();
  if (!v) return "";
  if (v.toLowerCase() === "ask") return askLabel;
  if (/^\d+$/u.test(v)) return `¥${v}`;
  return v;
}

function Line({ item }: { item: MenuItem }) {
  const hasDesc = item.desc_ja || item.desc_en;
  const priceLabel = formatPrice(item.price, texts.menu.ask);

  return (
    <div className="flex items-baseline justify-between border-b border-white/10 py-2">
      <div>
        <div className="font-serif">
          {item.name_ja}
          {item.name_en && (
            <span className="ml-2 text-xs text-white/50">/ {item.name_en}</span>
          )}
        </div>

        {hasDesc && (
          <p className="mt-1 text-xs text-white/60">
            {item.desc_ja || item.desc_en}
          </p>
        )}
      </div>

      {priceLabel && (
        <div className="ml-4 text-sm tabular-nums">{priceLabel}</div>
      )}
    </div>
  );
}

export default function MenuClient({ items }: Props) {
  const t = texts.menu;

  const seasonal = items.filter((i) => i.seasonal);
  const coffee = items.filter((i) => i.category === "Coffee" && !i.seasonal);
  const teaLatte = items.filter(
    (i) => i.category === "Tea Latte" && !i.seasonal,
  );
  const others = items.filter(
    (i) => i.category === "Others" && !i.seasonal,
  );
  const option = items.filter(
    (i) => i.category === "Option" && !i.seasonal,
  );

  return (
    <section id="menu" className="section section-y">
      <div className="mx-auto max-w-5xl px-6">

        {/* タイトル（motion） */}
        <motion.h2
          className="h2 mb-3"
          variants={fadeIn(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t.title}
        </motion.h2>

        <p className="mb-8 p">{t.description}</p>

        {/* Seasonal */}
        {seasonal.length > 0 && (
          <div className="mb-8">
            <h3 className="h3 font-sans tracking-[0.2em] text-brand mb-2">
              {t.seasonal}
            </h3>
            {seasonal.map((item) => (
              <Line key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* Coffee */}
        {coffee.length > 0 && (
          <div className="mb-8">
            <h3 className="h3 font-sans tracking-[0.2em] text-brand mb-2">
              {t.coffee}
            </h3>
            {coffee.map((item) => (
              <Line key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* Tea Latte */}
        {teaLatte.length > 0 && (
          <div className="mb-8">
            <h3 className="h3 font-sans tracking-[0.2em] text-brand mb-2">
              {t.teaLatte}
            </h3>
            {teaLatte.map((item) => (
              <Line key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* Others */}
        {others.length > 0 && (
          <div className="mb-8">
            <h3 className="h3 font-sans tracking-[0.2em] text-brand mb-2">
              {t.others}
            </h3>
            {others.map((item) => (
              <Line key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* Option */}
        {option.length > 0 && (
          <div>
            <h3 className="h3 font-sans tracking-[0.2em] text-brand mb-2">
              {t.option}
            </h3>
            {option.map((item) => (
              <Line key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}