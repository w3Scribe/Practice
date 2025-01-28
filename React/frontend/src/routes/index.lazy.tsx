import { createLazyFileRoute } from "@tanstack/react-router";


export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {


  return <div className="z-(--zindex)">hello world</div>;
}
