"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 420);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-4 bottom-[calc(5.35rem+env(safe-area-inset-bottom))] z-50 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white text-foreground shadow-[0_14px_30px_-12px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:right-6 lg:bottom-6"
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.25} aria-hidden="true" />
    </button>
  );
}
