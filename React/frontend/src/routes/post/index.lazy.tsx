import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/post/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/post/"!</div>
}
