import { Outlet, createRootRoute, useNavigate } from "@tanstack/react-router";
import * as React from "react";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <section className="min-h-screen min-w-screen grid place-items-center bg-gray-950">
        <div className="flex flex-col gap-y-4 items-center">
          <h1 className="font-bold text-gray-700 text-xl">
            404 Page Not Found
          </h1>
          <button
            onClick={() => useNavigate({ from: "/" })}
            className="bg-gray-800 border-t border-gray-500 rounded-md text-gray-300 px-8 py-1 cursor-pointer block in-hover:underline underline-offset-2"
          >
            Go To Home
          </button>
        </div>
      </section>
    );
  },
});

function RootComponent() {
  return (
    <React.Fragment>
      <section className="min-w-screen min-h-screen bg-slate-900">
        <Outlet />
      </section>
    </React.Fragment>
  );
}
