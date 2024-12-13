import { FolderCross } from 'iconsax-react'
import { useEffect, useState } from 'react'
import Loading from '../ui/loading'

export default function Notifications() {
  const [loading, setLoading] = useState(true)
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setNotifications([])
      setLoading(false)
    }, 530)
  }, [])

  return (
    <div className="w-[20rem]">
      <div className="flex w-full flex-row items-baseline justify-between border-b px-4 pb-1 pt-3">
        <h4 className="text-lg font-semibold">Notifications</h4>
        <p className="cursor-pointer text-sm text-gray-500 hover:underline dark:text-gray-400">
          Mark all as read
        </p>
      </div>
      <div className="px-4 py-3">
        {loading ? (
          <div className="my-4 flex w-full items-center justify-center">
            <Loading />
          </div>
        ) : notifications.length === 0 ? (
          <div className="my-4 flex h-full w-full flex-col items-center justify-center gap-1">
            <FolderCross variant="Bulk" size={30} className="text-ocean" />
            <p className="text-sm italic text-gray-500 dark:text-gray-400">No Notifications</p>
          </div>
        ) : (
          notifications.map((notification, index) => (
            <div key={index} className="flex flex-row items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-primary"></div>
              <p>{notification}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
