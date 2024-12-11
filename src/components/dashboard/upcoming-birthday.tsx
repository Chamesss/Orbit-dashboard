import { memo } from 'react'

function UpcomingBirthday() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-between">
        <p>John Doe</p>
        <p>Today</p>
      </div>
      <div className="flex justify-between">
        <p>Jane Doe</p>
        <p>Tomorrow</p>
      </div>
      <div className="flex justify-between">
        <p>John Smith</p>
        <p>Tomorrow</p>
      </div>
    </div>
  )
}

export default memo(UpcomingBirthday)
