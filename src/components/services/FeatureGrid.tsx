import { Reveal } from "@/src/components/ui/Reveal";
import type { TextBlock } from "@/src/lib/services";

export function FeatureGrid({ items }: { items: TextBlock[] }) {
  if (!items.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-black tracking-[-0.03em] text-foreground sm:text-3xl">Features</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Reveal key={item.title} className="h-full">
            <article className="h-full rounded-[24px] border border-line bg-white p-5 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.4)]">
              <h3 className="text-lg font-bold tracking-[-0.02em] text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
