import Avatar from '@/components/ui/avatar'
import { offlineDuration } from '@/lib/date-operations/calculate-days-range'

export default function OfflineUserBlock({ user }: { user: OfflineUser }) {
  // function to calculate date range of the offline duration using the startDate and endDate

  const dateRange = offlineDuration(user.startDate, user.endDate)

  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-xl px-1 py-1.5 hover:bg-coldOcean hover:dark:bg-ocean/20">
      <div className="flex items-center gap-4">
        <Avatar
          src={user.picture}
          alt={user.firstname}
          firstname={user.firstname}
          lastname={user.lastname}
          defaultColor
        />
        <div>
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {user.firstname} {user.lastname}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{user.reason}</p>
        </div>
      </div>
      <p className="mr-1 text-nowrap text-sm text-gray-500 dark:text-gray-400">{dateRange}</p>
    </div>
  )
}
