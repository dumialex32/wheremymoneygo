// vite.config.ts
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  ssr: {
    noExternal: ["@clerk/tanstack-react-start"],
  },
  plugins: [tsConfigPaths(), tanstackStart()],
});
