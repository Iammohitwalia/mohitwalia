import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { BackToTop } from "@/src/components/layout/BackToTop";
import { SiteLink } from "@/src/components/layout/SiteLink";
import { Button } from "@/src/components/ui/Button";
import { contact } from "@/src/lib/contact";
import { navItems } from "@/src/lib/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white pb-[4.75rem] lg:pb-0">
      <div className="mx-auto w-full max-w-7xl px-5 pt-14 pb-2 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 rounded-[28px] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.7fr)_minmax(0,0.95fr)] lg:gap-12 lg:p-12">
          <div className="max-w-md">
            <SiteLink href="/" className="inline-flex">
              <Image
                src="/websiteassets/Logo.png"
                alt="Mohit Walia"
                width={500}
                height={84}
                className="h-11 w-auto"
              />
            </SiteLink>
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-muted">
              I design and develop modern web applications, AI-powered solutions, and automation
              systems that help businesses grow faster and work smarter.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[12px] font-semibold text-foreground">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]"
                aria-hidden="true"
              />
              Available for new projects
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <SiteLink
                    href={item.href}
                    className="text-[15px] font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    {item.label}
                  </SiteLink>
                </li>
              ))}
              <li>
                <SiteLink
                  href="/blog"
                  className="text-[15px] font-semibold text-foreground transition-colors hover:text-accent"
                >
                  Blog
                </SiteLink>
              </li>
            </ul>
          </nav>

          <div className="rounded-[22px] border border-line bg-white p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)] sm:p-6">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
              Start a project
            </p>
            <p className="mt-3 text-[17px] leading-snug font-bold tracking-[-0.02em] text-foreground">
              Tell me what you want to build.
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              I&apos;ll help you turn it into a product that ships — from the first screen to the
              systems behind it.
            </p>
            <div className="mt-4 space-y-1 text-sm font-semibold">
              <a href={contact.phoneHref} className="block text-foreground transition-colors hover:text-accent">
                {contact.phoneDisplay}
              </a>
              <a href={contact.emailHref} className="block text-foreground transition-colors hover:text-accent">
                {contact.email}
              </a>
            </div>
            <Button
              href={contact.talkHref}
              shape="pill"
              className="mt-5 h-11 px-4 text-sm"
              trailingIcon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 px-[4.75rem] text-center text-sm text-muted lg:flex-row lg:items-center lg:justify-between lg:px-1 lg:text-left">
          <p>© {year} Mohit Walia. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <SiteLink href="/privacy" className="font-semibold text-foreground transition-colors hover:text-accent">
              Privacy Policy
            </SiteLink>
            <SiteLink href="/terms" className="font-semibold text-foreground transition-colors hover:text-accent">
              Terms &amp; Conditions
            </SiteLink>
          </nav>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}
