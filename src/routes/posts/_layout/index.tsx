import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/posts/"!</div>
}
