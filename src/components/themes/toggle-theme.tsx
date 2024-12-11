import { useTheme } from '@/hooks/useTheme'
import { Moon, Sun } from 'lucide-react'

export function ToggleTheme() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-gray-200 p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}
