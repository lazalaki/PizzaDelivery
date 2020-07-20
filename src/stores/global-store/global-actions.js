import { SET_LOGGED_IN,SET_USER, SET_FOOD, SET_ORDERS, SET_CURRENCY, SET_CURRENT_ORDER, SET_TOAST } from "./global-types"

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

export const setOrdersAction = (orders, dispatch) => {
    dispatch({
        type: SET_ORDERS,
        payload: { orders: orders }
    })  
}

export const setCurrencyAction = (currency, dispatch) => {
    dispatch({
        type: SET_CURRENCY,
        payload: { currency }
    })
}


export const setCurrentOrderAction = (currentOrder, dispatch) => {
    dispatch({
        type: SET_CURRENT_ORDER,
        payload: { currentOrder }
    })
}

export const setToastAction = (toast, dispatch) => {
    dispatch({
        type: SET_TOAST,
        payload: {toast}
    })
}
    
