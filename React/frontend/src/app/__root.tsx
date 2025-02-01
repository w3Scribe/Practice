import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import "../utils/app.css"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div>Nothing Gonna Be Changed Here!</div>
      <Outlet />
    </React.Fragment>
  )
}
