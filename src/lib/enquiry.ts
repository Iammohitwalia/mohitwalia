import { contact, openWhatsApp } from "@/src/lib/contact";

export interface EnquiryPayload {
  service: string;
  name: string;
  email: string;
  company: string;
  budget: string;
  timeline: string;
  message: string;
}

export function formatEnquiry(enquiry: EnquiryPayload) {
  return [
    `Hi Mohit, I'd like to talk about ${enquiry.service}.`,
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    enquiry.company ? `Company: ${enquiry.company}` : "",
    `Budget: ${enquiry.budget}`,
    `Timeline: ${enquiry.timeline}`,
    `Message: ${enquiry.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function submitEnquiry(enquiry: EnquiryPayload) {
  // Replace this call with Resend, Supabase, or a CRM when those are connected.
  openWhatsApp(formatEnquiry(enquiry));
  return { channel: "whatsapp" as const, href: contact.talkHref };
}
