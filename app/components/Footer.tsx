import MugenTrain from "./MugenTrain";

export default function Footer() {
  return (
    <footer
      className="relative mt-20"
      style={{
        background: "var(--night)",
        borderTop: "3px solid var(--ink)",
        color: "var(--washi)",
      }}
    >
      {/* A second pass of the train across the footer */}
      <div className="relative h-32 overflow-hidden">
        <MugenTrain duration={45} bottom="0px" scale={0.65} />
      </div>

      <div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row"
        style={{ borderTop: "2px solid var(--ink-2)" }}
      >
        <p
          className="font-[family-name:var(--font-pixel)] text-[0.55rem] uppercase tracking-widest"
          style={{ color: "var(--washi)" }}
        >
          © {new Date().getFullYear()} ALVARO IZQUIERDO · GAME OVER? PRESS START
        </p>
        <p
          className="font-[family-name:var(--font-jp)] text-sm opacity-70"
          style={{ color: "var(--gold)" }}
        >
          またね · see you again
        </p>
      </div>
    </footer>
  );
}

