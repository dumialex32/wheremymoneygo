// src\routes\dasboard\index.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/dashboard/")({
  beforeLoad: ({ context }) => {
    console.log(context.userId);
    context.userId;
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hellopp "/dasboard/"!</div>;
}
