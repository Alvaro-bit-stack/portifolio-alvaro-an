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
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <p className="font-[family-name:var(--font-jp)] text-pink-500 text-sm tracking-widest uppercase mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-sky-950">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-sky-900/75">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
