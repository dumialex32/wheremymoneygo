import { NavLinks } from "@/utils/links";
import { SignedIn, SignedOut } from "@clerk/tanstack-react-start";
import { Link } from "@tanstack/react-router";

const AuthAwareLink = ({ link }: { link: NavLinks }) => {
  if (link.auth === "protected") {
    return (
      <SignedIn>
        <Link
          to={link.href}
          className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          activeProps={{
            className: "font-medium text-gray-900 dark:text-white",
          }}
        >
          {link.label}
        </Link>
      </SignedIn>
    );
  }

  if (link.auth === "public-only") {
    return (
      <SignedOut>
        <Link
          to={link.href}
          className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          activeProps={{
            className: "font-medium text-gray-900 dark:text-white",
          }}
        >
          {link.label}
        </Link>
      </SignedOut>
    );
  }

  // Default case for 'always'
  return (
    <Link
      to={link.href}
      className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
      activeProps={{
        className: "font-medium text-gray-900 dark:text-white",
      }}
    >
      {link.label}
    </Link>
  );
};

export default AuthAwareLink;
