import Avatar from '@/components/ui/avatar'
import { remainingDays } from '@/lib/date-operations/calculate-days-left'
import { cn } from '@/lib/utils'

export default function TaskBlock({ task }: { task: TasksWithIcons }) {
  const deadline = remainingDays(task.deadline)

  return (
    <div className="border-b last:border-none">
      <div className="group flex h-full w-full cursor-pointer items-center justify-between rounded-lg bg-white p-4 hover:bg-coldOcean dark:bg-neutral-700 dark:hover:bg-ocean/20">
        <div className="flex items-center gap-4">
          <div className="rounded-xl border-2 border-ocean/50 bg-coldOcean p-3 dark:bg-ocean/20">
            <task.Icon variant="Bulk" className="text-ocean" />
          </div>
          <div>
            <h4 className="text-base font-semibold group-hover:underline dark:text-gray-200">
              {task.title}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{task.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p
              className={cn(
                'text-sm text-neutral-400',
                deadline === 'Overdue!' && 'font-semibold text-neutral-800 dark:text-gray-300'
              )}
            >
              {deadline}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Avatar
                src={task.assignedUser.picture}
                alt={task.assignedUser.firstname}
                firstname={task.assignedUser.firstname}
                lastname={task.assignedUser.lastname}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
