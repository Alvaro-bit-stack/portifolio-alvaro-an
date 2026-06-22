"use client";

import PixelChibi, { CHIBI_PRESETS } from "./PixelChibi";

/**
 * A strip of little chibi sprites that walk back and forth at the bottom
 * of a section. Each chibi gets its own duration and start offset for variety.
 */
type Walker = {
  preset: number;
  duration: number;
  delay: number;
  start: number; // 0..100
  bottom: number; // pixels above section bottom
  size: number;
  flip?: boolean;
};

const WALKERS: Walker[] = [
  { preset: 0, duration: 22, delay: 0, start: 5, bottom: 6, size: 36 },
  { preset: 1, duration: 26, delay: -6, start: 30, bottom: 14, size: 32 },
  { preset: 2, duration: 30, delay: -12, start: 60, bottom: 4, size: 40 },
  { preset: 3, duration: 24, delay: -3, start: 80, bottom: 12, size: 34 },
];

export default function WalkingChibis() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 overflow-hidden"
      aria-hidden
    >
      {WALKERS.map((w, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            bottom: `${w.bottom}px`,
            left: `${w.start}%`,
            animation: `chibi-march ${w.duration}s linear ${w.delay}s infinite`,
          }}
        >
          <div
            style={{
              animation: "chibi-walk 0.45s steps(2) infinite",
              transform: w.flip ? "scaleX(-1)" : undefined,
            }}
          >
            <PixelChibi {...CHIBI_PRESETS[w.preset]} size={w.size} />
          </div>
        </div>
      ))}

      {/* keyframes scoped to component */}
      <style jsx>{`
        @keyframes chibi-march {
          0% {
            transform: translateX(-110%);
          }
          100% {
            transform: translateX(110vw);
          }
        }
      `}</style>
    </div>
  );
}
