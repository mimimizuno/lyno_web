"use client";

import { useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#beans", label: "Beans" },
  { href: "#news", label: "News" },
  { href: "#access", label: "Access" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3
                      bg-black/60 backdrop-blur border-b border-white/5">
        <div className="font-serif text-lg tracking-wide">
          <span className="text-brand">Lyno</span>
        </div>

        {/* PC nav */}
        <nav className="hidden md:flex gap-8 text-sm text-white/80">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-6 bg-white transition
                           before:block before:h-px before:w-6 before:bg-white
                           before:relative before:-translate-y-2
                           after:block after:h-px after:w-6 after:bg-white
                           after:relative after:translate-y-2" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-black/90 backdrop-blur border-b border-white/10">
          <div className="mx-auto max-w-5xl px-4 py-4 space-y-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-white/80"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
