"use client";

import { motion } from "framer-motion";

export default function StartupIntro() {
  return (
    <div className="mb-6 sm:mb-7 space-y-3 overflow-hidden">
      <div className="relative h-6">
        <motion.div
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: "120%", opacity: [0, 0.9, 0.4] }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute top-1/2 h-px w-44 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.8, 1] }}
        transition={{ duration: 1, delay: 0.15 }}
        className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] text-neutral-500"
      >
        Stabilizing Signal
      </motion.p>

      <div className="flex flex-wrap items-center gap-3">
        <motion.span
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: [0, 1, 0.8, 1], filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="inline-block rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-sm text-neutral-300"
        >
          Hi
        </motion.span>
      </div>
    </div>
  );
}