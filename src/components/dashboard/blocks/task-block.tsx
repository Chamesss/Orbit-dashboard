import Avatar from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { remainingDays } from '@/lib/date-operations/calculate-days-left'
import { cn } from '@/lib/utils'
import { EllipsisVertical } from 'lucide-react'

export default function TaskBlock({ task }: { task: TasksWithIcons }) {
  const deadline = remainingDays(task.deadline)

  return (
    <div className="border-b last:border-none">
      <div className="group flex h-full w-full cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-2 hover:bg-coldOcean dark:bg-neutral-700 dark:hover:bg-ocean/20 lg:p-4">
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="rounded-xl border-2 border-ocean/50 bg-coldOcean p-1 dark:bg-ocean/20 lg:p-3">
            <task.Icon variant="Bulk" className="h-5 w-5 text-ocean" />
          </div>
          <div>
            <h4 className="line-clamp-1 text-sm font-semibold group-hover:underline dark:text-gray-200 xs:text-base">
              {task.title}
            </h4>
            <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
              {task.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <p
            className={cn(
              'text-nowrap text-xs text-neutral-400 md:text-sm',
              deadline === 'Overdue!' && 'font-semibold text-neutral-800 dark:text-gray-300'
            )}
          >
            {deadline}
          </p>
          <div className="flex items-center">
            <Avatar
              src={task.assignedUser.picture}
              alt={task.assignedUser.firstname}
              firstname={task.assignedUser.firstname}
              lastname={task.assignedUser.lastname}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <EllipsisVertical
                className="cursor-pointer hover:text-black/60 dark:hover:text-white/60"
                size={20}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={10}
              alignOffset={-10}
              className="-translate-x-2 translate-y-2"
              side="top"
              align="end"
            >
              <DropdownMenuItem className="cursor-pointer font-medium">
                <p>Edit</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer font-medium">
                <p className="text-rose-400 transition-all hover:text-rose-500">Delete</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
