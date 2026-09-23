"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Layers, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { UpworkIcon } from "@/src/components/icons/brand-icons";

interface Stat {
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  brand?: "upwork";
}

const stats: Stat[] = [
  { title: "Top Rated Plus", subtitle: "on Upwork", brand: "upwork" },
  { title: "250+", subtitle: "Projects Delivered", icon: Layers },
  { title: "100%", subtitle: "Job Success", icon: Users },
  { title: "5+ Years", subtitle: "Experience", icon: Zap },
];

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.32 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function HeroStats() {
  const reduce = useReducedMotion() === true;

  return (
    <motion.ul
      className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-6 lg:flex lg:flex-wrap lg:items-center lg:gap-x-5 xl:gap-x-6"
      initial={reduce ? "show" : "hidden"}
      animate="show"
      variants={listVariants}
    >
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <motion.li
            key={stat.title}
            variants={itemVariants}
            className="flex items-center gap-2.5"
          >
            {stat.brand === "upwork" || !Icon ? (
              <UpworkIcon className="h-[18px] w-[18px] shrink-0" />
            ) : (
              <Icon className="h-[18px] w-[18px] shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
            )}
            <span>
              <span className="block text-[13px] font-semibold leading-tight text-foreground">
                {stat.title}
              </span>
              <span className="block text-[12px] font-medium leading-tight text-muted">
                {stat.subtitle}
              </span>
            </span>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
