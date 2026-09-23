export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/#top", sectionId: "top" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Testimonials", href: "/#testimonials", sectionId: "testimonials" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export const mobileTabs: NavItem[] = [
  { label: "Home", href: "/#top", sectionId: "top" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];
