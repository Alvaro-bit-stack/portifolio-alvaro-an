"use client";

import PixelChibi, { CHIBI_PRESETS } from "./PixelChibi";

/**
 * Colors lifted from the Mugen Train (Demon Slayer) — black body,
 * deep red accents, gold trim, warm yellow window glow.
 */
const C = {
  body: "#1a1410",
  bodyDark: "#0d0907",
  red: "#a01818",
  redDark: "#6b0e0e",
  gold: "#d4a72c",
  goldDark: "#8a6b18",
  window: "#f6d65c",
  windowDim: "#caa838",
  steam: "#c8c4b8",
  rail: "#3a2a1e",
  spark: "#ffb24a",
} as const;

/** Locomotive SVG width 130 */
function Locomotive() {
  return (
    <g>
      {/* Cow catcher (slanted front) */}
      <polygon points="0,72 22,72 18,58 6,58" fill={C.bodyDark} />
      <polygon points="2,72 22,72 19,60 8,60" fill={C.red} />
      <rect x="4" y="70" width="14" height="2" fill={C.gold} />

      {/* Headlight */}
      <rect x="4" y="32" width="14" height="14" fill={C.bodyDark} />
      <rect x="6" y="34" width="10" height="10" fill={C.gold} />
      <rect x="8" y="36" width="6" height="6" fill="#fff1a8" />
      <rect x="9" y="37" width="3" height="3" fill="#ffffff" />

      {/* Boiler (cylinder body) */}
      <rect x="14" y="24" width="80" height="38" fill={C.body} />
      <rect x="14" y="24" width="80" height="3" fill={C.gold} />
      <rect x="14" y="60" width="80" height="2" fill={C.gold} />
      <rect x="14" y="36" width="80" height="2" fill={C.red} />
      <rect x="14" y="50" width="80" height="2" fill={C.red} />

      {/* Boiler bands */}
      <rect x="30" y="24" width="2" height="38" fill={C.goldDark} />
      <rect x="58" y="24" width="2" height="38" fill={C.goldDark} />
      <rect x="78" y="24" width="2" height="38" fill={C.goldDark} />

      {/* Smokestack */}
      <rect x="40" y="6" width="14" height="20" fill={C.body} />
      <rect x="36" y="4" width="22" height="6" fill={C.bodyDark} />
      <rect x="36" y="4" width="22" height="2" fill={C.gold} />

      {/* Steam dome */}
      <rect x="64" y="14" width="12" height="12" fill={C.body} />
      <rect x="62" y="12" width="16" height="4" fill={C.gold} />
      <rect x="66" y="8" width="8" height="6" fill={C.body} />

      {/* Cabin (back of locomotive) */}
      <rect x="92" y="10" width="38" height="58" fill={C.body} />
      <rect x="90" y="8" width="42" height="4" fill={C.bodyDark} />
      <rect x="90" y="8" width="42" height="2" fill={C.gold} />
      <rect x="92" y="64" width="38" height="4" fill={C.red} />
      <rect x="92" y="68" width="38" height="2" fill={C.gold} />

      {/* Cabin window with conductor */}
      <rect x="98" y="20" width="26" height="28" fill={C.bodyDark} />
      <rect x="100" y="22" width="22" height="24" fill={C.window} />
      <g transform="translate(104, 24)">
        <PixelChibi
          {...CHIBI_PRESETS[3]}
          size={20}
          accent="#a01818"
        />
      </g>

      {/* Wheels (3) */}
      <Wheel cx={26} cy={70} r={10} />
      <Wheel cx={56} cy={70} r={8} />
      <Wheel cx={86} cy={70} r={10} />

      {/* Connecting rod */}
      <rect x="20" y="68" width="72" height="2" fill={C.red} />
      <rect x="24" y="66" width="4" height="6" fill={C.gold} />
      <rect x="54" y="66" width="4" height="6" fill={C.gold} />
      <rect x="84" y="66" width="4" height="6" fill={C.gold} />
    </g>
  );
}

function Wheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <rect x={cx - r} y={cy - r} width={r * 2} height={r * 2} fill={C.body} />
      <rect x={cx - r + 1} y={cy - r + 1} width={r * 2 - 2} height={r * 2 - 2} fill={C.bodyDark} />
      <rect x={cx - r + 3} y={cy - r + 3} width={r * 2 - 6} height={r * 2 - 6} fill={C.gold} />
      <rect x={cx - 1} y={cy - r + 1} width={2} height={r * 2 - 2} fill={C.body} />
      <rect x={cx - r + 1} y={cy - 1} width={r * 2 - 2} height={2} fill={C.body} />
    </g>
  );
}

/** Single carriage, 92 units wide. windowChibis = which CHIBI_PRESETS to put in windows. */
function Carriage({
  offsetX,
  windowChibis,
  flagColor = C.red,
}: {
  offsetX: number;
  windowChibis: [number, number];
  flagColor?: string;
}) {
  return (
    <g transform={`translate(${offsetX} 0)`}>
      {/* Roof */}
      <rect x="0" y="10" width="92" height="6" fill={C.bodyDark} />
      <rect x="0" y="10" width="92" height="2" fill={C.gold} />

      {/* Body */}
      <rect x="2" y="16" width="88" height="52" fill={C.body} />
      <rect x="2" y="16" width="88" height="2" fill={C.gold} />
      <rect x="2" y="46" width="88" height="3" fill={C.red} />
      <rect x="2" y="60" width="88" height="2" fill={C.gold} />
      <rect x="2" y="64" width="88" height="2" fill={C.redDark} />

      {/* Two windows with chibis */}
      <WindowWithChibi x={8} y={20} chibiIndex={windowChibis[0]} />
      <WindowWithChibi x={50} y={20} chibiIndex={windowChibis[1]} />

      {/* Door between windows */}
      <rect x="44" y="20" width="4" height="40" fill={C.bodyDark} />
      <rect x="45" y="38" width="2" height="2" fill={C.gold} />

      {/* Little flag on top */}
      <rect x="44" y="4" width="1" height="8" fill={C.body} />
      <rect x="45" y="4" width="6" height="4" fill={flagColor} />

      {/* Wheels */}
      <Wheel cx={20} cy={70} r={8} />
      <Wheel cx={72} cy={70} r={8} />
      <rect x="14" y="68" width="64" height="2" fill={C.red} />
    </g>
  );
}

function WindowWithChibi({
  x,
  y,
  chibiIndex,
}: {
  x: number;
  y: number;
  chibiIndex: number;
}) {
  const preset = CHIBI_PRESETS[chibiIndex % CHIBI_PRESETS.length];
  return (
    <g>
      <rect x={x} y={y} width="36" height="26" fill={C.bodyDark} />
      <rect x={x + 1} y={y + 1} width="34" height="24" fill={C.window} />
      {/* Window cross-bar */}
      <rect x={x + 17} y={y + 1} width="2" height="24" fill={C.goldDark} />
      <rect x={x + 1} y={y + 12} width="34" height="1" fill={C.goldDark} />
      <g transform={`translate(${x + 10} ${y + 2})`}>
        <PixelChibi {...preset} size={22} accent={preset.accent} />
      </g>
    </g>
  );
}

/** Steam puff that rises and dissipates */
function SteamPuff({ delay }: { delay: number }) {
  return (
    <div
      className="absolute"
      style={{
        left: "44px",
        top: "0px",
        width: "16px",
        height: "16px",
        background: C.steam,
        borderRadius: "50%",
        opacity: 0,
        animation: `steam-rise 2.4s ease-out ${delay}s infinite`,
        boxShadow: `8px 0 0 ${C.steam}, -6px 4px 0 #d4d0c4, 4px 6px 0 #d4d0c4`,
      }}
    />
  );
}

/**
 * Mugen Train: wide SVG locomotive + 4 carriages, scrolling right-to-left
 * across the parent. Drop into any container; it positions absolutely.
 */
export default function MugenTrain({
  duration = 28,
  bottom = "0px",
  scale = 1,
}: {
  duration?: number;
  bottom?: string;
  scale?: number;
}) {
  const trainWidth = 130 + 92 * 4 + 8 * 3; // loco + 4 carriages + couplings
  const height = 90;

  return (
    <div
      className="pointer-events-none absolute left-0 right-0 overflow-hidden"
      style={{ bottom, height: `${height * scale + 30}px` }}
      aria-hidden
    >
      <div
        className="absolute"
        style={{
          width: `${trainWidth * scale}px`,
          height: `${(height + 20) * scale}px`,
          animation: `train-pass ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {/* Steam puffs follow the smokestack */}
        <div
          className="absolute"
          style={{ left: 0, top: 0, width: 60, height: 30 }}
        >
          <SteamPuff delay={0} />
          <SteamPuff delay={0.6} />
          <SteamPuff delay={1.2} />
          <SteamPuff delay={1.8} />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${trainWidth} ${height}`}
          width={trainWidth * scale}
          height={height * scale}
          shapeRendering="crispEdges"
          style={{ imageRendering: "pixelated", display: "block" }}
        >
          <Locomotive />

          {/* Couplings + carriages */}
          {Array.from({ length: 4 }).map((_, i) => {
            const x = 130 + 8 + i * (92 + 8);
            const pickA = (i * 2) % CHIBI_PRESETS.length;
            const pickB = (i * 2 + 1) % CHIBI_PRESETS.length;
            const flag =
              i === 0 ? C.gold : i === 1 ? C.red : i === 2 ? "#7a1d12" : C.gold;
            return (
              <g key={i}>
                {/* Coupling */}
                <rect x={x - 8} y="48" width="8" height="6" fill={C.body} />
                <rect x={x - 7} y="49" width="6" height="4" fill={C.bodyDark} />
                <Carriage
                  offsetX={x}
                  windowChibis={[pickA, pickB]}
                  flagColor={flag}
                />
              </g>
            );
          })}

          {/* Rails: thin dark line under the train */}
          <rect x="0" y="82" width={trainWidth} height="2" fill={C.rail} />
          <rect x="0" y="86" width={trainWidth} height="2" fill={C.rail} />
          {Array.from({ length: Math.ceil(trainWidth / 12) }).map((_, i) => (
            <rect
              key={i}
              x={i * 12}
              y="84"
              width="6"
              height="2"
              fill="#1a1410"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
