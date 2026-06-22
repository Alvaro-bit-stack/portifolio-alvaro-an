"use client";

import { motion } from "framer-motion";
import Section from "./Section";

type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  emoji: string;
  accent: string;
};

const projects: Project[] = [
  {
    name: "This portfolio",
    blurb:
      "A pixel-art Mugen Train portfolio with a scrolling train, twilight mountains, and chibi sprites from my favorite shows.",
    tags: ["Next.js", "Three.js", "Tailwind"],
    emoji: "🚂",
    href: "https://github.com/Alvaro-bit-stack/portifolio-alvaro-an",
    accent: "var(--ember)",
  },
  {
    name: "Service Foundry",
    blurb:
      "Internship project at Microsoft. Turning a 14-step manual service creation workflow into a guided, automated experience for engineers.",
    tags: ["TypeScript", "Azure", "DevEx"],
    emoji: "🛠️",
    accent: "var(--gold)",
  },
  {
    name: "Daily Actionables Agent",
    blurb:
      "A PowerShell + AI script that reads my email, finds what actually needs me, and sends a clean morning digest.",
    tags: ["PowerShell", "AI", "Productivity"],
    emoji: "📬",
    accent: "var(--twilight-2)",
  },
  {
    name: "Something next",
    blurb:
      "There's always a next one. Replace this card with your latest little experiment.",
    tags: ["coming soon"],
    emoji: "✨",
    accent: "var(--moss)",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="QUESTS · PROJECTS"
      title={
        <>
          Things I&apos;ve <span style={{ color: "var(--ember)" }}>built</span>.
        </>
      }
      subtitle="A mix of professional work and side projects. The ones I keep coming back to are usually the small ones."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href || "#"}
            target={p.href ? "_blank" : undefined}
            rel={p.href ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className="group matte block p-7 transition-shadow"
          >
            <div className="flex items-start justify-between mb-5">
              <div
                className="w-14 h-14 flex items-center justify-center text-3xl"
                style={{
                  background: p.accent,
                  border: "2px solid var(--ink)",
                  boxShadow: "3px 3px 0 var(--ink)",
                }}
              >
                {p.emoji}
              </div>
              {p.href && (
                <span
                  className="font-[family-name:var(--font-pixel)] text-[0.6rem] tracking-widest"
                  style={{ color: "var(--ink)" }}
                >
                  OPEN ↗
                </span>
              )}
            </div>
            <h3
              className="font-[family-name:var(--font-body)] text-2xl font-bold"
              style={{ color: "var(--ink)" }}
            >
              {p.name}
            </h3>
            <p className="mt-2" style={{ color: "var(--ink-2)" }}>
              {p.blurb}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

