import { createContext, useContext, useEffect, useState } from "react"

type AuthState = {
  isAuthenticated: boolean
  token: string | null
  login: (token: string) => void
  logout: () => void
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  login: () => null,
  logout: () => null,
}

const AuthContext = createContext<AuthState>(initialState)

type AuthProviderProps = {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(() => {
    // Check if token exists in localStorage during initialization
    return localStorage.getItem("auth-token")
  })

  const isAuthenticated = !!token

  const login = (newToken: string) => {
    localStorage.setItem("auth-token", newToken)
    setToken(newToken)
  }

  const logout = () => {
    localStorage.removeItem("auth-token")
    setToken(null)
  }

  // Optional: Add token validation logic here
  useEffect(() => {
    // You could add JWT validation logic here
    // If token is invalid, call logout()
  }, [token])

  const value = {
    isAuthenticated,
    token,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 