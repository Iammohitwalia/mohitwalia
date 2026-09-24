import {
  ArrowUpRight,
  Brain,
  Cloud,
  Code2,
  Database,
  Layers,
  MessageCircle,
  MousePointer2,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/Button";
import { Reveal } from "@/src/components/ui/Reveal";
import { ScriptNote, SectionHeading } from "@/src/components/ui/SectionHeading";
import { services } from "@/src/lib/content";
import type { ServiceItem } from "@/src/lib/content";

const serviceIcons: Record<ServiceItem["icon"], LucideIcon> = {
  code: Code2,
  brain: Brain,
  chat: MessageCircle,
  cursor: MousePointer2,
  database: Database,
  cloud: Cloud,
  layers: Layers,
  shield: ShieldCheck,
};

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 overflow-x-clip px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div
        className="pointer-events-none absolute top-10 right-0 hidden h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.16),transparent_70%)] lg:block"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="What I do"
            align="start"
            title={
              <>
                Services I <span className="text-accent">Offer</span>
              </>
            }
            description="End-to-end development and consultancy services to help you build, launch, and scale your digital products."
            action={
              <div className="flex flex-col items-start gap-8 lg:items-end">
                <Button
                  href="/services"
                  variant="secondary"
                  trailingIcon={<ArrowUpRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />}
                >
                  View All Services
                </Button>
                <ScriptNote lines={["Ideas", "to Impact"]} className="hidden lg:block" />
              </div>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:mt-14 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.title} delay={Math.min(index * 0.05, 0.3)} className="h-full">
                <Link
                  href={service.href}
                  className="group relative flex h-full min-h-[250px] flex-col rounded-[22px] border border-line bg-white p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)] transition duration-200 hover:-translate-y-0.5 hover:border-[#D9FBE5] hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.28)] sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFDF3] text-accent">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-[17px] font-bold tracking-[-0.02em] text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-medium text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
