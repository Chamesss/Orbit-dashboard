import { memo } from 'react'

function WaitingTasks({
  setTotalCount
}: {
  setTotalCount: React.Dispatch<React.SetStateAction<number | undefined>>
}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-between">
        <p>Task 1</p>
        <p>Due in 2 days</p>
      </div>
      <div className="flex justify-between">
        <p>Task 2</p>
        <p>Due in 5 days</p>
      </div>
      <div className="flex justify-between">
        <p>Task 3</p>
        <p>Due in 10 days</p>
      </div>
    </div>
  )
}

export default memo(WaitingTasks)
