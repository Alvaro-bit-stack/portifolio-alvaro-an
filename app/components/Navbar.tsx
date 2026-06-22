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
          scrolled ? "matte-dark rounded-none" : ""
        }`}
      >
        <div className="flex items-center justify-between py-3 px-3">
          <a
            href="#top"
            className="flex items-center gap-2 font-[family-name:var(--font-pixel)] text-[0.7rem] uppercase tracking-[0.2em]"
            style={{ color: scrolled ? "var(--washi)" : "var(--washi)" }}
          >
            <span
              className="inline-block h-3 w-3"
              style={{
                background: "var(--ember)",
                border: "2px solid var(--ink)",
                boxShadow: "2px 2px 0 var(--ink)",
              }}
            />
            <span>Alvaro</span>
            <span className="font-[family-name:var(--font-jp)] text-[0.65rem] opacity-70">
              空
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-[family-name:var(--font-pixel)] text-[0.65rem] uppercase tracking-[0.15em] px-3 py-2 transition-colors"
                  style={{
                    color: "var(--washi)",
                  }}
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
            className="hidden md:inline-flex pixel-btn pixel-btn-gold"
            style={{ fontSize: "0.65rem", padding: "0.5rem 0.9rem" }}
          >
            MAL ↗
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 border-2"
            style={{
              background: "var(--washi)",
              borderColor: "var(--ink)",
              boxShadow: "3px 3px 0 var(--ink)",
            }}
            aria-label="Toggle menu"
          >
            <span
              className="block h-0.5 w-5 mb-1"
              style={{ background: "var(--ink)" }}
            />
            <span
              className="block h-0.5 w-5 mb-1"
              style={{ background: "var(--ink)" }}
            />
            <span
              className="block h-0.5 w-5"
              style={{ background: "var(--ink)" }}
            />
          </button>
        </div>

        {open && (
          <ul className="md:hidden matte-dark mt-2 mb-3 p-3 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 font-[family-name:var(--font-pixel)] text-[0.7rem] uppercase tracking-wider"
                  style={{ color: "var(--washi)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://myanimelist.net/profile/fv5shi"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn pixel-btn-gold w-full justify-center"
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

