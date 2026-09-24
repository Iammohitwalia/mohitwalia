import { Reveal } from "@/src/components/ui/Reveal";
import { TestimonialCard } from "@/src/components/testimonials/TestimonialCard";
import { testimonials } from "@/src/lib/content";

export function TestimonialsHero() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-8 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24 lg:pb-10">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.16),transparent_58%)]" />
        <div className="absolute -top-20 left-[12%] h-72 w-72 rounded-full bg-[#22C55E]/10 blur-3xl" />
        <div className="absolute right-[-3rem] bottom-0 h-64 w-64 rounded-full bg-[#BBF7D0]/80 blur-3xl" />
      </div>
      <Reveal className="relative mx-auto w-full max-w-7xl">
        <p className="inline-flex items-center gap-2 rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" aria-hidden="true" />
          Client feedback
        </p>
        <h1 className="mt-5 max-w-4xl text-[2.5rem] leading-[1.02] font-black tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl">
          What clients say on <span className="text-accent">Upwork.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Reviews from completed contracts. The words, ratings, and dates are the ones left on Upwork.
        </p>
      </Reveal>
    </section>
  );
}

export function TestimonialMasonry() {
  return (
    <section className="px-5 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl columns-1 gap-4 sm:columns-2 lg:columns-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05} className="mb-4 break-inside-avoid">
            <TestimonialCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
