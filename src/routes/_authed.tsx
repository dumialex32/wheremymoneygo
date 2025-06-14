import { createFileRoute, redirect } from "@tanstack/react-router";
import { toast } from "sonner";

export const Route = createFileRoute("/_authed")({
  beforeLoad: ({ context }) => {
    if (!context.userId) {
      redirect({
        to: "/",
        throw: true,
      });
    }
  },
});
