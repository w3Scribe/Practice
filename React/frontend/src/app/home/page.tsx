import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/")({
  component: Home,
  pendingComponent: () => <div>Loading...</div>
});

function Home() {
  return (
    <div>
      home Page
    </div>
  );
}