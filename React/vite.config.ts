import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    MillionLint.vite({
      enabled: true,
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    open: true,
  },
});
