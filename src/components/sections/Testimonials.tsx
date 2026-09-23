"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/src/components/ui/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { testimonials } from "@/src/lib/content";

export function Testimonials() {
  const [start, setStart] = useState(0);
  const count = testimonials.length;
  const ordered = [...testimonials.slice(start), ...testimonials.slice(0, start)];

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
              description="Reviews from completed Upwork contracts."
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

        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3">
          {ordered.map((item, index) => (
            <article
              key={item.id}
              className={`h-full flex-col rounded-[22px] border border-line bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)] sm:p-7 ${
                index === 0 ? "flex" : index < 3 ? "hidden lg:flex" : "hidden"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </span>
                <span className="text-sm font-bold text-foreground">{item.rating}</span>
                <span className="text-xs font-medium text-muted">Upwork</span>
              </div>
              <p className="mt-4 text-[15px] leading-7 text-[#475569]">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-auto pt-5">
              {item.tags.length > 0 ? (
                <ul className="mb-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="border-t border-line pt-4">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-xs font-medium text-muted">{item.dates}</p>
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
