import { cn } from '@/lib/utils'
import type { Icon } from 'iconsax-react'
import { motion } from 'motion/react'
import { memo } from 'react'
import { TrendChart } from './trend-chart'

type Props = {
  Icon: Icon
  title: string
  iconBgColor: string
  textColor: string
  bgColor: string
  count: number
  prevCount: number
  duration: string
  index: number
}

function OverviewBlock({
  Icon,
  iconBgColor,
  bgColor,
  textColor,
  title,
  count,
  prevCount,
  duration,
  index
}: Props) {
  return (
    <motion.div
      key={duration}
      initial={{
        opacity: 0,
        y: 15
      }}
      transition={{ delay: index * 0.1 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('col-span-1 flex flex-col items-start justify-between rounded-lg p-6', bgColor)}
    >
      <div className="flex w-full flex-row items-center justify-between">
        <div className={cn('my-2 rounded-lg p-2.5', iconBgColor)}>
          <Icon variant="Bulk" size="26" className={cn(textColor)} />
        </div>
        <div className="flex items-center">
          <TrendChart count={count} prevCount={prevCount} color={textColor} />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-1">
        <div className="flex flex-row flex-nowrap items-baseline gap-1.5 md:flex-wrap">
          <p className="text-xl font-semibold">{count}</p>
          <p className="text-base font-medium">{title}</p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">
            {count > prevCount
              ? `+${count - prevCount}`
              : count < prevCount
                ? `-${prevCount - count}`
                : '+0'}{' '}
          </span>
          last {duration}
        </p>
      </div>
    </motion.div>
  )
}

export default memo(OverviewBlock)
