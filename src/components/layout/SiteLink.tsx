"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { scrollTopIfSamePage } from "@/src/components/layout/ScrollToTop";

export function SiteLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link href={href} className={className} onClick={(event) => scrollTopIfSamePage(event, href, pathname)}>
      {children}
    </Link>
  );
}
