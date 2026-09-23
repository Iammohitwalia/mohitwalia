export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];

export const mobileTabs: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
];
