export default function Access() {
  return (
    <main className="section py-16 space-y-6">
      <h1 className="h1">ACCESS</h1>
      <div className="card overflow-hidden">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d139.6!3d35.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sja!2sjp!4v0000000000000"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="text-white/80">横浜市…（住所を入れてください）</p>
    </main>
  );
}