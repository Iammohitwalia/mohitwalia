import { journey } from "@/src/lib/about";
import { Reveal } from "@/src/components/ui/Reveal";

export function AboutJourney() {
  return (
    <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" aria-hidden="true" />
            My journey
          </p>
          <h2 className="mt-5 text-[2.15rem] leading-[1.05] font-black tracking-[-0.04em] text-foreground sm:text-5xl">
            Experience &amp; Growth
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            A quick look at my professional journey and how I&apos;ve grown over the years.
          </p>
        </Reveal>

        <div className="relative mt-12 grid gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          <span className="absolute top-[2.55rem] right-[12%] left-[12%] hidden h-px bg-line lg:block" aria-hidden="true" />
          {journey.map((item, index) => (
            <Reveal key={item.period} delay={Math.min(index * 0.06, 0.2)}>
              <article className="relative lg:text-center">
                <p className="text-[13px] font-semibold text-accent">{item.period}</p>
                <span className="relative z-10 mt-3 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white ring-4 ring-[#DCFCE7]">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-[-0.02em] text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
