"use client";

import { motion } from "framer-motion";
import StartupIntro from "./StartupIntro";

export default function Hero() {
  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-36 max-w-5xl">
      <StartupIntro />

      <motion.h1
        initial={{ opacity: 0, y: 16, letterSpacing: "0.2em", filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, letterSpacing: "-0.03em", filter: "blur(0px)" }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
      >
        Harish Prabhu
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-4 sm:mt-5 md:mt-6 text-lg sm:text-xl md:text-2xl text-neutral-300"
      >
        AI & Robotics Systems Engineer
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="mt-3 max-w-xl sm:max-w-2xl text-sm sm:text-base leading-7 text-neutral-500"
      >
        From simulation to real-world robotics decisions
      </motion.p>
    </section>
  );
}