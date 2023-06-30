import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div>
      <span>layout</span>
      <Outlet />
    </div>
  )
}
