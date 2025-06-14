import { Link } from "@tanstack/react-router";
import { SignedIn, SignedOut } from "@clerk/tanstack-react-start";

import AuthAwareLink from "./AuthAwareLink";
import { links } from "@/utils/links";

const Footer = () => {
  return (
    <footer className="mt-auto py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} WhereMyMoneyGo
          </div>

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {links.map((link) => (
              <AuthAwareLink key={link.href} link={link} />
            ))}
          </nav>
        </div>

        <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-500">
          <p>Track your finances effortlessly</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
