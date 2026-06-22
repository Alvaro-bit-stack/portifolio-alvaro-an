"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import PixelChibi, { CHIBI_PRESETS } from "./PixelChibi";

const facts = [
  { kanji: "学", label: "Studying", value: "Computer Science", color: "var(--ember)" },
  { kanji: "夢", label: "Dreaming of", value: "Beautiful software", color: "var(--gold)" },
  { kanji: "色", label: "Favorite color", value: "Twilight blue", color: "var(--twilight-2)" },
  { kanji: "茶", label: "Drink of choice", value: "Matcha latte", color: "var(--moss)" },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="LEVEL 1 · ABOUT ME"
      title={
        <>
          A little about <span style={{ color: "var(--ember)" }}>me</span>.
        </>
      }
      subtitle="I like building things that feel a little bit alive. Interfaces that breathe, animations that smile, and code that doesn't take itself too seriously."
    >
      <div className="grid gap-6 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 matte p-8 sm:p-10"
        >
          <div className="flex items-start gap-5 mb-5">
            <div className="shrink-0">
              <PixelChibi {...CHIBI_PRESETS[3]} size={72} />
            </div>
            <div>
              <p
                className="font-[family-name:var(--font-pixel)] text-[0.55rem] uppercase tracking-widest mb-2"
                style={{ color: "var(--ember)" }}
              >
                Player 1
              </p>
              <p
                className="font-[family-name:var(--font-body)] text-2xl font-bold"
                style={{ color: "var(--ink)" }}
              >
                Alvaro Izquierdo
              </p>
              <p style={{ color: "var(--ink-2)" }}>
                CS Student · Microsoft Intern · anime enjoyer
              </p>
            </div>
          </div>

          <p className="leading-relaxed text-lg" style={{ color: "var(--ink-2)" }}>
            I&apos;m a CS student who spends most of his time somewhere between
            a terminal and an art board. I love the moment a feature finally
            clicks, the kind of quiet satisfaction you get from a perfectly
            timed animation, and watching an anime that makes the world feel a
            little bigger.
          </p>
          <p className="mt-4 leading-relaxed text-lg" style={{ color: "var(--ink-2)" }}>
            Right now I&apos;m interning, learning a lot about how real systems
            get built, and slowly chipping away at side projects that make me
            happy. This site is one of them.
          </p>
        </motion.div>

        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="matte p-5 flex flex-col gap-2"
            >
              <span
                className="font-[family-name:var(--font-jp)] text-3xl"
                style={{ color: f.color }}
              >
                {f.kanji}
              </span>
              <span
                className="font-[family-name:var(--font-pixel)] text-[0.55rem] uppercase tracking-widest"
                style={{ color: "var(--ink-2)" }}
              >
                {f.label}
              </span>
              <span
                className="font-bold"
                style={{ color: "var(--ink)" }}
              >
                {f.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

