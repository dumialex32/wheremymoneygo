// src\components\Logo.tsx
import { Link } from "@tanstack/react-router";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="/assets/logo.png" alt="App Logo" className="h-14 w-auto" />
    </Link>
  );
}

export default Logo;
