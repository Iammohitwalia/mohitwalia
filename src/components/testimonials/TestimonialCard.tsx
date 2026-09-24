import { Star } from "lucide-react";
import { UpworkIcon } from "@/src/components/icons/brand-icons";
import type { TestimonialItem } from "@/src/lib/content";

export function TestimonialCard({ item, className = "flex" }: { item: TestimonialItem; className?: string }) {
  return (
    <article
      className={`flex-col rounded-[22px] border border-line bg-white p-6 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)] sm:p-7 ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-foreground">
          <UpworkIcon className="h-4 w-4" />
          Upwork
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star key={starIndex} className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
            ))}
          </span>
          <span className="text-sm font-bold text-foreground">{item.rating}</span>
        </span>
      </div>
      <p className="mt-4 text-[15px] leading-7 text-[#475569]">&ldquo;{item.quote}&rdquo;</p>
      <div className="mt-auto pt-5">
        {item.tags.length > 0 ? (
          <ul className="mb-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li key={tag} className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-muted">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="border-t border-line pt-4">
          <p className="text-sm font-semibold text-foreground">{item.title}</p>
          <p className="mt-1 text-xs font-medium text-muted">{item.dates}</p>
        </div>
      </div>
    </article>
  );
}
