import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
  align?: "start" | "end";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "end",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-6 lg:flex-row lg:justify-between ${
        align === "start" ? "lg:items-start" : "lg:items-end"
      }`}
    >
      <div className="max-w-2xl">
        <p className="inline-flex items-center gap-2 rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]"
            aria-hidden="true"
          />
          {eyebrow}
        </p>
        <h2 className="mt-5 text-[2.15rem] leading-[1.05] font-black tracking-[-0.04em] text-foreground sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-xl text-base leading-7 text-muted lg:text-[17px]">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

interface ScriptNoteProps {
  lines: string[];
  className?: string;
  tone?: "dark" | "light";
}

export function ScriptNote({ lines, className = "", tone = "dark" }: ScriptNoteProps) {
  return (
    <div className={`pointer-events-none w-32 -rotate-6 text-right ${className}`}>
      <p
        className={`font-hand text-[1.75rem] leading-[0.95] font-bold ${
          tone === "light" ? "text-white" : "text-foreground"
        }`}
      >
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <svg viewBox="0 0 120 14" className="mt-1 ml-auto h-3 w-[5.5rem] text-accent" aria-hidden="true">
        <path
          d="M2 9 C 28 2, 78 3, 118 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
