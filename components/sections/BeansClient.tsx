// components/sections/BeansClient.tsx
"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { texts } from "@/lib/text";
import type { Bean } from "@/lib/data/beans";

type Props = {
  items: Bean[];
};

function formatDripPrice(v?: string): string {
  if (!v) return "";
  const trimmed = v.trim();
  if (!trimmed) return "";
  if (trimmed.toLowerCase() === "ask") return "ASK";
  if (/^\d+$/u.test(trimmed)) return `¥${trimmed}`;
  return trimmed;
}

export default function BeansClient({ items }: Props) {
  const t = texts.beans;
  const isEmpty = items.length === 0;

  return (
    <section id="beans" className="section section-y">
      <div className="mx-auto max-w-5xl px-6">
        {/* タイトル＋説明 */}
        <motion.h2
          className="h2 mb-2"
          variants={fadeIn(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t.title}
        </motion.h2>
        <p className="mb-8 p">{t.description}</p>

        {isEmpty ? (
          <p className="p text-white/60">
            現在ご紹介できる豆はありません。
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((b) => {
              const dripLabel = formatDripPrice(b.priceDrip);

              return (
                <article
                  key={b.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  {/* 名前 */}
                  <h3 className="font-serif text-lg mb-1">{b.name}</h3>

                  {/* 産地／品種／プロセス／ロースト */}
                  <p className="text-xs text-white/60">
                    {b.origin}
                    {b.variety && ` / ${b.variety}`}
                    {b.process && ` / ${b.process}`}
                    {b.roast && ` / ${b.roast}`}
                  </p>

                  {/* フレーバー */}
                  {b.flavor && (
                    <p className="mt-2 text-xs text-white/60">{b.flavor}</p>
                  )}

                  {/* ノート */}
                  {(b.notes_ja || b.notes_en) && (
                    <p className="mt-3 text-sm text-white/80">
                      {b.notes_ja || b.notes_en}
                    </p>
                  )}

                  {/* ロースター */}
                  {b.roaster && (
                    <p className="mt-3 text-xs text-white/50">
                      Roasted by {b.roaster}
                    </p>
                  )}

                  {/* 価格・在庫 */}
                  <div className="mt-4 space-y-1 text-xs text-white/70">
                    {b.price100 != null && (
                      <div>
                        ¥{b.price100}
                        {t.priceUnit100}
                      </div>
                    )}

                    {b.price40 != null && (
                      <div>
                        ¥{b.price40}
                        {t.priceUnit40}
                      </div>
                    )}

                    {dripLabel && (
                      <div>For drip: {dripLabel}</div>
                    )}

                    {!b.in_stock && (
                      <div className="text-red-300">{t.soldOut}</div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}