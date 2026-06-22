export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/40 bg-white/30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-sky-900/70 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Alvaro Izquierdo. Built with Next.js,
          Three.js, and a little sky.
        </p>
        <p className="font-[family-name:var(--font-jp)] text-sky-700/60">
          またね · see you again
        </p>
      </div>
    </footer>
  );
}
