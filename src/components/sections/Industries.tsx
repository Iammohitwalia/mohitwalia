import {
  Cloud,
  Cpu,
  GraduationCap,
  Heart,
  House,
  Scale,
  ShoppingCart,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Industry {
  label: string;
  icon: LucideIcon;
}

const industries: Industry[] = [
  { label: "Healthcare", icon: Heart },
  { label: "E-Commerce", icon: ShoppingCart },
  { label: "Legal", icon: Scale },
  { label: "SaaS", icon: Cloud },
  { label: "AI & Automation", icon: Cpu },
  { label: "Real Estate", icon: House },
  { label: "Education", icon: GraduationCap },
  { label: "Restaurant", icon: UtensilsCrossed },
];

export function Industries() {
  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
        Industries I Work With
      </p>
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 lg:flex-nowrap lg:gap-x-6">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <li key={industry.label} className="flex items-center gap-1.5 text-muted">
              <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span className="text-[13px] font-medium whitespace-nowrap">{industry.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
