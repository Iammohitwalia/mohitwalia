import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Layers, Users, Zap } from "lucide-react";
import { UpworkIcon } from "@/src/components/icons/brand-icons";
import { Button } from "@/src/components/ui/Button";
import { PortraitTilt } from "@/src/components/ui/PortraitTilt";
import { Reveal } from "@/src/components/ui/Reveal";
import { aboutImages } from "@/src/lib/about";
import { contact } from "@/src/lib/contact";

const heroStats = [
  { title: "5+", subtitle: "Years Experience", icon: "bolt" as const },
  { title: "250+", subtitle: "Projects Delivered", icon: "layers" as const },
  { title: "100%", subtitle: "Job Success", icon: "users" as const },
  { title: "Top Rated Plus", subtitle: "on Upwork", icon: "upwork" as const },
];

export function AboutHero() {
  return (
    <section className="px-5 pt-6 pb-16 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10 lg:pb-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <Reveal className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" aria-hidden="true" />
            About me
          </p>
          <h1 className="mt-5 max-w-xl text-[2.5rem] leading-[1.02] font-black tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.35rem]">
            Turning Ideas Into <span className="text-accent">Digital Solutions</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted lg:text-[17px] lg:leading-8">
            I&apos;m Mohit Walia, a full-stack developer and technical consultant with 5+ years of
            experience building modern web applications, AI-powered platforms, and automation
            systems for startups and businesses worldwide.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 sm:max-w-lg lg:grid-cols-4 lg:max-w-none">
            {heroStats.map((stat) => (
              <li key={stat.title} className="flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-accent">
                  <StatIcon name={stat.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-foreground">{stat.title}</span>
                  <span className="block text-[12px] font-medium text-muted">{stat.subtitle}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              href={contact.talkHref}
              trailingIcon={<ArrowUpRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />}
            >
              Let&apos;s Work Together
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0">
          <div className="relative mx-auto w-full max-w-[480px] lg:ml-auto">
            <div
              className="absolute top-10 -right-8 -bottom-8 -left-8 -z-10 rounded-[48px] bg-[radial-gradient(circle_at_50%_40%,rgba(34,197,94,0.28),transparent_68%)]"
              aria-hidden="true"
            />
            <PortraitTilt>
              <figure className="overflow-hidden rounded-[32px] border border-line bg-white shadow-[0_30px_70px_-36px_rgba(15,23,42,0.55)]">
                <Image
                  src={aboutImages.hero}
                  alt="Mohit Walia, full stack developer"
                  width={1086}
                  height={1448}
                  preload
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="h-auto w-full"
                />
              </figure>
            </PortraitTilt>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatIcon({ name }: { name: (typeof heroStats)[number]["icon"] }) {
  if (name === "upwork") return <UpworkIcon className="h-5 w-5" />;
  if (name === "layers") return <Layers className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />;
  if (name === "users") return <Users className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />;
  return <Zap className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />;
}
