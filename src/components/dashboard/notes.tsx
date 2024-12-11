import { memo } from 'react'

function Notes() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-between">
        <p>Note 1</p>
        <p>Today at 2:00 PM</p>
      </div>
      <div className="flex justify-between">
        <p>Note 2</p>
        <p>Tomorrow at 10:00 AM</p>
      </div>
      <div className="flex justify-between">
        <p>Note 3</p>
        <p>Tomorrow at 2:00 PM</p>
      </div>
    </div>
  )
}

export default memo(Notes)
