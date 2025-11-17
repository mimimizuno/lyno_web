"use client";

import { texts } from "@/lib/text";
import type { NewsItem } from "@/lib/data/news";

type Props = {
  items: NewsItem[];
};

export default function NewsSection({ items }: Props) {
  const t = texts.news;
  const isEmpty = items.length === 0;

  return (
    <section id="news" className="section">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h2 className="h2 mb-3">{t.title}</h2>
            <p className="p">{t.description}</p>
          </div>

          <a
            href="https://www.instagram.com/lyno.cafe.tokyo/"
            target="_blank"
            className="text-xs text-white/60 underline underline-offset-4 decoration-brand"
          >
            {t.more}
          </a>
        </div>
        {isEmpty ? (
          <p className="p">{t.empty}</p>
        ) : (
          <div className="space-y-4">
            {items.map((n) => (
              <article
                key={`${n.date}-${n.title}`}
                className="border border-brand rounded-2xl p-4"
              >
                <p className="text-xs text-white/50">{n.date}</p>
                <h3 className="mt-1 text-sm font-medium">{n.title}</h3>
                {n.body && (
                  <p className="mt-1 text-xs text-white/70">{n.body}</p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}