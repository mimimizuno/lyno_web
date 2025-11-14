// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-serif text-sm">
            <span className="text-brand">Lyno</span>
          </div>
          <p>Tokyo, Ota-ku Kojiya / Specialty Coffee Stand</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/your_account"
            target="_blank"
            className="hover:text-white"
          >
            Instagram
          </a>
          <span>© {new Date().getFullYear()} Lyno</span>
        </div>
      </div>
    </footer>
  );
}
