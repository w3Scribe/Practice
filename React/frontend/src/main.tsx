import * as TRouter from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route } from "./app/__root";
import { routeTree } from "./utils/app.gen.ts";

const __RootContainer = createRoot(document.getElementById("root")!);
const __Root = TRouter.createRouter({ routeTree, notFoundMode: "root" });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof Route;
  }
}

__RootContainer.render(
  <StrictMode>
    <TRouter.RouterProvider router={__Root} />
  </StrictMode>
);
