import { memo } from 'react'

function OfflineUsers({
  setTotalCount
}: {
  setTotalCount: React.Dispatch<React.SetStateAction<number | undefined>>
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-between">
        <p>John Doe</p>
        <p>Out of office</p>
      </div>
      <div className="flex justify-between">
        <p>Jane Doe</p>
        <p>Out of office</p>
      </div>
      <div className="flex justify-between">
        <p>John Smith</p>
        <p>Out of office</p>
      </div>
    </div>
  )
}
export default memo(OfflineUsers)
