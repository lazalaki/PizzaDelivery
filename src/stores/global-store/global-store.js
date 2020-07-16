import React, { createContext, useReducer, useEffect } from "react";
import { globalReducer, initialGlobalState } from "./global-reducer";
import { setUserAction, setLoggedInAction } from "./global-actions";

export const GlobalStore = createContext({});

export const GlobalStoreProvider = ({children}) => {

    const [state, dispatch] = useReducer(globalReducer, initialGlobalState);

    useEffect(() => {
        console.log(1);
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user)
        if (user) {
            setUser(user)
        }
    }, [])

    const setUser = (user) => {
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user));
        setUserAction(user, dispatch)
        setLoggedInAction(true, dispatch)
    }

    const logout = () => {
        localStorage.clear();
        setUserAction(null);
        setLoggedInAction(false, dispatch);
    }

    return (
        <GlobalStore.Provider
        value={{
            state,
            setUser,
            logout
        }}>
            {children}
        </GlobalStore.Provider>
    )
}

