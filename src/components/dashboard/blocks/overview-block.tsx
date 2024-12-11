import { cn } from '@/lib/utils'
import type { Icon } from 'iconsax-react'

type Props = {
  Icon: Icon
  title: string
  iconBgColor: string
  textColor: string
  bgColor: string
  count: number
  prevCount: number
  duration: string
}

export default function OverviewBlock({
  Icon,
  iconBgColor,
  bgColor,
  textColor,
  title,
  count,
  prevCount,
  duration
}: Props) {
  return (
    <div
      className={cn('col-span-1 flex flex-col items-start justify-between rounded-lg p-6', bgColor)}
    >
      <div className={cn('my-2 rounded-lg p-2.5', iconBgColor)}>
        <Icon variant="Bulk" size="26" className={cn(textColor)} />
      </div>
      <div className="mt-2 flex flex-col gap-1">
        <div className="flex flex-row items-baseline gap-1.5">
          <p className="text-xl font-semibold">{count}</p>
          <p className="text-base font-medium">{title}</p>
        </div>
        <p className="text-sm text-gray-500">
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
    </div>
  )
}
