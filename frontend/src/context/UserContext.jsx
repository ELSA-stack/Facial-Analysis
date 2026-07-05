import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('face-analysis-user')
    return savedUser ? JSON.parse(savedUser) : { name: '', gender: '' }
  })

  useEffect(() => {
    localStorage.setItem('face-analysis-user', JSON.stringify(user))
  }, [user])

  const updateUserInfo = (info) => {
    setUser((prev) => ({ ...prev, ...info }))
  }

  return (
    <UserContext.Provider value={{ user, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
