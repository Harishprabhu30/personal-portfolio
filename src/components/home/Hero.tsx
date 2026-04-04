"use client";

import { motion } from "framer-motion";
import StartupIntro from "./StartupIntro";
import HeroVisual from "./HeroVisual";
import AIQueryBar from "./AIQueryBar";

export default function Hero() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-3xl">
          <StartupIntro />

          <motion.h1
            initial={{ opacity: 0, y: 16, letterSpacing: "0.2em", filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "-0.03em", filter: "blur(0px)" }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white"
          >
            Harish Prabhu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl text-neutral-300"
          >
            AI & Robotics Systems Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-3 text-sm sm:text-base text-neutral-500"
          >
            MSc AI Systems Student · Robotics Research Intern · Open to Europe
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25, duration: 0.6 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {["Python", "C++", "ROS 2", "Linux", "Isaac Sim", "Computer Vision"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-800 bg-neutral-950/80 px-3 py-1.5 text-xs sm:text-sm text-neutral-300"
                >
                  {item}
                </span>
              )
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-5 max-w-xl sm:max-w-2xl text-sm sm:text-base leading-7 text-neutral-500"
          >
            From simulation to real-world robotics decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.55, duration: 0.5 }}
            className="mt-8 h-px w-32 bg-gradient-to-r from-white/40 via-white/10 to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.65, duration: 0.6 }}
            className="mt-8"
          >
            <AIQueryBar compact />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="hidden lg:flex justify-center pt-8"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}