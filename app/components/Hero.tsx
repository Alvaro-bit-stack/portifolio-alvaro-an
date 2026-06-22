"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SkyScene = dynamic(() => import("./SkyScene"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      <SkyScene />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[family-name:var(--font-jp)] text-sky-700/80 tracking-widest text-sm uppercase"
        >
          ようこそ · welcome
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-[family-name:var(--font-display)] mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-sky-950"
        >
          Hi, I&apos;m <span className="bg-gradient-to-br from-sky-500 via-indigo-400 to-pink-400 bg-clip-text text-transparent">Alvaro</span>.
          <br />
          <span className="text-sky-900/80">A sky full of code,</span>
          <br />
          <span className="text-pink-500/90">and a few good anime.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-8 max-w-xl text-lg text-sky-900/75"
        >
          CS student, intern, builder of small wonders. This is my notebook of
          photos I love, anime that shaped me, and projects I&apos;m proud of.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#about"
            className="rounded-full bg-sky-900 px-6 py-3 text-white shadow-lg hover:bg-sky-800 transition-colors"
          >
            Wander with me ↓
          </a>
          <a
            href="#anime"
            className="rounded-full glass px-6 py-3 text-sky-900 font-medium hover:bg-white/80 transition-colors"
          >
            See my anime list
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sky-700/60 text-xs tracking-widest"
        >
          ↓ scroll
        </motion.div>
      </div>
    </section>
  );
}
