"use client";

import { useEffect, useMemo, useState } from "react";

type Firefly = {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  drift: number;
};

export default function Fireflies({ count = 24 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const flies = useMemo<Firefly[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 18 + Math.random() * 18,
      delay: Math.random() * 20,
      size: 3 + Math.floor(Math.random() * 3),
      drift: 20 + Math.random() * 60,
    }));
  }, [count]);

  if (!mounted) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[2]">
      {flies.map((f) => (
        <span
          key={f.id}
          className="firefly"
          style={{
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            animationDuration: `${f.duration}s, 2s`,
            animationDelay: `${f.delay}s, 0s`,
          }}
        />
      ))}
    </div>
  );
}

