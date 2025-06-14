export type NavLinks = {
  href: string;
  label: string;
  auth?: "protected" | "public-only" | "always";
};

export const links: NavLinks[] = [
  { href: "/", label: "Home", auth: "always" },
  { href: "/about", label: "About", auth: "always" },
  { href: "/dashboard", label: "Dashboard", auth: "protected" },
  { href: "/privacy", label: "Privacy", auth: "always" },
];
