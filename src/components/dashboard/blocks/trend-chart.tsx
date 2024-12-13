import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

type TrendChartProps = {
  count: number
  prevCount: number
  color: string
}

type TrendLineProps = {
  direction: 'up' | 'down' | 'stable'
  color: string
}

export function TrendChart({ count, prevCount, color }: TrendChartProps) {
  const trend = count - prevCount
  const direction = trend > 0 ? 'up' : trend < 0 ? 'down' : 'stable'

  return (
    <div className="relative h-[24px] w-[60px]">
      <svg width="60" height="24" viewBox="0 0 24 18" className="overflow-visible">
        <g>
          <TrendLine direction={direction} color={color} />
          <TrendArrow direction={direction} color={color} />
        </g>
      </svg>
    </div>
  )
}

export function TrendLine({ direction, color }: TrendLineProps) {
  const paths = {
    up: 'M2,14 C6,14 8,4 18,4',
    down: 'M2,4 C6,4 8,14 18,14',
    stable: 'M2,9 L18,9'
  }

  return (
    <motion.path
      d={paths[direction]}
      stroke={color}
      className={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut'
      }}
    />
  )
}

export function TrendArrow({ direction, color }: TrendLineProps) {
  const getArrowPath = (direction: 'up' | 'down' | 'stable') => {
    switch (direction) {
      case 'up':
        return 'M18,4 L22,2 L22,6 Z'
      case 'down':
        return 'M18,14 L22,16 L22,12 Z'
      case 'stable':
        return 'M18,9 L22,7 L22,11 Z'
      default:
        return ''
    }
  }

  return (
    <motion.path
      d={getArrowPath(direction)}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('!rotate-[180deg]', color)}
      fill="none"
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.4,
        ease: 'easeOut'
      }}
    />
  )
}
