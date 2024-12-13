import { fetchedBirthdays } from '@/lib/api-data/birthdays-data'
import { memo, useEffect, useState } from 'react'
import Loading from '../ui/loading'
import BirthdayBlock from './blocks/birthday-block'

function UpcomingBirthday() {
  const [loading, setLoading] = useState(true)
  const [birthdays, setBirthdays] = useState<Birthday[]>()

  useEffect(() => {
    setLoading(true)
    const response = fetchedBirthdays
    setTimeout(() => {
      setBirthdays(response)
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="flex w-full flex-col">
      {birthdays?.map((task, index) => <BirthdayBlock birthday={task} key={index} />)}
      {!birthdays && loading && (
        <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  )
}

export default memo(UpcomingBirthday)
