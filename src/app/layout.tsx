import SideBar from '@/components/sidebar/sidebar'
import Loading from '@/components/ui/loading'
import { useAuth } from '@/hooks/useAuth'
import { Outlet } from 'react-router'

export default function Layout() {
  const { user, loading } = useAuth()

  return (
    <div className="flex h-screen w-screen flex-row">
      <SideBar />
      {loading ? (
        <AuthLoading />
      ) : user ? (
        // <div className="ml-[3.5rem] xl:ml-0">
        <Outlet />
      ) : // </div>
      typeof user === 'undefined' ? (
        <AuthLoading />
      ) : (
        <NotLogged />
      )}
    </div>
  )
}

const AuthLoading = () => (
  <div className="flex w-full items-center justify-center bg-muted">
    <Loading />
  </div>
)

const NotLogged = () => (
  <div className="flex w-full items-center justify-center bg-muted">
    <p className="text-2xl">Not logged</p>
  </div>
)
