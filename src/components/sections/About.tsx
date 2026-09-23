import { aboutFocus } from "@/src/lib/content";
import { Reveal } from "@/src/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-surface px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <Reveal>
          <AboutPortrait />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]"
              aria-hidden="true"
            />
            About me
          </p>
          <h2 className="mt-5 max-w-xl text-[2.35rem] leading-[1.02] font-black tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.25rem]">
            I build software that <span className="text-accent">stays clear</span> as it grows.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted lg:text-[17px] lg:leading-8">
            I partner with founders and teams to design, build, and automate the software their
            business runs on. The work covers the interface people use and the systems behind it.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted lg:text-[17px] lg:leading-8">
            I keep the process clear, the code maintainable, and the product fast as it grows.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {aboutFocus.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-line bg-white p-4 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.4)]"
              >
                <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                <span className="mt-1.5 block text-[13px] leading-5 text-muted">{item.detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function AboutPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div
        className="absolute top-8 -right-6 -bottom-6 -left-6 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_50%_40%,rgba(34,197,94,0.22),transparent_68%)]"
        aria-hidden="true"
      />
      <figure className="relative overflow-hidden rounded-[28px] border border-[#EEF1F4] bg-[#F8FAFC] shadow-[0_30px_70px_-36px_rgba(15,23,42,0.55)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.28),transparent_70%)]" />
        <div className="relative flex aspect-[4/5] flex-col items-center justify-center px-8 pb-20 sm:aspect-[5/6]">
          <div className="absolute h-72 w-72 rounded-full border border-dashed border-[#D7DEE8] sm:h-80 sm:w-80" aria-hidden="true" />
          <div className="absolute h-52 w-52 rounded-full border border-accent/25 sm:h-60 sm:w-60" aria-hidden="true" />
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-[#0F172A] shadow-[0_24px_48px_-20px_rgba(15,23,42,0.75)] sm:h-44 sm:w-44">
            <span className="text-5xl font-black tracking-[-0.06em] text-white">
              M<span className="text-accent">.</span>
            </span>
          </div>
        </div>
        <div className="absolute top-4 left-4 rounded-2xl border border-[#EEF1F4] bg-white px-3 py-2.5 shadow-[0_16px_36px_-22px_rgba(15,23,42,0.45)]">
          <span className="block text-sm font-bold text-foreground">5+ Years</span>
          <span className="block text-[11px] font-medium text-muted">Experience</span>
        </div>
        <div className="absolute top-4 right-4 rounded-2xl border border-[#EEF1F4] bg-white px-3 py-2.5 shadow-[0_16px_36px_-22px_rgba(15,23,42,0.45)]">
          <span className="block text-sm font-bold text-foreground">250+</span>
          <span className="block text-[11px] font-medium text-muted">Projects</span>
        </div>
        <figcaption className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.45)] backdrop-blur-sm">
          <span>
            <span className="block text-sm font-semibold text-foreground">Mohit Walia</span>
            <span className="block text-xs font-medium text-muted">Full Stack Developer</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF3] px-2.5 py-1 text-[11px] font-semibold text-[#15803D]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Available
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
