// src\routes\_authed\dashboard\transactions\index.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/dashboard/transactions/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_authed/dashboard/transactions/"!</div>;
}
