import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/")({
  component: Home,
});

function Home() {
  return (
    <div>
      home Page
    </div>
  );
}