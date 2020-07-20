import { get, deleteApi, post, patch } from "../../httpServices";


export const getAllOrdersRequest = (userId) => get(`/users/${userId}/orders`)
export const removeOrderItemRequest = (userId, orderId, order_item_id) => deleteApi(`/users/${userId}/orders/${orderId}/order-item/${order_item_id}`)
export const currentOrderRequest = (userId) => get(`/users/${userId}/orders/last`)
export const addOrderItemRequest =  (userId, orderId, payload) =>  post(`/users/${userId}/orders/${orderId}/order-item`, payload);
export const complateOrderRequest = (userId, orderId, payload) => patch(`/users/${userId}/orders/${orderId}`, payload);
export const createNewOrderRequest = (userId) => post(`/users/${userId}/orders`, {});