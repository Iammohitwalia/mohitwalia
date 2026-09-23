export interface ServiceItem {
  title: string;
  description: string;
  tags: string[];
  icon: "code" | "brain" | "chat" | "cursor" | "database" | "cloud" | "layers" | "shield";
}

export const services: ServiceItem[] = [
  {
    title: "Web Development",
    description:
      "Modern, scalable and high-performance web applications using Next.js, React and more.",
    tags: ["Next.js", "React", "TypeScript"],
    icon: "code",
  },
  {
    title: "AI & Automation",
    description:
      "Integrate AI, LLMs and automation workflows to streamline your business processes.",
    tags: ["OpenAI", "Claude", "Automation"],
    icon: "brain",
  },
  {
    title: "Technical Consulting",
    description: "Get expert guidance on architecture, tech stack and scaling your product.",
    tags: ["Strategy", "Architecture", "Scaling"],
    icon: "chat",
  },
  {
    title: "CMS & No-Code",
    description:
      "Webflow, WordPress, Shopify and custom CMS solutions for fast and flexible websites.",
    tags: ["Webflow", "WordPress", "Shopify"],
    icon: "cursor",
  },
  {
    title: "API Integration",
    description: "Third-party API integrations, payment systems, CRMs and custom solutions.",
    tags: ["Stripe", "Twilio", "Airtable"],
    icon: "database",
  },
  {
    title: "Cloud & DevOps",
    description: "Deployment, server setup, CI/CD and cloud infrastructure on Vercel, AWS and more.",
    tags: ["Vercel", "AWS", "DevOps"],
    icon: "cloud",
  },
  {
    title: "Database & Backend",
    description: "Node.js, Express.js, MongoDB, PostgreSQL and scalable backend systems.",
    tags: ["Node.js", "PostgreSQL", "MongoDB"],
    icon: "layers",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing support, feature updates and performance optimization to keep your product running smoothly.",
    tags: ["Monitoring", "Updates", "Support"],
    icon: "shield",
  },
];

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  tone: "paw" | "legal" | "restaurant";
}

export const projects: ProjectItem[] = [
  {
    title: "myPawPair",
    category: "AI / SaaS",
    description:
      "AI-powered pet platform with subscriptions, provider directory and intelligent assistant.",
    tone: "paw",
  },
  {
    title: "The Meehan Law Firm",
    category: "Legal Tech",
    description: "Modern law firm website with a focus on performance and lead generation.",
    tone: "legal",
  },
  {
    title: "Maharaja Indian Restaurant",
    category: "E-Commerce",
    description: "Modern restaurant website with online ordering and beautiful UI.",
    tone: "restaurant",
  },
];

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Excellent developer. Very professional, great communication and delivered high-quality work. Will definitely work with Mohit again.",
    name: "Asher R.",
    role: "Agency Owner, USA",
    initials: "AR",
  },
  {
    quote:
      "Mohit and his team are fantastic. They understood our requirements quickly and delivered beyond expectations. Highly recommended!",
    name: "Ann M.",
    role: "Healthcare Business, USA",
    initials: "AM",
  },
  {
    quote:
      "Great technical knowledge and problem solving skills. Delivered the project on time and the quality was outstanding.",
    name: "Byron S.",
    role: "Business Owner, UK",
    initials: "BS",
  },
];

export const aboutFocus = [
  {
    title: "Web applications",
    detail: "Interfaces and product flows in Next.js and React.",
  },
  {
    title: "AI-powered solutions",
    detail: "Assistants, LLMs, and workflows inside the product.",
  },
  {
    title: "Automation systems",
    detail: "The repetitive work, taken out of the business.",
  },
] as const;
