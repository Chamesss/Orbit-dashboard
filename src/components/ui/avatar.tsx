import { colors } from '@/lib/colors'
import { cn } from '@/lib/utils'
import { memo } from 'react'

type Props = {
  src: string
  alt: string
  firstname: string
  lastname: string
  defaultColor?: boolean
}

function Avatar({ src, alt, firstname, lastname, defaultColor = false }: Props) {
  // display image and add a fallback image if the image is not available
  if (src) {
    return <img src={src} alt={alt} className="h-7 w-7 rounded-full object-cover md:h-10 md:w-10" />
  }

  let color

  if (defaultColor) {
    color = {
      name: 'text-ocean',
      bg: 'bg-coldOcean dark:bg-ocean/20'
    }
  } else {
    color = colors[Math.floor(Math.random() * colors.length)]
  }

  // display the first letter of the name if the image is not available
  return (
    <div
      className={cn(
        'flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium md:h-10 md:w-10 md:text-sm',
        color.name,
        color.bg
      )}
    >
      {firstname.charAt(0)}
      {lastname.charAt(0)}
    </div>
  )
}

export default memo(Avatar)
