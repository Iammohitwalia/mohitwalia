import type { Metadata } from "next";
import { ProjectsHero, ProjectsListing } from "@/src/components/projects/ProjectsPage";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { Cta } from "@/src/components/sections/Cta";
import { socialMetadata } from "@/src/lib/seo";

const title = "Projects | Mohit Walia";
const description = "Live products built by Mohit Walia: Zentro, Everleaf, and Movieflix.";

export const metadata: Metadata = {
  title,
  description,
  ...socialMetadata({ title, description, url: "/projects" }),
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <ProjectsHero />
        <ProjectsListing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
