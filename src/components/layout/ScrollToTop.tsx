"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function scrollWindowToTop() {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  root.getClientRects();
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previous;
}

export function scrollTopIfSamePage(
  event: { preventDefault: () => void },
  href: string,
  pathname: string,
) {
  const path = href.split("#")[0] || "/";
  if (!href.includes("#") && path === pathname) {
    event.preventDefault();
    scrollWindowToTop();
  }
}

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (window.location.hash) return;
    scrollWindowToTop();
  }, [pathname]);

  return null;
}
