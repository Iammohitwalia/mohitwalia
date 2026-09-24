import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/src/components/services/ContactForm";
import { Button } from "@/src/components/ui/Button";
import { contact } from "@/src/lib/contact";
import type { ServicesIndex } from "@/src/lib/services";

export function Sidebar({
  service,
  enquiry,
}: {
  service: string;
  enquiry: ServicesIndex["enquiry"];
}) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-[24px] shadow-[0_28px_50px_-18px_rgba(15,23,42,0.55)]">
      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0B1220] p-5 text-white">
        <div
          className="pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.22),transparent_68%)]"
          aria-hidden="true"
        />
        <div className="relative">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {enquiry.availability}
        </p>
        <p className="mt-2 text-sm leading-6 text-white/70">{enquiry.responseTime}</p>
        <div className="mt-5">
          <ContactForm
            service={service}
            budgets={enquiry.budgets}
            timelines={enquiry.timelines}
            submitLabel={enquiry.submitLabel}
          />
        </div>
        <div className="mt-4 grid gap-2">
          <Button href={contact.talkHref} variant="inverted" className="w-full">
            {enquiry.whatsappLabel}
          </Button>
          <Button href="/#schedule" variant="inverted" className="w-full">
            {enquiry.bookLabel}
          </Button>
          {enquiry.resumeHref ? (
            <Button
              href={enquiry.resumeHref}
              variant="inverted"
              trailingIcon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
              className="w-full"
            >
              {enquiry.resumeLabel}
            </Button>
          ) : null}
        </div>
        </div>
      </div>
      </div>
    </aside>
  );
}
