"use client";

import { motion } from "framer-motion";
import Section from "./Section";

// Drop image files into /public/photos/ and update this list.
// `src` is relative to /public.
const photos: { src: string | null; caption: string; tilt: number }[] = [
  { src: null, caption: "First/second year of college", tilt: -3 },
  { src: null, caption: "Late night coding sessions", tilt: 2 },
  { src: null, caption: "Family and home", tilt: -1 },
  { src: null, caption: "A really good cup of coffee", tilt: 4 },
  { src: null, caption: "The day everything clicked", tilt: -2 },
  { src: null, caption: "Friends that became family", tilt: 3 },
];

function Polaroid({
  src,
  caption,
  tilt,
  index,
}: {
  src: string | null;
  caption: string;
  tilt: number;
  index: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
      className="bg-white rounded-md p-3 pb-5 shadow-[0_15px_30px_-12px_rgba(60,110,180,0.35)] cursor-pointer"
      style={{ transformOrigin: "center" }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-gradient-to-br from-sky-100 via-pink-100 to-amber-100">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={caption}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-sky-600/50 text-center px-4">
            <span className="text-5xl mb-2">✦</span>
            <span className="text-xs uppercase tracking-widest">
              drop a photo
            </span>
            <span className="text-[10px] mt-1 opacity-60">
              /public/photos/
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-center text-sm text-sky-900/80 font-[family-name:var(--font-display)]">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

export default function Photos() {
  return (
    <Section
      id="photos"
      eyebrow="思い出 · memories"
      title={
        <>
          Some photos I <span className="text-pink-500">love</span>.
        </>
      }
      subtitle="A small gallery of moments from college, projects, and everyday life. Stuck to the page like polaroids on a corkboard."
    >
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
        {photos.map((p, i) => (
          <Polaroid key={i} {...p} index={i} />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-sky-700/60">
        Tip: replace placeholders by dropping files into{" "}
        <code className="rounded bg-white/60 px-2 py-0.5">/public/photos/</code>{" "}
        and editing{" "}
        <code className="rounded bg-white/60 px-2 py-0.5">
          app/components/Photos.tsx
        </code>
        .
      </p>
    </Section>
  );
}
