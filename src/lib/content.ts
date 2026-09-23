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
  url: string;
  image?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "myPawPair",
    category: "AI / Pet Care",
    description:
      "Pet care companion with Charlie AI, vet-reviewed guidance, and a profile that follows a dog or cat through every life stage.",
    url: "https://mypawpair.com",
    image: "/work/mypawpair.jpg",
  },
  {
    title: "JobHookUp",
    category: "Hiring",
    description:
      "Video profiles that connect candidates and employers. Private videos, and access only for approved employers.",
    url: "https://jobhookup.ca/",
    image: "/work/jobhookup.jpg",
  },
  {
    title: "California DUI Checkpoints",
    category: "Legal Tech",
    description:
      "Live checkpoint map and alerts across all 58 California counties, with attorney-reviewed guidance from Meehan Law Firm.",
    url: "https://californiaduicheckpoints.com",
    image: "/work/californiaduicheckpoints.jpg",
  },
  {
    title: "adAlert.io",
    category: "SaaS / PPC",
    description:
      "Google Ads monitoring that watches accounts around the clock and sends budget, performance, and policy alerts.",
    url: "https://adalert.io",
    image: "/work/adalert.jpg",
  },
  {
    title: "The Meehan Law Firm",
    category: "Legal",
    description:
      "California DUI and criminal defense site, with practice areas, statewide offices, and a way to request a consultation.",
    url: "https://www.themeehanlawfirm.com/",
    image: "/work/meehan.jpg",
  },
  {
    title: "Perfect Union",
    category: "E-Commerce",
    description:
      "Dispensary site for Perfect Union, with online ordering, daily deals, and pages for locations across California.",
    url: "https://www.perfect-union.com/",
    image: "/work/perfect-union.jpg",
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  title: string;
  rating: string;
  dates: string;
  tags: string[];
}

export const testimonials: TestimonialItem[] = [
  {
    id: "next-node",
    quote: "Knowledgeable, on time, and pleasant to work with.",
    title: "Next.js, Node.js Developer",
    rating: "5.0",
    dates: "Oct 18, 2024 – Nov 20, 2024",
    tags: ["Reliable", "Collaborative"],
  },
  {
    id: "wordpress-ach",
    quote: "A must hire for your project!",
    title: "WordPress Website Development with ACH Payments",
    rating: "5.0",
    dates: "Jan 23, 2025 – Jan 28, 2025",
    tags: [],
  },
  {
    id: "figma",
    quote: "Strongly recommend.",
    title: "WordPress and Figma designer",
    rating: "5.0",
    dates: "May 24, 2024 – Jan 23, 2025",
    tags: [],
  },
  {
    id: "woocommerce",
    quote:
      "I had the pleasure of working with Mohit on the development of my website, and the experience was great from start to finish. He was always responsive, attentive to every request, and quick to address any feedback or changes needed. Throughout the project, he maintained a positive and professional attitude, never hesitating to help, no matter how big or small the task. His willingness to go the extra mile made the entire process smooth and mostly stress-free. I truly appreciate his dedication and hard work, and I would highly recommend Mohit to anyone looking for a reliable, cost-effective and cooperative developer.",
    title: "Convert Figma Design to WooCommerce",
    rating: "4.9",
    dates: "Jun 20, 2025 – Aug 12, 2025",
    tags: ["Professional", "Clear Communicator", "Detail Oriented", "Reliable"],
  },
  {
    id: "ongoing",
    quote: "Endorsed by client",
    title: "Next.js & Node.js Developer — Ongoing",
    rating: "5.0",
    dates: "Jan 21, 2025 – Dec 29, 2025",
    tags: ["Committed to Quality"],
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
