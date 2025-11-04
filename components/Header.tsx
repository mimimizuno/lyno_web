"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-base/70 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        {/* ロゴ */}
        <Link href="/" className="font-serif text-2xl text-white tracking-wide">
          L Y N O
        </Link>

        {/* ハンバーガーアイコン */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="relative w-7 h-5 flex flex-col justify-between group"
        >
          <span
            className={`h-[2px] w-full bg-white rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />
          <span
            className={`h-[2px] w-full bg-white rounded transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-full bg-white rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>
      </div>

      {/* フルスクリーンメニュー */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-brand/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-white font-sans text-lg tracking-wide"
          >
            {["About", "Menu", "Gallery", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-brand-light transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
