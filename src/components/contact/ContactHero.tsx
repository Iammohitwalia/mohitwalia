import { Reveal } from "@/src/components/ui/Reveal";

export function ContactHero() {
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
          Let&apos;s connect
        </p>
        <h1 className="mt-5 max-w-4xl text-[2.5rem] leading-[1.02] font-black tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl">
          Let&apos;s Build Something <span className="text-accent">Amazing</span> Together.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          I&apos;m available for freelance projects, long-term partnerships, SaaS development, AI
          solutions, automation, and technical consulting.
        </p>
      </Reveal>
    </section>
  );
}
