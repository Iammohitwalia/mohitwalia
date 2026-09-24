"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/src/components/ui/Reveal";
import { contactFaqs } from "@/src/lib/contact-page";

export function FAQ() {
  const reduce = useReducedMotion() === true;
  const [open, setOpen] = useState<string>(contactFaqs[0]?.question ?? "");

  return (
    <section className="bg-surface px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" aria-hidden="true" />
            Questions
          </p>
          <h2 className="mt-5 text-[2.15rem] leading-[1.05] font-black tracking-[-0.04em] text-foreground sm:text-5xl">
            Before you write
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted">
            A few answers about timing, the stack, and how a project starts.
          </p>
        </Reveal>
        <ul className="space-y-3">
          {contactFaqs.map((item) => {
            const isOpen = open === item.question;
            return (
              <li key={item.question} className="overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_16px_40px_-32px_rgba(15,23,42,0.45)]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? "" : item.question)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[15px] font-bold tracking-[-0.02em] text-foreground">{item.question}</span>
                  <Plus
                    className={`h-4 w-4 shrink-0 text-accent transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  />
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
