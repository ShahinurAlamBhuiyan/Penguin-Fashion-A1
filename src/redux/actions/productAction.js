import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../constant/actionTypes"

export const addToBaskets = (payload) => {
    return {
        type: ADD_TO_BASKET, payload
    }
}

export const removeFromBasket = (payload) => {
    return {
        type: REMOVE_FROM_BASKET, payload
    }
}