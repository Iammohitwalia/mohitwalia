import type { Metadata } from "next";
import { AboutFaq } from "@/src/components/about/AboutFaq";
import { AboutHero } from "@/src/components/about/AboutHero";
import { AboutHighlights } from "@/src/components/about/AboutHighlights";
import { AboutJourney } from "@/src/components/about/AboutJourney";
import { AboutStory } from "@/src/components/about/AboutStory";
import { AboutValues } from "@/src/components/about/AboutValues";
import { AboutWhy } from "@/src/components/about/AboutWhy";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { Cta } from "@/src/components/sections/Cta";
import { TechStack } from "@/src/components/sections/TechStack";
import { socialMetadata } from "@/src/lib/seo";

const title = "About | Mohit Walia";
const description =
  "Mohit Walia is a full-stack developer and technical consultant. See the story, journey, values, and technologies behind the work.";

export const metadata: Metadata = {
  title,
  description,
  ...socialMetadata({ title, description, url: "/about" }),
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <AboutHero />
        <AboutStory />
        <AboutJourney />
        <AboutValues />
        <TechStack />
        <AboutHighlights />
        <AboutWhy />
        <AboutFaq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
