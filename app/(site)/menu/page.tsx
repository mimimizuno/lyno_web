export default function Menu() {
  return (
    <main className="section py-16">
      <h1 className="h1 mb-6">MENU</h1>
      <ul className="grid md:grid-cols-2 gap-4">
        <li className="card p-5">
          <h3 className="text-xl font-semibold">Hand Drip</h3>
          <p className="text-white/70">Single origin / Seasonal</p>
        </li>
        <li className="card p-5">
          <h3 className="text-xl font-semibold">Espresso</h3>
          <p className="text-white/70">Cappuccino / Americano / etc.</p>
        </li>
      </ul>
    </main>
  );
}