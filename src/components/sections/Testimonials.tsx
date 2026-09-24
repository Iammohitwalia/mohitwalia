"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { TestimonialCard } from "@/src/components/testimonials/TestimonialCard";
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
            <TestimonialCard
              key={item.id}
              item={item}
              className={index === 0 ? "flex h-full" : index < 3 ? "hidden h-full lg:flex" : "hidden"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
