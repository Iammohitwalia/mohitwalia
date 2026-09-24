import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/src/components/legal/LegalDocument";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { contact } from "@/src/lib/contact";
import { socialMetadata } from "@/src/lib/seo";

const title = "Privacy Policy | Mohit Walia";
const description = "How Mohit Walia's portfolio website handles information when you visit or get in touch.";

export const metadata: Metadata = {
  title,
  description,
  ...socialMetadata({ title, description, url: "/privacy" }),
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <LegalDocument eyebrow="Legal" title="Privacy Policy" updated="24 September 2026">
          <section>
            <h2>Who this covers</h2>
            <p className="mt-3">
              This policy describes the portfolio website of Mohit Walia, based in Himachal Pradesh, India.
              It applies to this site only. It does not cover WhatsApp, Upwork, Vercel, or the live product
              demos linked from the projects page. Those services have their own policies.
            </p>
          </section>
          <section>
            <h2>What this site collects</h2>
            <p className="mt-3">
              The site does not ask you to create an account, and it does not run advertising or analytics
              cookies. You can read every page without submitting personal information.
            </p>
            <p className="mt-3">
              The contact form does not save your message on this website. Submit opens WhatsApp with the
              details you typed. The message is sent only if you send it yourself in WhatsApp. From that
              point, WhatsApp processes it under its own terms.
            </p>
          </section>
          <section>
            <h2>Hosting</h2>
            <p className="mt-3">
              The site is hosted on Vercel. Delivering a page can involve ordinary connection data such as
              your IP address, browser, and the page you requested. That data is used to run the site. It is
              not sold, and it is not used to build an advertising profile.
            </p>
          </section>
          <section>
            <h2>How to reach me</h2>
            <p className="mt-3">
              Questions about this policy can go to{" "}
              <a href={contact.emailHref}>{contact.email}</a> or WhatsApp at{" "}
              <a href={contact.talkHref}>{contact.phoneDisplay}</a>.
            </p>
            <p className="mt-3">
              Related terms are on the <Link href="/terms">Terms &amp; Conditions</Link> page.
            </p>
          </section>
        </LegalDocument>
      </main>
      <Footer />
    </>
  );
}
