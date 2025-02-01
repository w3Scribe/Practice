import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/")({
  component: Home,
});

function Home() {
  return (
    <div className="text-slate-800 underline underline-offset-2 font-black capitalize text-3xl p-2">
      Home Page
    </div>
  );
}
