"use client";

import { motion } from "framer-motion";
import Section from "./Section";

// Drop image files into /public/photos/ and update this list.
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
      whileHover={{ rotate: 0, y: -6 }}
      className="p-3 pb-5 cursor-pointer matte"
      style={{ transformOrigin: "center" }}
    >
      <div
        className="relative aspect-[4/5] w-full overflow-hidden pixelated"
        style={{
          background:
            "repeating-linear-gradient(45deg, #d97a4a 0 12px, #c8552b 12px 24px)",
          border: "2px solid var(--ink)",
          imageRendering: "pixelated",
        }}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={caption}
            className="h-full w-full object-cover"
            style={{ imageRendering: "auto" }}
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center text-center px-4"
            style={{ color: "var(--washi)" }}
          >
            <span className="text-5xl mb-2 font-[family-name:var(--font-pixel)]">★</span>
            <span
              className="font-[family-name:var(--font-pixel)] text-[0.55rem] tracking-widest uppercase"
            >
              drop a photo
            </span>
            <span
              className="font-[family-name:var(--font-pixel)] text-[0.5rem] mt-1 opacity-80"
            >
              /public/photos/
            </span>
          </div>
        )}
      </div>
      <figcaption
        className="mt-3 text-center text-sm font-[family-name:var(--font-body)]"
        style={{ color: "var(--ink)" }}
      >
        {caption}
      </figcaption>
    </motion.figure>
  );
}

export default function Photos() {
  return (
    <Section
      id="photos"
      eyebrow="ALBUM · MEMORIES"
      title={
        <>
          Some photos I <span style={{ color: "var(--ember)" }}>love</span>.
        </>
      }
      subtitle="A small gallery of moments from college, projects, and everyday life. Pinned to the board like polaroids."
    >
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
        {photos.map((p, i) => (
          <Polaroid key={i} {...p} index={i} />
        ))}
      </div>

      <p
        className="mt-10 text-center text-sm font-[family-name:var(--font-pixel)] text-[0.55rem] uppercase tracking-widest"
        style={{ color: "var(--ink-2)" }}
      >
        Drop files into /public/photos/ and edit app/components/Photos.tsx
      </p>
    </Section>
  );
}

