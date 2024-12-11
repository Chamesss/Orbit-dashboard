import { ThemeContext } from '@/hooks/useTheme'
import React, { useEffect } from 'react'
import { useToggle } from '../hooks/useToggle'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, toggleTheme] = useToggle()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}
