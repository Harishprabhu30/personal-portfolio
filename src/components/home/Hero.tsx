"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-32 max-w-4xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-semibold tracking-tight"
      >
        Harish Prabhu
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-2xl text-neutral-300"
      >
        AI & Robotics Systems Engineer
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-neutral-500 max-w-xl"
      >
        From simulation to real-world robotics decisions
      </motion.p>
    </section>
  );
}