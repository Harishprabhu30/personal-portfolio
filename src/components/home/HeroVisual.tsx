"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-[170px] w-[240px] items-center justify-center">
      <div className="absolute inset-0 rounded-[2rem] border border-white/5 bg-neutral-950/40 backdrop-blur-sm" />

      <div className="relative flex items-center gap-6 rounded-[2rem] border border-neutral-800 bg-neutral-950/70 px-8 py-6 shadow-subtle">
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.04, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/20 bg-black"
        >
          <div className="h-6 w-6 rounded-full bg-blue-300/80 blur-[1px]" />
          <div className="absolute inset-2 rounded-full border border-blue-300/15" />
        </motion.div>

        <motion.div
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.04, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/20 bg-black"
        >
          <div className="h-6 w-6 rounded-full bg-blue-300/80 blur-[1px]" />
          <div className="absolute inset-2 rounded-full border border-blue-300/15" />
        </motion.div>
      </div>

      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-3 h-px w-28 bg-gradient-to-r from-transparent via-blue-300/70 to-transparent"
      />
    </div>
  );
}