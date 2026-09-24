import { Reveal } from "@/src/components/ui/Reveal";
import type { Phase, ProcessStep } from "@/src/lib/services";

export function Timeline({
  eyebrow,
  heading,
  description,
  steps = [],
  phases = [],
  compact = false,
  stacked = false,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  steps?: ProcessStep[];
  phases?: Phase[];
  compact?: boolean;
  stacked?: boolean;
}) {
  if (!steps.length && !phases.length) return null;

  const shell = eyebrow ? "px-5 py-16 sm:px-6 lg:px-8 lg:py-24" : "";
  const inner = eyebrow ? "mx-auto w-full max-w-7xl" : "";

  return (
    <section className={shell}>
      <div className={inner}>
        {eyebrow ? <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">{eyebrow}</p> : null}
        <h2
          className={
            compact
              ? "text-2xl font-black tracking-[-0.03em] text-foreground sm:text-3xl"
              : "mt-3 max-w-3xl text-[2rem] leading-[1.08] font-black tracking-[-0.04em] text-foreground sm:text-4xl"
          }
        >
          {heading}
        </h2>
        {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p> : null}

        {steps.length > 0 ? (
          <div className={`mt-10 grid gap-4 ${stacked ? "" : "lg:grid-cols-5"}`}>
            {steps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.05} className="h-full">
                <article className="relative h-full rounded-[24px] border border-line bg-white p-5">
                  <span className="text-sm font-black tracking-[-0.04em] text-accent">{step.step}</span>
                  <h3 className="mt-3 text-lg font-bold tracking-[-0.02em] text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
                  {index < steps.length - 1 ? (
                    <span className={`mt-4 block text-lg text-accent ${stacked ? "" : "lg:hidden"}`} aria-hidden="true">
                      ↓
                    </span>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        ) : null}

        {phases.length > 0 ? (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {phases.map((phase) => (
              <article key={phase.phase} className="rounded-[24px] border border-line bg-white p-5">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-accent uppercase">{phase.duration}</p>
                <h3 className="mt-2 text-lg font-bold tracking-[-0.02em] text-foreground">{phase.phase}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{phase.detail}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
