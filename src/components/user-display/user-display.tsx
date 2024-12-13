import { useAuth } from '@/hooks/useAuth'
import { cn } from '@/lib/utils'
import { EllipsisVertical } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'

export default function UserDisplay({ expend }: { expend: boolean }) {
  const { user, loading } = useAuth()

  if (loading) return <PictureLoading />
  if (!user) return <div>Not logged</div>

  return (
    <div className="flex w-full items-center justify-between overflow-hidden py-2 xl:px-4">
      <div className="flex shrink-0 items-center">
        <img src={user.picture} alt="avatar" className="h-10 w-10 rounded-full object-cover" />
        <div className={cn('ml-4 -space-y-1 xl:block', expend && '')}>
          <p className="text-base font-semibold capitalize">
            {user.firstname} {user.lastname}
          </p>
          <p className="text-sm text-neutral-500">{user.role}</p>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <EllipsisVertical className="cursor-pointer hover:text-black/60" size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="-translate-x-2 translate-y-2" align="center">
          <DropdownMenuItem className="cursor-pointer font-medium">
            <p className="text-rose-400 transition-all hover:text-rose-500">Logout</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const PictureLoading = () => (
  <div className="flex items-center justify-between px-4 py-2">
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-neutral-100" />
      <div className="ml-4 space-y-1">
        <div className="h-2 w-20 rounded bg-neutral-100" />
        <div className="h-2 w-10 rounded bg-neutral-100" />
      </div>
    </div>
  </div>
)
