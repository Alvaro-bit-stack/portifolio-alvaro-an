type ChibiProps = {
  hair?: string;
  skin?: string;
  body?: string;
  accent?: string;
  /** Width in CSS pixels */
  size?: number;
  /** Optional facing direction */
  facing?: "left" | "right";
  className?: string;
};

/**
 * A small pixel-art chibi character built from SVG rects.
 * Each unit in the viewBox = one "pixel". Keep coordinates integer.
 * Default size is 48px tall.
 */
export default function PixelChibi({
  hair = "#2b2120",
  skin = "#f0c9a1",
  body = "#3a4c8c",
  accent = "#c12b2b",
  size = 48,
  facing = "right",
  className = "",
}: ChibiProps) {
  const ratio = 14 / 16; // width / height
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 16"
      width={size * ratio}
      height={size}
      shapeRendering="crispEdges"
      style={{
        imageRendering: "pixelated",
        transform: facing === "left" ? "scaleX(-1)" : undefined,
      }}
      className={className}
      aria-hidden
    >
      {/* Hair back outline */}
      <rect x="3" y="1" width="8" height="1" fill={hair} />
      <rect x="2" y="2" width="10" height="2" fill={hair} />
      {/* Face */}
      <rect x="3" y="4" width="8" height="4" fill={skin} />
      {/* Hair bangs */}
      <rect x="3" y="4" width="3" height="1" fill={hair} />
      <rect x="8" y="4" width="3" height="1" fill={hair} />
      <rect x="3" y="5" width="1" height="1" fill={hair} />
      <rect x="10" y="5" width="1" height="1" fill={hair} />
      {/* Eyes */}
      <rect x="5" y="6" width="1" height="1" fill={accent} />
      <rect x="8" y="6" width="1" height="1" fill={accent} />
      {/* Mouth */}
      <rect x="6" y="7" width="2" height="1" fill="#3a2a25" />
      {/* Neck */}
      <rect x="6" y="8" width="2" height="1" fill={skin} />
      {/* Body (jacket) */}
      <rect x="3" y="9" width="8" height="4" fill={body} />
      {/* Accent stripe on jacket */}
      <rect x="3" y="10" width="8" height="1" fill={accent} />
      {/* Arms */}
      <rect x="2" y="9" width="1" height="3" fill={body} />
      <rect x="11" y="9" width="1" height="3" fill={body} />
      {/* Hands */}
      <rect x="2" y="12" width="1" height="1" fill={skin} />
      <rect x="11" y="12" width="1" height="1" fill={skin} />
      {/* Legs */}
      <rect x="4" y="13" width="2" height="2" fill={hair} />
      <rect x="8" y="13" width="2" height="2" fill={hair} />
      {/* Feet */}
      <rect x="3" y="15" width="3" height="1" fill="#1a1410" />
      <rect x="8" y="15" width="3" height="1" fill="#1a1410" />
    </svg>
  );
}

/**
 * A small library of presets evoking the vibes (NOT likeness) of
 * Alvaro's favorite anime. Colors only — generic chibi silhouettes.
 */
export const CHIBI_PRESETS = [
  // Spirited Away vibe (white hair, river-spirit blue)
  { hair: "#e8e4d4", skin: "#f4d8b0", body: "#3d6585", accent: "#9ec4d6" },
  // Your Name vibe (warm sunset)
  { hair: "#2b1a14", skin: "#f4d0a8", body: "#c8552b", accent: "#f6d65c" },
  // Frieren vibe (long silver hair, mage green)
  { hair: "#d8d4c4", skin: "#f4d8b0", body: "#2f6e3a", accent: "#d4a72c" },
  // Jujutsu Kaisen vibe (black hair, dark uniform, blue accent)
  { hair: "#1a1410", skin: "#e8c69a", body: "#1a2334", accent: "#3a82c6" },
  // Vinland Saga vibe (blond viking)
  { hair: "#d4a83a", skin: "#f0c0a0", body: "#5a3a28", accent: "#7a1d12" },
  // Silent Voice vibe (soft brown hair, pastel)
  { hair: "#5a3a28", skin: "#f4d8b0", body: "#a8c4a8", accent: "#d97a8c" },
] as const;
