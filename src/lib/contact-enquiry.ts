import { contact } from "@/src/lib/contact";

export interface ContactEnquiry {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

export function formatContactEnquiry(enquiry: ContactEnquiry) {
  return [
    "New Portfolio Enquiry",
    "",
    "Name:",
    `${enquiry.firstName} ${enquiry.lastName}`.trim(),
    "",
    "Email:",
    enquiry.email,
    "",
    "Company:",
    enquiry.company || "—",
    "",
    "Service:",
    enquiry.service,
    "",
    "Budget:",
    enquiry.budget,
    "",
    "Timeline:",
    enquiry.timeline,
    "",
    "Message:",
    enquiry.message,
  ].join("\n");
}

export function contactEnquiryHref(enquiry: ContactEnquiry) {
  return `${contact.talkHref}?text=${encodeURIComponent(formatContactEnquiry(enquiry))}`;
}

export async function submitContactEnquiry(enquiry: ContactEnquiry) {
  // Swap this body for Resend, a Supabase edge function, Calendly, or a CRM.
  // The form only depends on this function's result.
  const popup = window.open(contactEnquiryHref(enquiry), "_blank", "noopener,noreferrer");
  if (!popup) return { ok: false as const, channel: "whatsapp" as const };
  return { ok: true as const, channel: "whatsapp" as const };
}
