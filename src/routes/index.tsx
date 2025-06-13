//src\routes\index.tsx
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-red-500">
      <Button className="font-bold">Click</Button>
      <Button className="font-normal">Click</Button>
    </div>
  );
}
