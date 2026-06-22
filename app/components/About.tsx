"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const facts = [
  { kanji: "学", label: "Studying", value: "Computer Science" },
  { kanji: "夢", label: "Dreaming of", value: "Beautiful software" },
  { kanji: "色", label: "Favorite color", value: "Sky blue, of course" },
  { kanji: "茶", label: "Drink of choice", value: "Matcha latte" },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="自己紹介 · about me"
      title={
        <>
          A little about <span className="text-sky-500">me</span>.
        </>
      }
      subtitle="I like building things that feel a little bit alive — interfaces that breathe, animations that smile, and code that doesn't take itself too seriously."
    >
      <div className="grid gap-6 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 glass rounded-3xl p-8 sm:p-10"
        >
          <p className="text-sky-950/85 leading-relaxed text-lg">
            I&apos;m a CS student who spends most of his time somewhere between
            a terminal and an art board. I love the moment a feature finally
            clicks, the kind of quiet satisfaction you get from a perfectly
            timed animation, and watching an anime that makes the world feel a
            little bigger.
          </p>
          <p className="mt-4 text-sky-950/85 leading-relaxed text-lg">
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
              className="glass rounded-2xl p-5 flex flex-col gap-2"
            >
              <span className="font-[family-name:var(--font-jp)] text-3xl text-pink-400/90">
                {f.kanji}
              </span>
              <span className="text-xs uppercase tracking-wider text-sky-700/70">
                {f.label}
              </span>
              <span className="text-sky-950 font-semibold">{f.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
