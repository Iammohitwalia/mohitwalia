import { contact } from "@/src/lib/contact";

export const contactServices = [
  "Web Application",
  "SaaS Platform",
  "AI Integration",
  "Automation",
  "API Development",
  "Next.js Development",
  "WordPress",
  "Shopify",
  "Webflow",
  "Technical Consulting",
  "Other",
] as const;

export const contactBudgets = [
  "Less than $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "Let's Discuss",
] as const;

export const contactTimelines = [
  "Immediately",
  "Within 2 Weeks",
  "Within 1 Month",
  "Flexible",
] as const;

export const contactFacts = [
  { label: "Email", value: contact.email, href: contact.emailHref },
  { label: "WhatsApp", value: contact.phoneDisplay, href: contact.talkHref },
  { label: "Location", value: "Himachal Pradesh, India", href: "" },
  { label: "Time Zone", value: "IST (UTC +5:30)", href: "" },
  { label: "Response Time", value: "Usually within 24 hours", href: "" },
  { label: "Availability", value: "Available for new projects", href: "" },
] as const;

export const contactOffers = [
  {
    title: "Freelance Projects",
    detail: "A scoped release for a site, product, or feature, with a clear first version.",
    icon: "briefcase",
  },
  {
    title: "SaaS Development",
    detail: "The product workflow, accounts, and billing for a version you can put in front of users.",
    icon: "layers",
  },
  {
    title: "AI Automation",
    detail: "Practical AI features and workflows, with a person still involved where judgment matters.",
    icon: "brain",
  },
  {
    title: "Technical Consulting",
    detail: "A direct recommendation on the stack, the architecture, and what to build next.",
    icon: "chat",
  },
] as const;

export const contactFaqs = [
  {
    question: "How soon do you reply?",
    answer: "I reply on WhatsApp or email, usually within 24 hours. If the project is a fit, the next step is a short call.",
  },
  {
    question: "What technologies do you work with?",
    answer: "Next.js, React, TypeScript, and Node.js for product work. WordPress, Shopify, and Webflow when those are the right tool. I also build APIs, automation, and AI features on top of that stack.",
  },
  {
    question: "Can you work with existing projects?",
    answer: "Yes. I read the current system first and change the part you hired me for, rather than rewriting it for its own sake.",
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. Most of the work is with founders and small teams who need a first release, or a senior person alongside an existing product.",
  },
  {
    question: "Can you sign an NDA?",
    answer: "Yes. Send it before we talk through anything confidential, and I will review and sign it.",
  },
] as const;
