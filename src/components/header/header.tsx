import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useAuth } from '@/hooks/useAuth'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'
import {
  HambergerMenu,
  MessageQuestion,
  Moon,
  Notification,
  SearchNormal1,
  Sun1
} from 'iconsax-react'
import { useEffect, useState } from 'react'
import SideBar from '../sidebar/sidebar'
import Notifications from './notifications'

export default function Header() {
  const greeting = new Date().getHours() < 12 ? 'Good morning' : 'Good afternoon'
  const { user } = useAuth()
  const { isDarkMode, toggleTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const styles =
    'cursor-pointer lg:h-8 lg:w-8 w-5 h-5 transition-all hover:scale-105 active:scale-95'

  // function to close the side bar when screen is above 767px
  const closeSidebar = () => {
    if (window.innerWidth > 767) {
      setSidebarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', closeSidebar)
    return () => window.removeEventListener('resize', closeSidebar)
  }, [])

  return (
    <header className="flex h-[5rem] w-full flex-row items-center justify-between bg-transparent px-4 py-4 md:px-6">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <HambergerMenu
            onClick={() => setSidebarOpen((prev) => !prev)}
            className={cn(
              'mr-2 block h-5 w-5 shrink-0 cursor-pointer self-center hover:opacity-75 md:hidden',
              'w-fit'
            )}
          />
          <div>
            <div className="gap-1 -space-y-1 space-x-1 font-semibold text-ocean md:text-xl">
              <span className="text-nowrap">
                {greeting}
                {user && ','}
              </span>
              {user ? (
                <span className="inline-block text-wrap capitalize">{user.firstname}</span>
              ) : (
                <div className="ml-2 mt-1 inline-block h-4 w-16 animate-pulse rounded bg-white dark:bg-neutral-600" />
              )}
            </div>

            <p className="text-medium hidden text-sm text-gray-500 sm:block">
              Let's take a look at today's current events
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-3 px-2 text-gray-500 dark:text-gray-200 md:gap-4">
          {isDarkMode ? (
            <Sun1 onClick={toggleTheme} variant="Bulk" className={styles} />
          ) : (
            <Moon onClick={toggleTheme} variant="Bulk" className={styles} />
          )}
          <SearchNormal1 variant="Bulk" className={styles} />
          <MessageQuestion variant="Bulk" className={styles} />
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Notification variant="Bulk" className={styles} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="-translate-x-2 translate-y-2" align="end">
              <Notifications />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Sheet onOpenChange={setSidebarOpen} open={sidebarOpen}>
        <SheetContent side={'left'} className="max-w-fit p-0 sm:max-w-fit">
          <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </SheetContent>
      </Sheet>
    </header>
  )
}
