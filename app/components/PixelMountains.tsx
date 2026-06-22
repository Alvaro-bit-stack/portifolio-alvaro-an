/**
 * Layered twilight mountain silhouettes with a moon and stars.
 * Pure SVG, crisp-edges, parallax-friendly.
 */
export default function PixelMountains() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0e1325 0%, #1c1b3a 30%, #432a4a 55%, #8a3d3d 78%, #d0683a 95%, #e7a25a 100%)",
        }}
      />

      {/* Stars layer */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 400 300"
        shapeRendering="crispEdges"
      >
        {STAR_POSITIONS.map((s, i) => (
          <rect
            key={i}
            x={s.x}
            y={s.y}
            width={s.size}
            height={s.size}
            fill={s.bright ? "#ffffff" : "#e8d8b0"}
            opacity={s.bright ? 1 : 0.7}
          />
        ))}
        {/* Moon */}
        <g>
          <rect x="320" y="35" width="34" height="34" fill="#f4e6c4" />
          <rect x="318" y="37" width="2" height="30" fill="#f4e6c4" />
          <rect x="354" y="37" width="2" height="30" fill="#f4e6c4" />
          <rect x="322" y="33" width="30" height="2" fill="#f4e6c4" />
          <rect x="322" y="69" width="30" height="2" fill="#f4e6c4" />
          {/* Moon shadow craters */}
          <rect x="326" y="42" width="4" height="4" fill="#d4c4a0" />
          <rect x="338" y="50" width="6" height="6" fill="#d4c4a0" />
          <rect x="330" y="60" width="3" height="3" fill="#d4c4a0" />
          {/* Glow */}
          <rect x="316" y="35" width="42" height="34" fill="#fff1a8" opacity="0.12" />
        </g>
      </svg>

      {/* Far mountain layer (lightest) */}
      <svg
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
        viewBox="0 0 400 100"
        height="40%"
        shapeRendering="crispEdges"
      >
        <polygon
          points="0,100 0,60 40,40 70,55 110,30 150,50 200,25 250,45 290,30 340,50 400,35 400,100"
          fill="#5a3a5e"
        />
      </svg>

      {/* Mid mountain layer */}
      <svg
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
        viewBox="0 0 400 100"
        height="30%"
        shapeRendering="crispEdges"
      >
        <polygon
          points="0,100 0,70 30,55 60,70 100,40 140,60 180,45 230,65 270,40 320,60 360,45 400,55 400,100"
          fill="#3a2440"
        />
      </svg>

      {/* Near mountain layer (darkest) */}
      <svg
        className="absolute bottom-0 w-full"
        preserveAspectRatio="none"
        viewBox="0 0 400 80"
        height="22%"
        shapeRendering="crispEdges"
      >
        <polygon
          points="0,80 0,55 25,40 55,55 85,30 120,50 160,35 200,55 245,30 285,55 320,40 360,55 400,45 400,80"
          fill="#1a1024"
        />
      </svg>

      {/* Ground / foreground */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[10%]"
        style={{ background: "#0d0710" }}
      />
    </div>
  );
}

const STAR_POSITIONS: { x: number; y: number; size: number; bright: boolean }[] = [
  { x: 20, y: 15, size: 1, bright: true },
  { x: 50, y: 30, size: 1, bright: false },
  { x: 80, y: 10, size: 2, bright: true },
  { x: 110, y: 25, size: 1, bright: false },
  { x: 140, y: 8, size: 1, bright: true },
  { x: 165, y: 40, size: 1, bright: false },
  { x: 195, y: 15, size: 2, bright: true },
  { x: 225, y: 35, size: 1, bright: false },
  { x: 255, y: 12, size: 1, bright: true },
  { x: 285, y: 28, size: 1, bright: false },
  { x: 305, y: 8, size: 1, bright: true },
  { x: 370, y: 20, size: 1, bright: true },
  { x: 390, y: 45, size: 1, bright: false },
  { x: 15, y: 55, size: 1, bright: false },
  { x: 65, y: 70, size: 1, bright: false },
  { x: 235, y: 70, size: 1, bright: false },
  { x: 380, y: 80, size: 1, bright: false },
];
