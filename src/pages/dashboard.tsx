import Notes from '@/components/dashboard/notes'
import OfflineUsers from '@/components/dashboard/offline-users'
import Overview from '@/components/dashboard/overview'
import Schedules from '@/components/dashboard/schedules'
import UpcomingBirthday from '@/components/dashboard/upcoming-birthday'
import WaitingTasks from '@/components/dashboard/waiting-tasks'
import WrappedContainer from '@/components/dashboard/wrapped-container'
import Header from '@/components/header/header'
import { useState } from 'react'

export default function Dashboard() {
  const [view, setView] = useState<TView>('week')
  const [totalWaitingTasks, setTotalWaitingTasks] = useState<number | undefined>(4)
  const [offlineUsers, setOfflineUsers] = useState<number | undefined>()

  return (
    <div className="maw-h-screen flex h-full w-full flex-col justify-between bg-muted">
      <Header />
      <div className="scrollbar grid h-full grid-cols-6 gap-6 overflow-auto p-6">
        <div className="col-span-4 flex flex-col gap-6">
          <WrappedContainer
            changeableView={{
              isChangeable: true,
              fn: setView,
              state: view
            }}
            title="Overview"
          >
            <Overview view={view} />
          </WrappedContainer>
          <WrappedContainer totalCount={totalWaitingTasks} title="Waiting tasks">
            <WaitingTasks setTotalCount={setTotalWaitingTasks} />
          </WrappedContainer>
          <WrappedContainer title="Schedules">
            <Schedules />
          </WrappedContainer>
        </div>
        <div className="col-span-2 flex flex-col gap-6">
          <WrappedContainer title="Notes">
            <Notes />
          </WrappedContainer>
          <WrappedContainer totalCount={offlineUsers} title="Who's away">
            <OfflineUsers setTotalCount={setOfflineUsers} />
          </WrappedContainer>
          <WrappedContainer title="Upcoming birthdays">
            <UpcomingBirthday />
          </WrappedContainer>
        </div>
      </div>
    </div>
  )
}
