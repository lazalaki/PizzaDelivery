import { SET_USER, SET_LOGGED_IN, SET_FOOD, SET_ORDERS, CURRENCY_DOLLAR, SET_CURRENCY, CURRENCY_EUR, SET_CURRENT_ORDER, SET_TOAST } from "./global-types";

export const initialGlobalState = {
    user: null,
    isLoggedIn: false,
    food: [],
    orders: [],
    currency: CURRENCY_DOLLAR,
    dollarRate: 1.14,
    currentOrder: null,
    toast: null
}

export const globalReducer = (state = initialGlobalState, action) => {
    switch (action.type) {
        case SET_USER:
        case SET_LOGGED_IN:
        case SET_FOOD:
        case SET_ORDERS:
        case SET_CURRENCY:
        case SET_CURRENT_ORDER:
        case SET_TOAST:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}