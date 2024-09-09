import axios from "axios";

export const getCart = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/api/cart/cart");
      dispatch({
        type: "GET_CART",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (productId, quantity, size) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:4000/api/cart/cart", {
        productId,
        quantity,
        size,
      });
      console.log(response);
      dispatch({
        type: "ADD_TO_CART",
        payload: { productId, quantity, size },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFromCart = (productId, size) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/cart/cart/${productId}?size=${size}`
      );
      console.log(response);
      dispatch({
        type: "DELETE_FROM_CART",
        payload: { productId, size },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateQuantity = (productId, size, quantity) => {
  return async (dispatch) => {
    try {
      const response = await axios.put("http://localhost:4000/api/cart/cart", {
        productId,
        size,
        quantity,
      });
      console.log(response);
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { productId, size, quantity },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
