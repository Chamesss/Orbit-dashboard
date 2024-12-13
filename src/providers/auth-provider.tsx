import { AuthContext } from '@/hooks/useAuth'
import { fetchedUser } from '@/lib/api-data/user-data'
import React, { useEffect, useState } from 'react'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    setLoading(true)
    const response = fetchedUser
    setTimeout(() => {
      setUser(response)
      setLoading(false)
    }, 400)
  }, [])

  return <AuthContext.Provider value={{ loading, user }}>{children}</AuthContext.Provider>
}
