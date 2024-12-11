import { useCallback, useState } from 'react'

export function useToggle(): [boolean, () => void] {
  const getSavedThemeMode = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (typeof savedTheme === 'string') {
        return savedTheme === 'dark'
      }
      return null
    }
    return false
  }

  const getSystemDefaultMode = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  }

  const getThemeState = () => {
    const savedState = getSavedThemeMode()
    if (savedState === null) {
      return getSystemDefaultMode()
    }
    return savedState
  }

  const [dark, setIsDark] = useState<boolean>(getThemeState())

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const newState = !prev
      localStorage.setItem('theme', newState ? 'dark' : 'light')
      return newState
    })
  }, [])

  return [dark, toggle]
}
