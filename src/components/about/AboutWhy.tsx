import { Clock, Globe, MessagesSquare, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { reasons } from "@/src/lib/about";
import { Reveal } from "@/src/components/ui/Reveal";

const icons: LucideIcon[] = [Globe, Clock, MessagesSquare, Users];

export function AboutWhy() {
  return (
    <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" aria-hidden="true" />
            How I work
          </p>
          <h2 className="mt-5 max-w-2xl text-[2.15rem] leading-[1.05] font-black tracking-[-0.04em] text-foreground sm:text-5xl">
            Why Clients Work With Me
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            I work with clients worldwide and adapt to different timezones and workflows to ensure
            smooth collaboration.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = icons[index] ?? Globe;
            return (
              <Reveal key={reason.title} delay={Math.min(index * 0.06, 0.18)}>
                <article>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCFCE7] text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold tracking-[-0.02em] text-foreground">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{reason.detail}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
