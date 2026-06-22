"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#photos", label: "Photos" },
  { href: "#anime", label: "Anime" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "glass rounded-2xl" : ""
        }`}
      >
        <div className="flex items-center justify-between py-3">
          <a
            href="#top"
            className="flex items-center gap-2 font-[family-name:var(--font-display)] text-xl text-sky-900"
          >
            <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-sky-300 to-pink-300 shadow-[0_0_12px_rgba(244,163,191,0.6)]" />
            <span>Alvaro</span>
            <span className="font-[family-name:var(--font-jp)] text-sm text-sky-700/70">
              空
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-sky-900/80 hover:bg-white/60 hover:text-sky-900 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://myanimelist.net/profile/fv5shi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-pink-300 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            MAL ↗
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-full glass p-2"
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-5 bg-sky-900 mb-1" />
            <span className="block h-0.5 w-5 bg-sky-900 mb-1" />
            <span className="block h-0.5 w-5 bg-sky-900" />
          </button>
        </div>

        {open && (
          <ul className="md:hidden glass rounded-2xl mt-2 mb-3 p-3 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2 text-sky-900 hover:bg-white/60"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://myanimelist.net/profile/fv5shi"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-gradient-to-r from-sky-400 to-pink-300 px-4 py-2 text-white text-center font-semibold"
              >
                MyAnimeList ↗
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
