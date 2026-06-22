"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const MAL_URL = "https://myanimelist.net/profile/fv5shi";

type AnimePick = {
  title: string;
  jp: string;
  vibe: string;
  rating: number;
  gradient: string;
};

const picks: AnimePick[] = [
  {
    title: "Spirited Away",
    jp: "千と千尋の神隠し",
    vibe: "comfort & wonder",
    rating: 10,
    gradient: "from-sky-300 via-emerald-200 to-amber-200",
  },
  {
    title: "Your Name",
    jp: "君の名は。",
    vibe: "ache & light",
    rating: 10,
    gradient: "from-indigo-300 via-pink-200 to-amber-200",
  },
  {
    title: "Frieren",
    jp: "葬送のフリーレン",
    vibe: "quiet & profound",
    rating: 9.5,
    gradient: "from-violet-300 via-sky-200 to-emerald-200",
  },
  {
    title: "Jujutsu Kaisen",
    jp: "呪術廻戦",
    vibe: "electric & merciless",
    rating: 9,
    gradient: "from-rose-400 via-purple-300 to-slate-300",
  },
  {
    title: "Vinland Saga",
    jp: "ヴィンランド・サガ",
    vibe: "grief into purpose",
    rating: 9.5,
    gradient: "from-amber-300 via-rose-200 to-slate-300",
  },
  {
    title: "A Silent Voice",
    jp: "聲の形",
    vibe: "tender & honest",
    rating: 10,
    gradient: "from-sky-200 via-pink-200 to-violet-200",
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
      className="glass overflow-hidden rounded-3xl"
    >
      <div
        className={`relative aspect-[3/4] w-full bg-gradient-to-br ${a.gradient}`}
      >
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <span className="font-[family-name:var(--font-jp)] text-white/95 text-2xl drop-shadow">
            {a.jp}
          </span>
        </div>
        <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-sky-900 shadow">
          ★ {a.rating.toFixed(1)}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-[family-name:var(--font-display)] text-xl text-sky-950">
          {a.title}
        </h3>
        <p className="mt-1 text-sm text-sky-900/65 italic">{a.vibe}</p>
      </div>
    </motion.div>
  );
}

export default function AnimeList() {
  return (
    <Section
      id="anime"
      eyebrow="アニメ · my watchlist"
      title={
        <>
          Anime that <span className="text-pink-500">stayed</span> with me.
        </>
      }
      subtitle="A handful of favorites. For the full receipts (currently watching, dropped, ratings), my MyAnimeList is one click away."
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
        className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl glass p-8"
      >
        <div>
          <p className="font-[family-name:var(--font-jp)] text-pink-500 text-sm tracking-widest uppercase">
            full list
          </p>
          <h3 className="font-[family-name:var(--font-display)] text-2xl text-sky-950 mt-1">
            See everything I&apos;ve watched on MyAnimeList →
          </h3>
          <p className="text-sky-900/70 mt-1 text-sm">
            Updated whenever I finish a season (or remember).
          </p>
        </div>
        <a
          href={MAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-gradient-to-r from-sky-500 to-pink-400 px-6 py-3 text-white font-semibold shadow-lg hover:scale-[1.03] transition-transform"
        >
          Visit my MAL ↗
        </a>
      </motion.div>
    </Section>
  );
}
