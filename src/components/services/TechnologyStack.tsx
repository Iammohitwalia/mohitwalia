import { Reveal } from "@/src/components/ui/Reveal";

export function TechnologyStack({ items }: { items: string[] }) {
  if (!items.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-black tracking-[-0.03em] text-foreground sm:text-3xl">Technology stack</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item, index) => (
          <Reveal key={item} delay={index * 0.03}>
            <span className="inline-flex rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold text-foreground shadow-[0_12px_30px_-24px_rgba(15,23,42,0.45)]">
              {item}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
