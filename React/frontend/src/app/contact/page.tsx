import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact/")({
  component: Contact,
  pendingComponent: () => <div>Loading...</div>
});

function Contact() {
  return (
    <div>
      contact Page
    </div>
  );
}