"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90svh] min-h-[560px] overflow-hidden">
      {/* 背景画像 */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/gallery/hero.jpg"
          alt="LYNO"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.65)_100%)]" />

      {/* テキスト */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-[40px] md:text-[64px] leading-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.45)] tracking-[0.02em]">
            L Y N O
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="mt-4 font-sans text-white/90 text-base md:text-lg"
          >
            <span className="block mb-1">light your new ordinary</span>
            <span className="text-white/70">コーヒーが灯す、日常のひととき</span>
          </motion.p>
        </motion.div>
      </div>

      {/* 下矢印（ゆっくり点滅） */}
      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" className="opacity-80">
          <path d="M6 9l6 6 6-6" fill="none" stroke="white" strokeWidth="1.6" />
        </svg>
      </motion.div>
    </section>
  );
}
