import { offlineUsersResponse } from '@/lib/api-data/offline-users-data'
import { memo, useEffect, useState } from 'react'
import Loading from '../ui/loading'
import OfflineUserBlock from './blocks/offline-user-block'

function OfflineUsers({
  setTotalCount
}: {
  setTotalCount: React.Dispatch<React.SetStateAction<number | undefined>>
}) {
  const [loading, setLoading] = useState(true)
  const [offlineUsers, setOfflineUsers] = useState<OfflineUser[]>()

  useEffect(() => {
    setLoading(true)
    const response: OfflineUserResponse = offlineUsersResponse
    setTimeout(() => {
      setTotalCount(response.total)
      setOfflineUsers(response.data)
      setLoading(false)
    }, 810)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex w-full flex-col">
      {offlineUsers?.map((user, index) => <OfflineUserBlock key={index} user={user} />)}
      {!offlineUsers && loading && (
        <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  )
}
export default memo(OfflineUsers)
