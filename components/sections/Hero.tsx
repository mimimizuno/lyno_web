"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[70vh] min-h-[480px] flex items-center justify-center"
      id="top"
    >
      {/* 背景画像 or 動画 */}
      <div className="absolute inset-0">
        <img
          src="/images/gallery/Hero.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* テキスト */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-white/60">
          Specialty Coffee Stand
        </p>
        <h1 className="mt-4 text-3xl md:text-5xl font-serif">
          Your Daily Specialty.
        </h1>
        <p className="mt-4 text-sm md:text-base text-white/70 max-w-lg mx-auto">
          糀谷の日常に寄り添う、静かで上質な一杯を。
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#menu"
            className="px-5 py-2 rounded-full border border-brand text-sm
                       hover:bg-brand hover:text-black transition"
          >
            View Menu
          </a>
          <a
            href="#access"
            className="px-5 py-2 rounded-full text-sm text-white/70 hover:text-white"
          >
            Visit Lyno
          </a>
        </div>
      </motion.div>
    </section>
  );
}
