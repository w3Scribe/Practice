import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/__notFound')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/__notFound"!</div>
}
