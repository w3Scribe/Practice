import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.css";

const Qclient = new QueryClient();
const Router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof Router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={Qclient}>
      <RouterProvider router={Router} />
    </QueryClientProvider>
  </StrictMode>
);
