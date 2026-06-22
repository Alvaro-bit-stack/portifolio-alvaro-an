"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: Props) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          {eyebrow && (
            <p
              className="font-[family-name:var(--font-pixel)] text-[0.6rem] tracking-[0.3em] uppercase mb-4 inline-block px-2 py-1"
              style={{
                color: "var(--washi)",
                background: "var(--ember)",
                border: "2px solid var(--ink)",
                boxShadow: "3px 3px 0 var(--ink)",
              }}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className="font-[family-name:var(--font-body)] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            style={{
              color: "var(--ink)",
              textShadow: "3px 3px 0 rgba(193, 43, 43, 0.25)",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className="mt-5 text-lg sm:text-xl"
              style={{ color: "var(--ink-2)" }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

