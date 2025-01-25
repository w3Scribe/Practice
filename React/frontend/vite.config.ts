import MillionLint from "@million/lint";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    MillionLint.vite({
      enabled: false,
    }),
    viteReact(),
    tailwindcss(),
  ],
  server: {
    open: true,
  },
});
