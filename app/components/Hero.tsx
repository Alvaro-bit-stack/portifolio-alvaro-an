"use client";

import { motion } from "framer-motion";
import MugenTrain from "./MugenTrain";
import PixelMountains from "./PixelMountains";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden text-washi"
      style={{ color: "var(--washi)" }}
    >
      <PixelMountains />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-44">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[family-name:var(--font-pixel)] text-[0.65rem] tracking-[0.25em] uppercase"
          style={{ color: "var(--gold)" }}
        >
          PRESS START &middot; ようこそ
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-[family-name:var(--font-body)] mt-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1] font-bold"
          style={{
            textShadow:
              "4px 4px 0 #1a1410, 8px 8px 0 rgba(193, 43, 43, 0.55)",
          }}
        >
          Hi, I&apos;m{" "}
          <span style={{ color: "var(--gold)" }}>Alvaro</span>.
          <br />
          <span style={{ color: "#f4d8b0" }}>One stop on the</span>
          <br />
          <span style={{ color: "var(--sunset-2)" }}>Mugen Line.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-7 max-w-xl text-lg"
          style={{ color: "#f0e0bc" }}
        >
          CS student, intern, builder of small wonders. This is my pixelated
          notebook of photos, anime, and projects. The train carries the cast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a href="#about" className="pixel-btn">
            ▶ board the train
          </a>
          <a href="#anime" className="pixel-btn pixel-btn-gold">
            my anime list
          </a>
        </motion.div>
      </div>

      {/* The Mugen Train scrolls along the bottom edge */}
      <MugenTrain duration={52} bottom="40px" scale={1.0} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.1 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 font-[family-name:var(--font-pixel)] text-[0.55rem] tracking-[0.3em] z-20"
        style={{ color: "#e7a25a" }}
      >
        ↓ SCROLL
      </motion.div>
    </section>
  );
}

