import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/hooks/useAuth'
import { useTheme } from '@/hooks/useTheme'
import { MessageQuestion, Moon, Notification, SearchNormal1, Sun1 } from 'iconsax-react'
import Notifications from './notifications'

export default function Header() {
  const greeting = new Date().getHours() < 12 ? 'Good morning' : 'Good afternoon'
  const { user } = useAuth() as { user: User }
  const { isDarkMode, toggleTheme } = useTheme()
  const styles = 'cursor-pointer transition-all hover:scale-105 active:scale-95'

  return (
    <header className="flex h-[5rem] w-full flex-row items-center justify-between bg-transparent px-6 py-4">
      <div className="flex w-full flex-row items-center justify-between">
        <div>
          <p className="-space-y-1 text-xl font-semibold text-ocean">
            {greeting}, <span className="capitalize">{user.firstname}</span>
          </p>
          <p className="text-medium text-sm text-gray-500">
            Let's take a look at today's current events
          </p>
        </div>

        <div className="flex flex-row gap-4 px-2 text-gray-500 dark:text-gray-200">
          {isDarkMode ? (
            <Sun1 onClick={toggleTheme} size={24} variant="Bulk" className={styles} />
          ) : (
            <Moon onClick={toggleTheme} size={24} variant="Bulk" className={styles} />
          )}
          <SearchNormal1 size={24} variant="Bulk" className={styles} />
          <MessageQuestion size={24} variant="Bulk" className={styles} />
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Notification size={24} variant="Bulk" className={styles} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="-translate-x-2 translate-y-2" align="end">
              <Notifications />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
