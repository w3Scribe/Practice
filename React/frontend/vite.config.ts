import MillionLint from "@million/lint";
import ReactCompilerConfig from "babel-plugin-react-compiler"
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
    viteReact({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig as any]],
      },
    }),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  server: {
    open: true,
  },
  build: {
    target: "esnext",
  }
});
