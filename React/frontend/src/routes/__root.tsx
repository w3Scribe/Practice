import { Outlet, createRootRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createRootRoute({
  component: RootComponent
});

function RootComponent() {
  return (
    <React.Fragment>
      <section className="min-w-screen min-h-screen">
        <Outlet />
      </section>
    </React.Fragment>
  );
}
