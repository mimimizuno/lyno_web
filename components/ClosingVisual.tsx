"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClosingVisual() {
  return (
    <section className="relative h-[80svh] min-h-[480px] overflow-hidden">
      {/* 背景写真 */}
      <Image
        src="/images/gallery/specialty.jpg"
        alt="LYNO COFFEE"
        fill
        priority
        className="object-cover brightness-[0.5]"
      />

      {/* 深緑トーンの被せ */}
      <div className="absolute inset-0 bg-brand/20 mix-blend-overlay" />

      {/* テキスト */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white leading-relaxed drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            コーヒーは、<br className="md:hidden" />
            決断のための灯りでありたい。
          </h2>
          <p className="mt-6 font-sans text-white/85 text-base md:text-lg leading-relaxed">
            LYNOは、日常の選択に寄り添う一杯を通して、
            <br className="hidden md:block" />
            「新しいふつう」を灯すカフェでありたいと考えています。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
