"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/src/lib/services";

export function FAQ({
  eyebrow,
  heading,
  description,
  items,
  plain = false,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: FaqItem[];
  plain?: boolean;
}) {
  const reduce = useReducedMotion() === true;
  const [open, setOpen] = useState(items[0]?.question ?? "");

  if (!items.length) return null;

  return (
    <section className={plain ? "" : "bg-surface px-5 py-16 sm:px-6 lg:px-8 lg:py-24"}>
      <div className={plain ? "" : "mx-auto w-full max-w-3xl"}>
        {eyebrow ? <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">{eyebrow}</p> : null}
        <h2 className="mt-3 text-[2rem] leading-[1.08] font-black tracking-[-0.04em] text-foreground sm:text-4xl">{heading}</h2>
        {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
        <ul className="mt-8 space-y-3">
          {items.map((item) => {
            const isOpen = open === item.question;
            return (
              <li key={item.question} className="overflow-hidden rounded-[20px] border border-line bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? "" : item.question)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[15px] font-bold tracking-[-0.02em] text-foreground">{item.question}</span>
                  <Plus className={`h-4 w-4 shrink-0 text-accent transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                      <p className="px-5 pb-5 text-sm leading-6 text-muted">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
