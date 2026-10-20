/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, type ReactNode } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  setIsLogged: (login: boolean) => void
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setIsLogged: () => {}
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, _setIsAuthenticated] = useState<boolean>(
            JSON.parse(
                    localStorage.getItem('USER_LOGGED') ?? 'false'
                )
            )

    const setIsLogged = (login: boolean) => {
        _setIsAuthenticated(login)
        if (!login) {
            localStorage.removeItem('USER_LOGGED');
            return;
        }
        localStorage.setItem('USER_LOGGED', 'true');
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsLogged
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
