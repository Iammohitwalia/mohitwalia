import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverted";
  shape?: "rounded" | "pill";
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const variantClass = {
  primary:
    "bg-accent text-white shadow-[0_12px_28px_-12px_rgba(34,197,94,0.95)] hover:bg-[#1cb253]",
  secondary:
    "border border-[#E6E8EC] bg-white text-foreground hover:border-[#D8DCE3] hover:shadow-[0_12px_28px_-16px_rgba(15,23,42,0.3)]",
  inverted:
    "border border-white/25 bg-transparent text-white hover:bg-white/10",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  shape = "rounded",
  leadingIcon,
  trailingIcon,
  className = "",
  onClick,
}: ButtonProps) {
  const classNameValue = `inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap px-5 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
    shape === "pill" ? "rounded-full" : "rounded-[14px]"
  } ${variantClass[variant]} ${className}`;
  const content = (
    <>
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
    </>
  );
  const external = /^(https?:|tel:|mailto:)/.test(href);

  if (external) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={classNameValue}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classNameValue}>
      {content}
    </Link>
  );
}
