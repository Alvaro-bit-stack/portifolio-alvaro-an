"use client";

import { motion } from "framer-motion";
import Section from "./Section";

type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  emoji: string;
};

const projects: Project[] = [
  {
    name: "This portfolio",
    blurb:
      "A Ghibli-flavored personal site with React Three Fiber clouds, floating petals, and a soft sky gradient. Built with love and a lot of Tailwind.",
    tags: ["Next.js", "Three.js", "Tailwind"],
    emoji: "☁️",
    href: "https://github.com/Alvaro-bit-stack",
  },
  {
    name: "Service Foundry",
    blurb:
      "Internship project at Microsoft: turning a 14-step manual service creation workflow into a guided, automated experience for engineers.",
    tags: ["TypeScript", "Azure", "DevEx"],
    emoji: "🛠️",
  },
  {
    name: "Daily Actionables Agent",
    blurb:
      "A PowerShell + AI script that reads my email, finds what actually needs me, and sends a clean morning digest.",
    tags: ["PowerShell", "AI", "Productivity"],
    emoji: "📬",
  },
  {
    name: "Something next",
    blurb:
      "There's always a next one. Replace this card with your latest little experiment.",
    tags: ["coming soon"],
    emoji: "✨",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="作品 · projects"
      title={
        <>
          Things I&apos;ve <span className="text-sky-500">built</span>.
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
            className="group glass block rounded-3xl p-7 transition-shadow hover:shadow-xl"
          >
            <div className="flex items-start justify-between">
              <span className="text-4xl">{p.emoji}</span>
              {p.href && (
                <span className="text-sky-700/60 group-hover:text-sky-700 transition-colors">
                  ↗
                </span>
              )}
            </div>
            <h3 className="font-[family-name:var(--font-display)] mt-5 text-2xl text-sky-950">
              {p.name}
            </h3>
            <p className="mt-2 text-sky-900/75">{p.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-sky-800"
                >
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
