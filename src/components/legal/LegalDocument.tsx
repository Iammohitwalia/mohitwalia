import type { ReactNode } from "react";

export function LegalDocument({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">{eyebrow}</p>
        <h1 className="mt-4 text-[2.4rem] leading-[1.05] font-black tracking-[-0.045em] text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm font-medium text-muted">Last updated {updated}</p>
        <div className="mt-10 space-y-8 text-[15px] leading-7 text-muted [&_a]:font-semibold [&_a]:text-foreground [&_a]:underline-offset-4 [&_a]:hover:text-accent [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-[-0.03em] [&_h2]:text-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
          {children}
        </div>
      </div>
    </article>
  );
}
