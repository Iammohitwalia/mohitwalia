"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  AutomationsIcon,
  ChartIcon,
  ClaudeIcon,
  LinuxIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  OpenAiIcon,
  PhpIcon,
  PostgresIcon,
  ReactIcon,
  VueIcon,
} from "@/src/components/icons/brand-icons";

interface TechBadge {
  name: string;
  className: string;
  icon: ReactNode;
}

const badges: TechBadge[] = [
  { name: "Next.js", className: "left-[1%] top-[7%]", icon: <NextIcon /> },
  { name: "React", className: "left-[19%] top-[0%]", icon: <ReactIcon /> },
  { name: "Node.js", className: "left-[37%] top-[1%]", icon: <NodeIcon /> },
  { name: "OpenAI", className: "left-[55%] top-[4%]", icon: <OpenAiIcon /> },
  { name: "Claude", className: "left-[74%] top-[10%]", icon: <ClaudeIcon /> },
  { name: "PostgreSQL", className: "left-0 top-[30%]", icon: <PostgresIcon /> },
  { name: "MongoDB", className: "left-[2%] top-[47%]", icon: <MongoIcon /> },
  { name: "Automations", className: "left-[8%] top-[64%]", icon: <AutomationsIcon /> },
  { name: "Vue.js", className: "right-0 top-[24%]", icon: <VueIcon /> },
  { name: "PHP", className: "right-[2%] top-[40%]", icon: <PhpIcon /> },
  { name: "Linux", className: "right-[7%] top-[55%]", icon: <LinuxIcon /> },
];

export function HeroVisual() {
  const reduce = useReducedMotion() === true;

  return (
    <motion.div
      className="relative mx-auto w-[90%] lg:mx-0 lg:w-[108%] lg:-ml-8 xl:-ml-14"
      initial={reduce ? false : { opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
    >
      <Image
        src="/websiteassets/Hero shape.png"
        alt="Laptop displaying a Next.js portfolio project in a code editor"
        width={1536}
        height={1024}
        preload
        sizes="(max-width: 1024px) 90vw, 640px"
        className="h-auto w-full"
      />

      {badges.map((badge) => (
        <div
          key={badge.name}
          className={`pointer-events-none absolute z-10 hidden w-max min-w-[4.35rem] flex-col items-center gap-1 rounded-[1.15rem] border border-[#EEF1F4] bg-white px-2.5 py-2 shadow-[0_12px_30px_-16px_rgba(15,23,42,0.4)] lg:flex ${badge.className}`}
        >
          <span className="flex h-8 w-8 items-center justify-center">{badge.icon}</span>
          <span className="text-center text-[10px] leading-none font-medium text-foreground">
            {badge.name}
          </span>
        </div>
      ))}

      <div className="pointer-events-none absolute bottom-[12%] left-[30%] z-20 hidden w-[15.75rem] items-center gap-3 rounded-2xl border border-[#EEF1F4] bg-white px-3.5 py-3 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.45)] lg:flex">
        <ChartIcon className="h-9 w-9 shrink-0" />
        <span className="min-w-0 pr-4">
          <span className="block text-[11px] font-medium text-muted">Ideas to Impact</span>
          <span className="block text-[15px] leading-tight font-bold text-foreground">
            Scalable Solutions
          </span>
        </span>
        <ArrowUpRight
          className="absolute top-3 right-3 h-4 w-4 text-accent"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      </div>

      <div className="pointer-events-none absolute right-[1%] bottom-[2%] z-20 hidden w-32 -rotate-6 text-right lg:block">
        <p className="font-hand text-[1.85rem] leading-[0.95] font-bold text-foreground">
          Clean Code
          <br />
          Real Impact
        </p>
        <svg viewBox="0 0 120 14" className="mt-0.5 ml-auto h-3 w-[5.5rem] text-accent" aria-hidden="true">
          <path
            d="M2 9 C 28 2, 78 3, 118 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <Link
        href="/#contact"
        aria-label="Let's Talk"
        className="absolute right-[6%] bottom-[20%] z-20 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-[0_12px_24px_-10px_rgba(34,197,94,0.9)] transition-transform duration-200 hover:-translate-y-0.5 lg:hidden"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
