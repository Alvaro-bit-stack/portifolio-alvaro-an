"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import PixelChibi, { CHIBI_PRESETS } from "./PixelChibi";

const MAL_URL = "https://myanimelist.net/profile/fv5shi";

type AnimePick = {
  title: string;
  jp: string;
  vibe: string;
  rating: number;
  chibi: number;
  bg: string;
};

const picks: AnimePick[] = [
  {
    title: "Spirited Away",
    jp: "千と千尋の神隠し",
    vibe: "comfort & wonder",
    rating: 10,
    chibi: 0,
    bg: "#3d6585",
  },
  {
    title: "Your Name",
    jp: "君の名は。",
    vibe: "ache & light",
    rating: 10,
    chibi: 1,
    bg: "#c8552b",
  },
  {
    title: "Frieren",
    jp: "葬送のフリーレン",
    vibe: "quiet & profound",
    rating: 9.5,
    chibi: 2,
    bg: "#2f6e3a",
  },
  {
    title: "Jujutsu Kaisen",
    jp: "呪術廻戦",
    vibe: "electric & merciless",
    rating: 9,
    chibi: 3,
    bg: "#1a2334",
  },
  {
    title: "Vinland Saga",
    jp: "ヴィンランド・サガ",
    vibe: "grief into purpose",
    rating: 9.5,
    chibi: 4,
    bg: "#5a3a28",
  },
  {
    title: "A Silent Voice",
    jp: "聲の形",
    vibe: "tender & honest",
    rating: 10,
    chibi: 5,
    bg: "#a8c4a8",
  },
];

function Card({ a, i }: { a: AnimePick; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.06 }}
      whileHover={{ y: -6 }}
      className="matte overflow-hidden"
    >
      <div
        className="relative aspect-[3/4] w-full pixelated"
        style={{ background: a.bg }}
      >
        {/* Pixel scanlines for that CRT feel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.2) 0 1px, transparent 1px 4px)",
            opacity: 0.4,
          }}
        />
        {/* Chibi character centered */}
        <div className="absolute inset-0 flex items-end justify-center pb-8">
          <PixelChibi {...CHIBI_PRESETS[a.chibi]} size={120} />
        </div>
        {/* JP title at bottom */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-black/60">
          <span
            className="font-[family-name:var(--font-jp)] text-xl"
            style={{ color: "var(--washi)" }}
          >
            {a.jp}
          </span>
        </div>
        {/* Rating chip */}
        <div
          className="absolute top-3 right-3 px-2 py-1 font-[family-name:var(--font-pixel)] text-[0.6rem]"
          style={{
            background: "var(--gold)",
            color: "var(--ink)",
            border: "2px solid var(--ink)",
            boxShadow: "2px 2px 0 var(--ink)",
          }}
        >
          ★ {a.rating.toFixed(1)}
        </div>
      </div>
      <div
        className="p-5"
        style={{ background: "var(--washi-2)", borderTop: "2px solid var(--ink)" }}
      >
        <h3
          className="font-[family-name:var(--font-body)] text-xl font-bold"
          style={{ color: "var(--ink)" }}
        >
          {a.title}
        </h3>
        <p
          className="mt-1 text-sm italic"
          style={{ color: "var(--ink-2)" }}
        >
          {a.vibe}
        </p>
      </div>
    </motion.div>
  );
}

export default function AnimeList() {
  return (
    <Section
      id="anime"
      eyebrow="PARTY · MY WATCHLIST"
      title={
        <>
          Anime that <span style={{ color: "var(--ember)" }}>stayed</span> with me.
        </>
      }
      subtitle="A handful of favorites. For the full receipts — currently watching, dropped, ratings — my MyAnimeList is one click away."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((a, i) => (
          <Card key={a.title} a={a} i={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 matte p-8"
      >
        <div className="flex items-center gap-4">
          <PixelChibi {...CHIBI_PRESETS[5]} size={56} />
          <div>
            <p
              className="font-[family-name:var(--font-pixel)] text-[0.55rem] tracking-widest uppercase"
              style={{ color: "var(--ember)" }}
            >
              FULL LIST
            </p>
            <h3
              className="font-[family-name:var(--font-body)] text-2xl font-bold mt-1"
              style={{ color: "var(--ink)" }}
            >
              Everything I&apos;ve watched on MyAnimeList →
            </h3>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--ink-2)" }}
            >
              Updated whenever I finish a season (or remember).
            </p>
          </div>
        </div>
        <a
          href={MAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn pixel-btn-dark shrink-0"
        >
          Visit my MAL ↗
        </a>
      </motion.div>
    </Section>
  );
}

