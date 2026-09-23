"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Calendar, Mouse } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { contact } from "@/src/lib/contact";
import { HeroStats } from "@/src/components/sections/HeroStats";
import { HeroVisual } from "@/src/components/sections/HeroVisual";
import { Industries } from "@/src/components/sections/Industries";

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  const reduce = useReducedMotion() === true;

  function scrollExplore() {
    window.scrollBy({ top: Math.round(window.innerHeight * 0.85), behavior: "smooth" });
  }

  return (
    <section
      id="top"
      className="relative flex flex-col overflow-x-clip px-5 pt-3 pb-28 sm:px-6 lg:min-h-[calc(100svh-4.5rem)] lg:px-8 lg:pt-6 lg:pb-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <div className="grid items-center gap-y-2 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-x-4 xl:gap-x-6">
          <div className="max-w-[640px]">
            <motion.p
              className="inline-flex items-center gap-2 rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase"
              initial={reduce ? false : fade.hidden}
              animate={fade.show}
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]"
                aria-hidden="true"
              />
              Available for new projects
            </motion.p>

            <motion.h1
              className="mt-5 text-[2.55rem] leading-[1.02] font-black tracking-[-0.04em] text-foreground sm:text-5xl lg:mt-6 lg:text-[3.35rem] xl:text-[4rem]"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
            >
              <span className="block lg:inline">Build.</span>{" "}
              <span className="block lg:inline">Automate.</span>
              <span className="mt-1 block text-accent lg:mt-0">Scale Your Ideas</span>
              <span className="block">Into Reality.</span>
            </motion.h1>

            <motion.p
              className="mt-5 max-w-[560px] text-base leading-7 text-muted lg:mt-6 lg:text-[17px] lg:leading-8"
              initial={reduce ? false : fade.hidden}
              animate={{
                ...fade.show,
                transition: { ...fade.show.transition, delay: 0.16 },
              }}
            >
              I design and develop modern web applications, AI-powered solutions, and
              automation systems that help businesses grow faster and work smarter.
            </motion.p>

            <motion.div
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-8"
              initial={reduce ? false : fade.hidden}
              animate={{
                ...fade.show,
                transition: { ...fade.show.transition, delay: 0.24 },
              }}
            >
              <Button
                href="/#projects"
                className="w-full sm:w-auto"
                trailingIcon={<ArrowUpRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />}
              >
                View My Work
              </Button>
              <Button
                href={contact.talkHref}
                variant="secondary"
                className="w-full sm:w-auto"
                trailingIcon={<Calendar className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />}
              >
                Let&apos;s Build Together
              </Button>
            </motion.div>

            <div className="mt-8 hidden lg:block">
              <HeroStats />
            </div>
          </div>

          <HeroVisual />
        </div>

        <div className="mt-8 lg:hidden">
          <HeroStats />
        </div>

        <motion.div
          className="mt-12 flex items-end justify-between gap-8 lg:mt-auto lg:pt-10"
          initial={reduce ? false : fade.hidden}
          animate={{
            ...fade.show,
            transition: { ...fade.show.transition, delay: 0.36 },
          }}
        >
          <Industries />
          <button
            type="button"
            onClick={scrollExplore}
            className="mb-0.5 hidden shrink-0 items-center gap-2 text-[13px] font-medium text-muted transition-colors hover:text-foreground lg:inline-flex"
          >
            <Mouse className="h-5 w-5" aria-hidden="true" />
            Scroll to explore
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
