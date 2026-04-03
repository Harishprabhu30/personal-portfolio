"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  answer: string | null;
};

export default function AIAnswerPanel({ answer }: Props) {
  return (
    <AnimatePresence mode="wait">
      {answer ? (
        <motion.div
          key={answer}
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.35 }}
          className="mt-6 max-w-2xl mx-auto overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950"
        >
          <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-500" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-500">
                system response
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-neutral-600">v1</span>
          </div>

          <div className="px-4 sm:px-5 py-5">
            <p className="mb-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-600">
              output
            </p>
            <p className="text-sm sm:text-base leading-7 text-neutral-300">{answer}</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}