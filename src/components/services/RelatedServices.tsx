import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ServiceIcon } from "@/src/components/services/ServiceCard";
import type { ServiceRecord } from "@/src/lib/services";

export function RelatedServices({ services }: { services: ServiceRecord[] }) {
  if (!services.length) return null;

  return (
    <section>
      <h2 className="text-2xl font-black tracking-[-0.03em] text-foreground sm:text-3xl">Related services</h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_18px_40px_-32px_rgba(15,23,42,0.4)] transition duration-200 hover:-translate-y-1"
            >
              <span className="flex h-36 items-center justify-center bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.22),#F8FAFC_70%)] text-accent">
                <ServiceIcon name={service.icon} className="h-8 w-8" />
              </span>
              <span className="flex flex-1 flex-col p-5">
                <span className="text-lg font-bold tracking-[-0.02em] text-foreground">{service.title}</span>
                <span className="mt-2 flex-1 text-sm leading-6 text-muted">{service.excerpt}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Read more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
