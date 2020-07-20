import React, { createContext, useReducer, useEffect } from "react";
import { globalReducer, initialGlobalState } from "./global-reducer";
import { setUserAction, setLoggedInAction, setFoodAction, setOrdersAction, setCurrencyAction, setCurrentOrderAction, setToastAction } from "./global-actions";
import { getAllFood } from "../../services/api/food/food-service";
import { getAllOrdersRequest, currentOrderRequest, removeOrderItemRequest, addOrderItemRequest, createNewOrderRequest } from '../../services/api/orders/orders-service'
import { CURRENCY_EUR, CURRENCY_DOLLAR } from "./global-types";

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

    useEffect(() => {
        if(state.user && state.user.id) {
            getOrders();
            getCurrentOrder()
        }
    }, [state.user])

    // EXPOSED

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

    const setEurAsCurrency = () => {
        setCurrencyAction(CURRENCY_EUR, dispatch);
    }

    const setDollarAsCurrency = () => {
        setCurrencyAction(CURRENCY_DOLLAR, dispatch);
    }

    const removeItemFromCart = async (orderItemId) => {
         try {
            await removeOrderItemRequest(state.user.id, state.currentOrder.id, orderItemId)
            getCurrentOrder();
            showSuccess('You have removed order item from cart')
         } catch(error) {
            showError(error.message)
         }
    } 

    const addOrderItemToCart = async (orderItemId) => {
        try {
            await addOrderItemRequest(state.user.id, state.currentOrder.id, {foodId: orderItemId})
            getCurrentOrder();
            showSuccess('You have added item to cart')
         } catch(error) {
            showError(error.message)
         }
    }

    const showToast = async (toast) => {
        setToastAction(toast, dispatch);
    }

    const showError = async (message) => {
        showToast({
            type: 'error',
            message: message
        })
    }

    const showSuccess = async (message) => {
        showToast({
            type: 'success',
            message: message
        })
    }

    const clearToast = async () => {
        setToastAction(null, dispatch);
    }

    // PRIVATE

    const setFood = (food) => {
        setFoodAction(food, dispatch)
    }

    const getFood = async () => {
        try {
            const {data} = await getAllFood()
            setFood(data.foods)
        } catch(error) {
            showError(error.message)
        }
    }


    const setOrders = (orders) => {
        setOrdersAction(orders, dispatch)
    }

    const getOrders = async () => {
        try {
            const {data} = await getAllOrdersRequest(state.user.id)
            setOrders(data.orders)
        } catch(error) {
            showError(error.message)
        }
    }

    const setCurrentOrder = (currentOrder) => {
        setCurrentOrderAction(currentOrder, dispatch)
    }
    
    const getCurrentOrder = async () => {
        try {
            const { data } = await currentOrderRequest(state.user.id)
            if (!data.order) {
                await createNewOrderRequest(state.user.id);
            } else {
                setCurrentOrder(data.order)
            }
        } catch(error) {
            showError(error.message)
        }
    }


    return (
        <GlobalStore.Provider
        value={{
            state,
            setUser,
            logout,
            setEurAsCurrency,
            setDollarAsCurrency,
            removeItemFromCart,
            addOrderItemToCart,
            showToast,
            showError,
            showSuccess,
            clearToast,
            getCurrentOrder,
            getOrders
        }}>
            {children}
        </GlobalStore.Provider>
    )
}

