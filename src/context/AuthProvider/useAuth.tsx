import { useContext } from "react"
import { AuthContext } from "."

export const UseAuth = () => {
    const context = useContext(AuthContext)
    return context;
}