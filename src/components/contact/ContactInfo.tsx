import { Brain, Briefcase, Clock3, Mail, MapPin, MessageCircle, Layers, Timer } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/src/components/ui/Reveal";
import { contactFacts, contactOffers } from "@/src/lib/contact-page";

const factIcons: Record<(typeof contactFacts)[number]["label"], LucideIcon> = {
  Email: Mail,
  WhatsApp: MessageCircle,
  Location: MapPin,
  "Time Zone": Clock3,
  "Response Time": Timer,
  Availability: MessageCircle,
};

const offerIcons: Record<(typeof contactOffers)[number]["icon"], LucideIcon> = {
  briefcase: Briefcase,
  layers: Layers,
  brain: Brain,
  chat: MessageCircle,
};

const factCardClass =
  "flex h-full items-start gap-3 rounded-[24px] border border-line bg-white p-4 shadow-[0_10px_24px_-14px_rgba(15,23,42,0.22)]";

function FactValue({ value }: { value: string }) {
  const at = value.indexOf("@");
  if (at === -1) return value;
  return (
    <>
      {value.slice(0, at + 1)}
      <wbr />
      {value.slice(at + 1)}
    </>
  );
}

export function ContactInfo() {
  return (
    <div className="min-w-0">
      <div className="grid gap-3 sm:grid-cols-2">
        {contactFacts.map((fact, index) => {
          const Icon = factIcons[fact.label];
          const body = (
            <>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF3] text-accent">
                <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">{fact.label}</span>
                <span className="mt-1 block text-sm font-semibold text-foreground">
                  <FactValue value={fact.value} />
                </span>
              </span>
            </>
          );

          return (
            <Reveal key={fact.label} delay={index * 0.04} className="min-w-0">
              {fact.href ? (
                <a
                  href={fact.href}
                  className={`${factCardClass} transition hover:-translate-y-0.5`}
                  {...(fact.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {body}
                </a>
              ) : (
                <div className={factCardClass}>
                  {fact.label === "Availability" ? (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF3]">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(34,197,94,0.18)]" aria-hidden="true" />
                    </span>
                  ) : (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF3] text-accent">
                      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">{fact.label}</span>
                    <span className="mt-1 block text-sm font-semibold text-foreground">
                  <FactValue value={fact.value} />
                </span>
                  </span>
                </div>
              )}
            </Reveal>
          );
        })}
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {contactOffers.map((offer, index) => {
          const Icon = offerIcons[offer.icon];
          return (
            <Reveal key={offer.title} delay={0.12 + index * 0.04} className="min-w-0">
              <article className="h-full rounded-[24px] border border-line bg-white p-5 shadow-[0_10px_24px_-14px_rgba(15,23,42,0.22)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ECFDF3] text-accent">
                  <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-base font-bold tracking-[-0.02em] text-foreground">{offer.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{offer.detail}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
