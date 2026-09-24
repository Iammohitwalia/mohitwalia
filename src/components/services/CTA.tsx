import { ArrowUpRight } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Reveal } from "@/src/components/ui/Reveal";
import { contact } from "@/src/lib/contact";
import type { ServicesIndex } from "@/src/lib/services";

export function CTA({ cta }: { cta: ServicesIndex["cta"] }) {
  return (
    <section className="px-5 py-8 sm:px-6 lg:px-8 lg:py-12">
      <Reveal>
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] bg-[#0B1220] px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.28),transparent_68%)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-[2.15rem] leading-[1.05] font-black tracking-[-0.04em] sm:text-5xl">{cta.heading}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">{cta.description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/#schedule" className="w-full sm:w-auto">
                {cta.primaryLabel}
              </Button>
              <Button
                href={contact.talkHref}
                variant="inverted"
                trailingIcon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                {cta.secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
