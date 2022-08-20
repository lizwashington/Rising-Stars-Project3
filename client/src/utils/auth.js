import { useState, createContext, Children, useContext } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(null)
    //sets user name
    const login = (user) => {
        setUser(user)
    }
    //sets user to empty field
    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}