import { ArrowUpRight, Layers, Users, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { UpworkIcon } from "@/src/components/icons/brand-icons";
import { Breadcrumb } from "@/src/components/services/Breadcrumb";
import { Button } from "@/src/components/ui/Button";
import { contact } from "@/src/lib/contact";
import type { ServiceRecord, ServicesIndex } from "@/src/lib/services";

const statIcons: Record<string, LucideIcon> = {
  layers: Layers,
  zap: Zap,
  users: Users,
};

function StatIcon({ name }: { name: string }) {
  if (name === "upwork") return <UpworkIcon className="h-[18px] w-[18px]" />;
  const Icon = statIcons[name] ?? Layers;
  return <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />;
}

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.18),transparent_58%)]" />
      <div className="absolute -top-16 left-[8%] h-72 w-72 rounded-full bg-[#22C55E]/15 blur-3xl" />
      <div className="absolute right-[-4rem] bottom-[-3rem] h-80 w-80 rounded-full bg-[#BBF7D0]/70 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    </div>
  );
}

export function Hero({
  index,
  service,
}: {
  index: ServicesIndex;
  service?: ServiceRecord;
}) {
  if (service) {
    const facts = [
      { label: "Timeline", value: service.meta.timeline },
      { label: "Technology", value: service.meta.technology },
      { label: "Category", value: service.category },
      { label: "Updated", value: service.meta.updated },
      { label: "Reading time", value: service.meta.readingTime },
    ].filter((fact) => fact.value);

    return (
      <section className="relative overflow-hidden bg-white">
        <HeroBackdrop />
        <div className="relative mx-auto flex min-h-[65vh] w-full max-w-7xl flex-col justify-center px-5 py-24 sm:px-6 lg:px-8">
          <div className="relative max-w-[900px]">
            <Breadcrumb current={service.title} />
            <p className="mt-6 inline-flex rounded-full border border-[#D9FBE5] bg-white/70 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-accent uppercase backdrop-blur-md">
              {service.category}
            </p>
            <h1 className="mt-5 text-[2.4rem] leading-[1.02] font-black tracking-[-0.045em] text-foreground sm:text-6xl">
              {service.hero.heading}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">{service.hero.subtitle}</p>
            <dl className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {facts.map((fact) => (
                <div key={fact.label} className="min-w-0">
                  <dt className="text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#enquiry" className="w-full sm:w-auto">
                {index.detailCta.primaryLabel}
              </Button>
              <Button
                href={contact.talkHref}
                variant="secondary"
                trailingIcon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                {index.detailCta.secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const hero = index.hero;

  return (
    <section className="relative overflow-hidden bg-white">
      <HeroBackdrop />
      <div className="relative mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-center px-5 py-24 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">{hero.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-[2.6rem] leading-[1.02] font-black tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl">
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{hero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryHref} className="w-full sm:w-auto">
              {hero.primaryLabel}
            </Button>
            <Button href={hero.secondaryHref} variant="secondary" className="w-full sm:w-auto">
              {hero.secondaryLabel}
            </Button>
          </div>
          <dl className="mt-12 hidden items-center gap-x-10 gap-y-6 lg:flex">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex shrink-0 items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DCFCE7] text-accent">
                  <StatIcon name={stat.icon} />
                </span>
                <div>
                  <dt className="text-lg font-black tracking-[-0.03em] whitespace-nowrap text-foreground">{stat.value}</dt>
                  <dd className="text-sm whitespace-nowrap text-muted">{stat.label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
