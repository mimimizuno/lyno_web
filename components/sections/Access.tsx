export default function Access() {
  return (
    <section id="access" className="section">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="h2 mb-4">Access</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3 text-sm text-white/70">
            <p>東京都大田区〇〇〇〇 （糀谷駅徒歩2分）</p>
            <p>Keikyu Line「糀谷駅」改札を出て、〇〇方向へ徒歩約2分。</p>
            <p className="text-xs text-white/60">
              From Haneda Airport: about 10–15 min by Keikyu Line.
            </p>
            <p className="mt-4">
              <span className="font-semibold">Hours:</span> 10:00–19:00<br />
              <span className="font-semibold">Closed:</span> Tuesday
            </p>

            <a
              href="https://maps.google.com/?q=..."
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-brand px-4 py-2 text-xs mt-4 hover:bg-brand hover:text-black transition"
            >
              Google Mapで開く
            </a>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full md:h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
