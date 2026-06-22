"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const socials = [
  {
    name: "GitHub",
    handle: "@Alvaro-bit-stack",
    href: "https://github.com/Alvaro-bit-stack",
    emoji: "🐙",
    color: "var(--ink)",
  },
  {
    name: "MyAnimeList",
    handle: "fv5shi",
    href: "https://myanimelist.net/profile/fv5shi",
    emoji: "🎌",
    color: "var(--ember)",
  },
  {
    name: "Email",
    handle: "say hi",
    href: "mailto:hello@example.com",
    emoji: "✉️",
    color: "var(--gold)",
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="POST · GET IN TOUCH"
      title={
        <>
          Let&apos;s be <span style={{ color: "var(--ember)" }}>friends</span>.
        </>
      }
      subtitle="Always down to talk about software, anime, or where to find the best matcha. Pick your favorite channel."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {socials.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="matte group flex items-center gap-4 p-6"
          >
            <div
              className="w-14 h-14 flex items-center justify-center text-3xl shrink-0"
              style={{
                background: s.color,
                border: "2px solid var(--ink)",
                boxShadow: "3px 3px 0 var(--ink)",
              }}
            >
              {s.emoji}
            </div>
            <div className="flex-1">
              <p
                className="font-[family-name:var(--font-pixel)] text-[0.55rem] uppercase tracking-widest"
                style={{ color: "var(--ink-2)" }}
              >
                {s.name}
              </p>
              <p
                className="font-[family-name:var(--font-body)] text-xl font-bold"
                style={{ color: "var(--ink)" }}
              >
                {s.handle}
              </p>
            </div>
            <span
              className="font-[family-name:var(--font-pixel)] text-[0.65rem]"
              style={{ color: "var(--ink)" }}
            >
              ↗
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

