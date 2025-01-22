import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    MillionLint.vite({
      enabled: true,
    }),
    viteReact(),
    tailwindcss(),
  ],
  server: {
    open: true,
  },
});
