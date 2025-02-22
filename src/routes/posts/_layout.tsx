import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
    <div>Hello comes from layout</div>
    <Outlet/>
    </>
  )
}
