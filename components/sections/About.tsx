export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 md:flex-row">
        <div className="md:w-1/2">
          <h2 className="h2 mb-4">About Lyno</h2>
          <p className="text-sm md:text-base text-white/70">
            Lynoは、糀谷駅から徒歩2分の小さなスペシャルティコーヒースタンド。
            日常のなかで、少しだけ呼吸が整うような一杯を届けたいという想いで、
            一杯ずつ丁寧に抽出しています。
          </p>
          <p className="mt-4 text-sm md:text-base text-white/70">
            仕事の合間や帰り道、家族との散歩の途中に。
            チェーンとは少し違う、ほどよく上質で、でも気取らない一杯をどうぞ。
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="/images/gallery/Lyno_inside.jpg"
              alt="Lyno interior"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
