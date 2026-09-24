import { highlights } from "@/src/lib/about";
import { Reveal } from "@/src/components/ui/Reveal";

export function AboutHighlights() {
  return (
    <section className="bg-surface px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" aria-hidden="true" />
            Experience
          </p>
          <h2 className="mt-5 max-w-xl text-[2.15rem] leading-[1.05] font-black tracking-[-0.04em] text-foreground sm:text-5xl">
            Highlights
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={Math.min(index * 0.06, 0.18)} className="h-full">
              <article className="h-full rounded-[24px] border border-line bg-white p-6 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.45)]">
                <p className="text-3xl font-black tracking-[-0.04em] text-accent">{item.value}</p>
                <p className="mt-2 text-sm font-bold text-foreground">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
