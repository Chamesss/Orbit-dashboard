import SideBar from '@/components/sidebar/sidebar'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="flex h-screen w-screen flex-row">
      <SideBar />
      <Outlet />
    </div>
  )
}
