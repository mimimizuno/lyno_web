import Link from "next/link";
import { NEWS } from "@/lib/news";

export default function NewsList() {
  return (
    <section className="section py-10">
      <h2 className="h2 mb-4">NEWS</h2>
      <ul className="divide-y divide-white/10 rounded-2xl border border-white/10">
        {NEWS.map(n => (
          <li key={n.id} className="flex items-center justify-between p-4 hover:bg-white/5">
            <div>
              <div className="text-sm text-white/60">{new Date(n.date).toLocaleDateString("ja-JP")}</div>
              <div className="font-semibold">{n.title}</div>
            </div>
            <Link className="btn" href={n.href}>READ</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
