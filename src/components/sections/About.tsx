import Image from "next/image";
import { aboutFocus } from "@/src/lib/content";
import { PortraitTilt } from "@/src/components/ui/PortraitTilt";
import { Reveal } from "@/src/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-surface px-5 pt-6 pb-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <Reveal>
          <AboutPortrait />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]"
              aria-hidden="true"
            />
            About me
          </p>
          <h2 className="mt-5 max-w-xl text-[2.35rem] leading-[1.02] font-black tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.25rem]">
            I build software that <span className="text-accent">stays clear</span> as it grows.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted lg:text-[17px] lg:leading-8">
            I partner with founders and teams to design, build, and automate the software their
            business runs on. The work covers the interface people use and the systems behind it.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted lg:text-[17px] lg:leading-8">
            I keep the process clear, the code maintainable, and the product fast as it grows.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {aboutFocus.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-line bg-white p-4 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.4)]"
              >
                <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                <span className="mt-1.5 block text-[13px] leading-5 text-muted">{item.detail}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function AboutPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div
        className="absolute top-8 -right-6 -bottom-6 -left-6 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_50%_40%,rgba(34,197,94,0.22),transparent_68%)]"
        aria-hidden="true"
      />
      <PortraitTilt>
        <figure className="overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_30px_70px_-36px_rgba(15,23,42,0.55)]">
          <Image
            src="/me/me.png"
            alt="Mohit Walia, full stack developer"
            width={1086}
            height={1448}
            sizes="(max-width: 1024px) 90vw, 460px"
            className="h-auto w-full"
          />
        </figure>
      </PortraitTilt>
    </div>
  );
}
