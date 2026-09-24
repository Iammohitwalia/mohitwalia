import { ArrowUpRight } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Reveal } from "@/src/components/ui/Reveal";
import { ScriptNote } from "@/src/components/ui/SectionHeading";
import { contact } from "@/src/lib/contact";

export function Cta() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-8 sm:px-6 lg:px-8 lg:py-12">
      <Reveal>
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] bg-[#0B1220] px-6 py-14 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.7)] sm:px-10 lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.22),transparent_68%)]"
            aria-hidden="true"
          />
          <div className="cta-dots pointer-events-none absolute top-8 left-6 h-40 w-40 opacity-70" aria-hidden="true" />
          <div className="cta-dots pointer-events-none absolute right-10 bottom-6 h-36 w-36 opacity-60" aria-hidden="true" />
          <svg
            viewBox="0 0 280 180"
            className="pointer-events-none absolute -top-6 -right-8 h-48 w-64 text-white/15"
            aria-hidden="true"
          >
            <path d="M20 160C80 40 180 20 270 70" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M40 170C110 70 200 50 280 110" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <svg
            viewBox="0 0 220 160"
            className="pointer-events-none absolute -bottom-10 -left-8 h-40 w-56 text-white/10"
            aria-hidden="true"
          >
            <path d="M10 20C70 80 140 90 210 30" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/80 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Let&apos;s work together
            </p>
            <h2 className="mt-6 text-[2.15rem] leading-[1.05] font-black tracking-[-0.04em] sm:text-5xl">
              Have a <span className="text-accent">Project</span> in Mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">
              Let&apos;s discuss how I can help you turn your ideas into reality. I&apos;m available
              for new opportunities and collaborations.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={contact.talkHref}
                trailingIcon={<ArrowUpRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                Let&apos;s Talk
              </Button>
              <Button
                href="/projects"
                variant="inverted"
                trailingIcon={<ArrowUpRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                View My Work
              </Button>
            </div>
            <p className="mt-5 flex flex-col items-center justify-center gap-1 text-sm font-medium text-white/75 sm:flex-row sm:gap-3">
              <a href={contact.phoneHref} className="transition-colors hover:text-white">
                {contact.phoneDisplay}
              </a>
              <span className="hidden text-white/30 sm:inline" aria-hidden="true">
                ·
              </span>
              <a href={contact.emailHref} className="transition-colors hover:text-white">
                {contact.email}
              </a>
            </p>
          </div>
          <ScriptNote
            lines={["Ideas", "to Impact"]}
            tone="light"
            className="absolute right-10 bottom-8 hidden xl:block"
          />
        </div>
      </Reveal>
    </section>
  );
}
