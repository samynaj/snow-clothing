import {cartActionTypes} from './cart-types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemFromCart = (item) => ({
    type: cartActionTypes.CLEAR_ITEM,
    payload: item
})

export const removeItemFromCart = (item) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})
