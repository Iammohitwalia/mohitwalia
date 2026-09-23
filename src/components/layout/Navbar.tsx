"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { House, Menu, MessageCircle, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mobileTabs, navItems } from "@/src/lib/navigation";
import { contact } from "@/src/lib/contact";
import { Button } from "@/src/components/ui/Button";

const sectionIds = ["top", "about", "services", "projects", "testimonials", "contact"];

export function Navbar() {
  const reduce = useReducedMotion() === true;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("top");
  const panelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const lockRef = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function currentSection() {
      const marker = Math.min(220, window.innerHeight * 0.32);
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= marker && rect.bottom > marker) return id;
        if (rect.top <= marker) current = id;
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      return atBottom ? "contact" : current;
    }

    function update() {
      const current = currentSection();
      if (lockRef.current) {
        if (current === lockRef.current) lockRef.current = null;
        else {
          setActiveId(lockRef.current);
          return;
        }
      }
      setActiveId(current);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  function activate(sectionId: string) {
    lockRef.current = sectionId;
    setActiveId(sectionId);
    window.setTimeout(() => {
      if (lockRef.current === sectionId) lockRef.current = null;
    }, 1400);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    const panel = panelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <>
      <motion.header
        initial={reduce ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          isScrolled
            ? "border-b border-line bg-white/80 backdrop-blur-md"
            : "border-b border-transparent bg-white/70 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/#top" onClick={() => activate("top")} className="relative z-10 shrink-0">
            <Image
              src="/websiteassets/Logo.png"
              alt="Mohit Walia"
              width={500}
              height={84}
              loading="eager"
              className="hidden h-9 w-auto lg:block xl:h-11"
            />
            <Image
              src="/websiteassets/Mobile-Logo.png"
              alt="Mohit Walia"
              width={182}
              height={84}
              loading="eager"
              className="h-9 w-auto lg:hidden"
            />
          </Link>

          <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <ul className="flex items-center gap-4 xl:gap-7">
              {navItems.map((item) => {
                const active = item.sectionId === activeId;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => activate(item.sectionId)}
                      className="flex flex-col items-center gap-1 text-[15px] font-medium text-foreground transition-colors hover:text-accent"
                    >
                      <span>{item.label}</span>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${active ? "bg-accent" : "bg-transparent"}`}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative z-10 flex items-center">
            <div className="hidden lg:block">
              <Button
                href={contact.talkHref}
                shape="pill"
                className="h-11 px-4 text-sm"
                leadingIcon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
                trailingIcon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
              >
                Let&apos;s Talk
              </Button>
            </div>
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.button
            key="overlay"
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-[60] bg-[#0F172A]/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={closeMenu}
          />
        ) : null}
        {isOpen ? (
          <motion.div
            key="panel"
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile"
            className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,22rem)] flex-col bg-white shadow-[-24px_0_60px_-32px_rgba(15,23,42,0.45)]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Image
                src="/websiteassets/Mobile-Logo.png"
                alt=""
                width={182}
                height={84}
                className="h-9 w-auto"
              />
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-foreground hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3">
              <ul>
                {navItems.map((item) => {
                  const active = item.sectionId === activeId;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => {
                          activate(item.sectionId);
                          closeMenu();
                        }}
                        className="flex items-center justify-between rounded-xl px-3 py-3.5 text-[17px] font-medium text-foreground transition-colors hover:bg-surface"
                      >
                        {item.label}
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${active ? "bg-accent" : "bg-transparent"}`}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="p-5">
              <Button
                href={contact.talkHref}
                shape="pill"
                className="w-full"
                leadingIcon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
                trailingIcon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
                onClick={closeMenu}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <nav
        aria-label="Mobile shortcuts"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur-md lg:hidden"
      >
        <ul className="mx-auto flex max-w-md items-stretch justify-around px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
          {mobileTabs.map((item) => {
            const active = item.sectionId === activeId;
            const Icon =
              item.label === "Home" ? House : item.label === "Projects" ? LayoutDots : MessageCircle;
            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => activate(item.sectionId)}
                  className={`flex flex-col items-center gap-0.5 py-1 text-[11px] font-medium ${
                    active ? "text-accent" : "text-muted"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${active && item.label === "Home" ? "fill-current" : ""}`}
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                  <span
                    className={`h-1 w-1 rounded-full ${active ? "bg-accent" : "bg-transparent"}`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

function LayoutDots({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="3" width="7.2" height="7.2" rx="1.8" fill="currentColor" />
      <rect x="13.8" y="3" width="7.2" height="7.2" rx="1.8" fill="currentColor" />
      <rect x="3" y="13.8" width="7.2" height="7.2" rx="1.8" fill="currentColor" />
      <rect x="13.8" y="13.8" width="7.2" height="7.2" rx="1.8" fill="currentColor" />
    </svg>
  );
}
