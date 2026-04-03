"use client";

import { motion } from "framer-motion";

export default function StartupIntro() {
  return (
    <div className="mb-5 sm:mb-6 space-y-2">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.4, 1] }}
        transition={{ duration: 0.8 }}
        className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] text-neutral-500"
      >
        booting interface...
      </motion.p>

      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-sm text-neutral-400"
      >
        <span className="inline-block rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1">
          Hi
        </span>
      </motion.div>
    </div>
  );
}