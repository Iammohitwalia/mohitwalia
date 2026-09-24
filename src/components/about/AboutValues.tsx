import { Gem, Handshake, Lightbulb, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { values } from "@/src/lib/about";
import { Reveal } from "@/src/components/ui/Reveal";

const icons: LucideIcon[] = [Lightbulb, Handshake, RefreshCw, Gem];

export function AboutValues() {
  return (
    <section className="bg-surface px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" aria-hidden="true" />
            What drives me
          </p>
          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-[2.15rem] leading-[1.05] font-black tracking-[-0.04em] text-foreground sm:text-5xl">
              My Values
            </h2>
            <p className="max-w-sm text-sm leading-6 text-muted lg:text-right">
              These principles guide my work and help me deliver the best results.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5">
          {values.map((value, index) => {
            const Icon = icons[index] ?? Lightbulb;
            return (
              <Reveal key={value.title} delay={Math.min(index * 0.06, 0.18)} className="h-full">
                <article className="flex h-full gap-4 rounded-[24px] border border-line bg-white p-6 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.45)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DCFCE7] text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-lg font-bold tracking-[-0.02em] text-foreground">{value.title}</span>
                    <span className="mt-1.5 block text-sm leading-6 text-muted">{value.detail}</span>
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
