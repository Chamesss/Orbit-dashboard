import { categoriesIconsList, fetchedTasksCounted } from '@/lib/api-data/waiting-tasks-data'
import type { Icon } from 'iconsax-react'
import { memo, useEffect, useState } from 'react'
import Loading from '../ui/loading'
import TaskBlock from './blocks/task-block'

function WaitingTasks({
  setTotalCount
}: {
  setTotalCount: React.Dispatch<React.SetStateAction<number | undefined>>
}) {
  const [tasks, setTasks] = useState<TasksWithIcons[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const response: FetchedTasksCounted = fetchedTasksCounted
    const tasksWithIcon = response.tasks.map((task) => {
      return {
        ...task,
        Icon: categoriesIconsList.find((category) => category.title === task.category)?.Icon as Icon
      }
    })
    setTimeout(() => {
      setTasks(tasksWithIcon)
      setTotalCount(response.total)
      setLoading(false)
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex w-full flex-col">
      {tasks?.map((task, index) => <TaskBlock task={task} key={index} />)}
      {!tasks && loading && (
        <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  )
}

export default memo(WaitingTasks)
