import { cn } from '@/lib/utils'
import { TickCircle } from 'iconsax-react'
import { useState } from 'react'

interface CheckboxProps {
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export default function Checkbox({
  defaultChecked = false,
  onChange,
  disabled = false,
  className = ''
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked)

  const handleToggle = () => {
    if (disabled) return

    const newCheckedState = !isChecked
    setIsChecked(newCheckedState)

    if (onChange) {
      onChange(newCheckedState)
    }
  }

  return (
    <label
      className={cn(
        `inline-flex h-fit w-fit cursor-pointer items-center ${disabled ? 'cursor-not-allowed opacity-50' : ''}`,
        className
      )}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="peer sr-only"
        disabled={disabled}
      />
      {isChecked ? (
        <TickCircle variant="Bulk" className="h-6 w-6 animate-scale-once text-ocean" />
      ) : (
        <div
          className={`h-6 w-6 rounded-full bg-gray-50 transition-all duration-300 dark:bg-neutral-600 ${isChecked ? 'scale-100 transform' : 'scale transform'}`}
        />
      )}
    </label>
  )
}
