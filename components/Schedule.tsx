import { WEEK } from "@/lib/schedule";

export default function Schedule() {
  return (
    <section className="section py-10">
      <h2 className="h2 mb-6">営業スケジュール</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {WEEK.map((d) => (
          <div key={d.date} className="card p-4 text-center">
            <div className="text-sm text-white/60">{d.dow}</div>
            <div className="text-2xl font-semibold">{d.date}</div>
            {d.open ? (
              <div className="mt-2">
                <span className="inline-block rounded bg-brand px-2 py-0.5 text-sm font-semibold">OPEN</span>
                <div className="mt-1 text-white/80">{d.open} – {d.close}</div>
              </div>
            ) : (
              <div className="mt-3 text-white/50">{d.note ?? "CLOSED"}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
