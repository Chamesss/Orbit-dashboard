import {
  monthlyOverviewData,
  weeklyOverviewData,
  yearlyOverviewData
} from '@/lib/api-data/overview-data'
import { Archive, Buliding, House, Profile2User } from 'iconsax-react'
import { memo, useEffect, useState } from 'react'
import Loading from '../ui/loading'
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
        default:
          setOverviewData(null)
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
    <div className="grid w-full grid-cols-1 gap-2 xs:grid-cols-2 md:grid-cols-4 lg:gap-4">
      <OverviewBlock
        Icon={Profile2User}
        bgColor="bg-coldOcean dark:bg-ocean/20"
        iconBgColor="bg-ocean"
        textColor="text-coldOcean stroke-ocean"
        title={'employees'}
        count={overviewData.employees}
        prevCount={overviewData.prevEmployees}
        duration={overviewData.duration}
        index={0}
      />
      <OverviewBlock
        Icon={Archive}
        bgColor="bg-coldWood dark:bg-wood/20"
        iconBgColor="bg-wood"
        textColor="text-coldWood stroke-wood"
        title={'on leave'}
        count={overviewData.onLeave}
        prevCount={overviewData.prevOnLeave}
        duration={overviewData.duration}
        index={1}
      />
      <OverviewBlock
        Icon={Buliding}
        bgColor="bg-coldForest dark:bg-forest/20"
        iconBgColor="bg-forest"
        textColor="text-coldForest stroke-forest"
        title={'at office'}
        count={overviewData.atOffice}
        prevCount={overviewData.prevAtOffice}
        duration={overviewData.duration}
        index={2}
      />
      <OverviewBlock
        Icon={House}
        bgColor="bg-coldGalaxy dark:bg-galaxy/20"
        iconBgColor="bg-galaxy"
        textColor="text-coldGalaxy stroke-galaxy"
        title={'remote'}
        count={overviewData.onRemote}
        prevCount={overviewData.prevOnRemote}
        duration={overviewData.duration}
        index={3}
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
