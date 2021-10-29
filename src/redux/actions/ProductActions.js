import { ActionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const addToCart = (product, quantity) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      product,
      quantity,
    },
  };
};
export const Increment = (Id) => {
  return {
    type: ActionTypes.INC,
    payload: Id,
  };
};
export const Decrement = (Id) => {
  return {
    type: ActionTypes.DEC,
    payload: Id,
  };
};
export const Remove = (Id) => {
  return {
    type: ActionTypes.REMOVE,
    payload: Id,
  };
};
