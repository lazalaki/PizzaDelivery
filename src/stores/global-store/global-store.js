import React, { createContext, useReducer, useEffect } from "react";
import { globalReducer, initialGlobalState } from "./global-reducer";
import { setUserAction, setLoggedInAction, setFoodAction } from "./global-actions";
import { getAllFood } from "../../services/api/food/food";

export const GlobalStore = createContext({});

export const GlobalStoreProvider = ({children}) => {

    const [state, dispatch] = useReducer(globalReducer, initialGlobalState);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setUser(user)
        }
        getFood()
    }, [])

    // exposed

    const setUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUserAction(user, dispatch)
        setLoggedInAction(true, dispatch)
    }

    const logout = () => {
        localStorage.clear();
        setUserAction(null, dispatch);
        setLoggedInAction(false, dispatch);
    }

    // private

    const setFood = (food) => {
        setFoodAction(food, dispatch)
    }

    const getFood = async () => {
        try {
            const {data} = await getAllFood()
            setFood(data.foods)
        } catch(error) {
            console.log(error)
        }
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

