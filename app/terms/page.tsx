import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/src/components/legal/LegalDocument";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { contact } from "@/src/lib/contact";
import { socialMetadata } from "@/src/lib/seo";

const title = "Terms & Conditions | Mohit Walia";
const description = "Terms for using Mohit Walia's portfolio website and for starting a project enquiry.";

export const metadata: Metadata = {
  title,
  description,
  ...socialMetadata({ title, description, url: "/terms" }),
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <LegalDocument eyebrow="Legal" title="Terms & Conditions" updated="24 September 2026">
          <section>
            <h2>Using this website</h2>
            <p className="mt-3">
              This site presents Mohit Walia&apos;s work and a way to get in touch. By using it, you agree
              to these terms. If you do not agree, please leave the site.
            </p>
          </section>
          <section>
            <h2>Work shown here</h2>
            <p className="mt-3">
              Zentro, Everleaf, and Movieflix are products I built and linked as live examples. Screenshots
              and descriptions are there to show the product. They are not a promise that the same scope,
              timeline, or result will fit a different project.
            </p>
          </section>
          <section>
            <h2>Reviews</h2>
            <p className="mt-3">
              Testimonials are reviews left on Upwork for completed contracts. They are shown with the
              contract title, rating, and dates from those reviews. They describe past work, not a guarantee
              of a future engagement.
            </p>
          </section>
          <section>
            <h2>Enquiries are not a contract</h2>
            <p className="mt-3">
              A form submission, WhatsApp message, or call is a conversation. Paid work starts only after we
              agree the scope, price, and timeline in writing. Until then, nothing on this site is an offer
              you can accept by using the form.
            </p>
          </section>
          <section>
            <h2>The site itself</h2>
            <p className="mt-3">
              The writing, layout, and original graphics on this portfolio belong to Mohit Walia. You may
              share a link to a page. You may not copy the site and present it as your own.
            </p>
            <p className="mt-3">
              The site is provided as it is. Pages can change, and a demo link can go offline. I am not
              liable for decisions you make solely from reading the portfolio, to the extent Indian law
              allows that limit.
            </p>
          </section>
          <section>
            <h2>External services</h2>
            <p className="mt-3">
              Links to project demos, Upwork, and WhatsApp leave this site. Those services set their own
              terms. The <Link href="/privacy">Privacy Policy</Link> explains what this website itself does
              with information.
            </p>
          </section>
          <section>
            <h2>Law and contact</h2>
            <p className="mt-3">
              These terms are governed by the laws of India. Questions can go to{" "}
              <a href={contact.emailHref}>{contact.email}</a> or WhatsApp at{" "}
              <a href={contact.talkHref}>{contact.phoneDisplay}</a>.
            </p>
          </section>
        </LegalDocument>
      </main>
      <Footer />
    </>
  );
}
