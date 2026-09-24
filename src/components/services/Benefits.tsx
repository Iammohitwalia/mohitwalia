import { Reveal } from "@/src/components/ui/Reveal";
import type { TextBlock } from "@/src/lib/services";

export function Benefits({
  eyebrow,
  heading,
  description,
  items,
  compact = false,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: TextBlock[];
  compact?: boolean;
}) {
  if (!items.length) return null;

  return (
    <section className={eyebrow ? "px-5 py-16 sm:px-6 lg:px-8 lg:py-24" : ""}>
      <div className={eyebrow ? "mx-auto w-full max-w-7xl" : ""}>
        {eyebrow ? (
          <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">{eyebrow}</p>
        ) : null}
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
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Reveal key={item.title} className="h-full">
              <article className="h-full rounded-[24px] border border-line bg-surface p-6">
                <h3 className="text-lg font-bold tracking-[-0.02em] text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
