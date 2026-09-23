"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/src/components/ui/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { testimonials } from "@/src/lib/content";

export function Testimonials() {
  const [start, setStart] = useState(0);
  const count = testimonials.length;
  const ordered = [
    ...testimonials.slice(start),
    ...testimonials.slice(0, start),
  ];

  function step(direction: number) {
    setStart((current) => (current + direction + count) % count);
  }

  return (
    <section id="testimonials" className="scroll-mt-24 bg-surface px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <SectionHeading
              eyebrow="Client feedback"
              title="What Clients Say"
              description="Long-term relationships and successful projects across the globe."
            />
          </Reveal>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => step(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-foreground transition hover:shadow-[0_10px_24px_-16px_rgba(15,23,42,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => step(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-foreground transition hover:shadow-[0_10px_24px_-16px_rgba(15,23,42,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {ordered.map((item, index) => (
            <article
              key={item.name}
              className={`relative h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)] sm:p-7 ${
                index > 0 ? "hidden lg:flex" : "flex"
              }`}
            >
              <span
                className="pointer-events-none absolute top-3 left-5 font-hand text-6xl leading-none text-accent/25"
                aria-hidden="true"
              >
                “
              </span>
              <p className="relative mt-8 flex-1 text-[15px] leading-7 text-[#475569]">{item.quote}</p>
              <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0F172A] text-[11px] font-bold text-white">
                    {item.initials}
                    <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-white bg-accent" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-foreground">{item.name}</span>
                    <span className="block truncate text-xs font-medium text-muted">{item.role}</span>
                  </span>
                </div>
                <span className="flex shrink-0 gap-0.5" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-3.5 w-3.5 fill-accent text-accent"
                      aria-hidden="true"
                    />
                  ))}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
