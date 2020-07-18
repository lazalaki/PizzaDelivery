import { SET_LOGGED_IN,SET_USER, SET_FOOD } from "./global-types"

export const setUserAction = (user, dispatch) => {
    dispatch({
        type: SET_USER,
        payload: {user: user}
    })
}

export const setLoggedInAction = (status, dispatch) => {
    dispatch({
        type: SET_LOGGED_IN,
        payload: { isLoggedIn: status}
    })
}


export const setFoodAction = (food, dispatch) => {
    dispatch({
        type: SET_FOOD,
        payload: { food: food }
    })
}