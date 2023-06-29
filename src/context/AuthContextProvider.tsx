import { AuthContext, initialState } from "./AuthContext";
import { UserDetails } from "../types/user";
import {reducer}  from "../../store/reducer";
import { useReducer } from "react";



export const AuthContextProvider = ({ children }:{children : React.ReactNode }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}