import {
  monthlyOverviewData,
  weeklyOverviewData,
  yearlyOverviewData
} from '@/lib/api-data/overview-data'
import { Archive, Buliding, House, Profile2User } from 'iconsax-react'
import { memo, useEffect, useState } from 'react'
import Loading from '../assets/loading'
import OverviewBlock from './blocks/overview-block'

function Overview({ view }: { view: string }) {
  const [loading, setLoading] = useState<boolean>(true)
  const [overviewData, setOverviewData] = useState<null | OverviewData>(null)

  // Simulate API call
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      switch (view) {
        case 'week':
          setOverviewData(weeklyOverviewData)
          break
        case 'month':
          setOverviewData(monthlyOverviewData)
          break
        case 'year':
          setOverviewData(yearlyOverviewData)
          break
      }
      setLoading(false)
    }, 1000)
  }, [view])

  if (loading && !overviewData)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loading />
      </div>
    )

  if (!overviewData) return null

  return (
    <div className="grid w-full grid-cols-4 gap-4">
      <OverviewBlock
        Icon={Profile2User}
        bgColor="bg-coldOcean"
        iconBgColor="bg-ocean"
        textColor="text-coldOcean"
        title={'employees'}
        count={overviewData.employees}
        prevCount={overviewData.prevEmployees}
        duration={overviewData.duration}
      />
      <OverviewBlock
        Icon={Archive}
        bgColor="bg-coldWood"
        iconBgColor="bg-wood"
        textColor="text-coldWood"
        title={'on leave'}
        count={overviewData.onLeave}
        prevCount={overviewData.prevOnLeave}
        duration={overviewData.duration}
      />
      <OverviewBlock
        Icon={Buliding}
        bgColor="bg-coldForest"
        iconBgColor="bg-forest"
        textColor="text-coldForest"
        title={'at office'}
        count={overviewData.atOffice}
        prevCount={overviewData.prevAtOffice}
        duration={overviewData.duration}
      />
      <OverviewBlock
        Icon={House}
        bgColor="bg-coldGalaxy"
        iconBgColor="bg-galaxy"
        textColor="text-coldGalaxy"
        title={'remote'}
        count={overviewData.onRemote}
        prevCount={overviewData.prevOnRemote}
        duration={overviewData.duration}
      />
      {loading && (
        <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center backdrop-blur-sm">
          <Loading />
        </div>
      )}
    </div>
  )
}

export default memo(Overview)
