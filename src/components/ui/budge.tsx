import { colors } from '@/lib/colors'
import { memo } from 'react'

type Props = {
  text: string
  colorProps?: string
  className?: string
}

function Budge({ text, colorProps = '', className = '' }: Props) {
  if (colorProps) {
    return (
      <p className={`w-fit rounded-full px-2 py-1 text-sm capitalize ${colorProps} ${className}`}>
        {text}
      </p>
    )
  }

  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <p
      className={`w-fit rounded-full px-2 py-1 text-sm capitalize ${randomColor.bg} ${randomColor.name} ${className}`}
    >
      {text}
    </p>
  )
}

export default memo(Budge)
