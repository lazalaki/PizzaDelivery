import { SET_USER, SET_LOGGED_IN } from "./global-types";

export const initialGlobalState = {
    user: null,
    isLoggedIn: false
}

export const globalReducer = (state = initialGlobalState, action) => {
    switch (action.type) {
        case SET_USER:
        case SET_LOGGED_IN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}