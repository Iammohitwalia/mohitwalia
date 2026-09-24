import { Brain, Code2, Database, Layers, MessageCircle, MousePointer2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/src/components/ui/Reveal";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  brain: Brain,
  chat: MessageCircle,
  cursor: MousePointer2,
  database: Database,
  layers: Layers,
};

export interface ServiceCardData {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  icon: string;
  tags: string[];
}

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Code2;
  return <Icon className={className ?? "h-5 w-5"} strokeWidth={1.75} aria-hidden="true" />;
}

export function ServiceCard({ service }: { service: ServiceCardData }) {
  return (
    <Reveal className="h-full">
      <article className="group flex h-full flex-col rounded-[24px] border border-line bg-white p-6 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.45)] transition duration-200 hover:-translate-y-1 hover:border-[#D9FBE5] hover:shadow-[0_28px_60px_-28px_rgba(15,23,42,0.35)]">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFDF3] text-accent">
          <ServiceIcon name={service.icon} />
        </span>
        <p className="mt-5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">{service.category}</p>
        <h3 className="mt-2 text-xl font-bold tracking-[-0.03em] text-foreground">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{service.excerpt}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-medium text-muted">
              {tag}
            </li>
          ))}
        </ul>
        <Link
          href={`/services/${service.slug}`}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-[#16a34a]"
        >
          Read more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </article>
    </Reveal>
  );
}
