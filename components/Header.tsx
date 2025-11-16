"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { texts } from "@/lib/text";
import { drawerMotion, overlayMotion } from "@/lib/motion"; // ★ 追加

type MenuItem = { href: `#${string}`; label: keyof typeof texts.header };

const LINKS: MenuItem[] = [
  { href: "#about", label: "about" },
  { href: "#menu", label: "menu" },
  { href: "#beans", label: "beans" },
  { href: "#news", label: "news" },
  { href: "#access", label: "access" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const t = texts.header;

  // ドロワーオープン中はスクロールロック
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = open ? "hidden" : prev || "";
    return () => {
      root.style.overflow = prev || "";
    };
  }, [open]);

  // Esc で閉じる
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <header className="header-shell">
      <div className="header-inner">
        <div className="header-container">
          {/* Brand */}
          <Link href="#hero" className="brand-root">
            <div className="brand-logo-wrapper">
              <Image
                src="/images/ui/icon_transparent.png"
                alt="Lyno Coffee"
                width={56}
                height={56}
                className="brand-logo-image"
              />
            </div>
            <span className="brand-text">{texts.common.brand}</span>
          </Link>

          {/* PC nav */}
          <nav className="nav-desktop">
            {LINKS.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {t[item.label]}
              </a>
            ))}
          </nav>

          {/* SP: ハンバーガー（開く専用） */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={toggle}
            className="hamburger"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* ドロワー（オーバーレイ＋パネル） */}
      <AnimatePresence>
        {open && (
          <>
            {/* オーバーレイ：全画面、タップで閉じる */}
            <motion.div
              aria-hidden
              className="header-overlay"
              variants={overlayMotion}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={close}
            />

            {/* 右 2/3 ドロワー本体 */}
            <motion.aside
              id="header-drawer"
              role="dialog"
              aria-modal="true"
              className="header-drawer"
              variants={drawerMotion}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="header-drawer-top">
                <motion.button
                  type="button"
                  onClick={close}
                  className="drawer-close"
                  whileTap={{ scale: 0.9 }}
                >
                  <span />
                  <span />
                </motion.button>
              </div>

              {/* メニューリンク */}
              <nav className="header-drawer-inner">
                {LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="header-drawer-link"
                  >
                    {t[item.label]}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}