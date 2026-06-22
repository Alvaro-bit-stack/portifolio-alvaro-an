"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const socials = [
  {
    name: "GitHub",
    handle: "@Alvaro-bit-stack",
    href: "https://github.com/Alvaro-bit-stack",
    emoji: "🐙",
  },
  {
    name: "MyAnimeList",
    handle: "fv5shi",
    href: "https://myanimelist.net/profile/fv5shi",
    emoji: "🎌",
  },
  {
    name: "Email",
    handle: "say hi",
    href: "mailto:hello@example.com",
    emoji: "✉️",
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="お便り · get in touch"
      title={
        <>
          Let&apos;s be <span className="text-pink-500">friends</span>.
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
            className="glass group flex items-center gap-4 rounded-3xl p-6"
          >
            <span className="text-4xl">{s.emoji}</span>
            <div className="flex-1">
              <p className="text-sm text-sky-700/70 uppercase tracking-wider">
                {s.name}
              </p>
              <p className="font-[family-name:var(--font-display)] text-xl text-sky-950">
                {s.handle}
              </p>
            </div>
            <span className="text-sky-700/40 group-hover:text-sky-700 transition-colors">
              ↗
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
