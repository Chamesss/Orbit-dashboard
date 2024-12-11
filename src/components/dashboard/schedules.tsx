import { memo } from 'react'

function Schedules() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-between">
        <p>Meeting with team</p>
        <p>Today at 2:00 PM</p>
      </div>
      <div className="flex justify-between">
        <p>Client call</p>
        <p>Tomorrow at 10:00 AM</p>
      </div>
      <div className="flex justify-between">
        <p>Meeting with client</p>
        <p>Tomorrow at 2:00 PM</p>
      </div>
    </div>
  )
}

export default memo(Schedules)
