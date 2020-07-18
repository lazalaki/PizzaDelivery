import { SET_USER, SET_LOGGED_IN, SET_FOOD } from "./global-types";

export const initialGlobalState = {
    user: null,
    isLoggedIn: false,
    food: []
}

export const globalReducer = (state = initialGlobalState, action) => {
    switch (action.type) {
        case SET_USER:
        case SET_LOGGED_IN:
        case SET_FOOD:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}