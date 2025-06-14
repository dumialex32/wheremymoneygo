// src\routes\index.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <div className="flex items-center gap-4"></div>
    </div>
  );
}
