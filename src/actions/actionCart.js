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

export const addToCart = (productId,quantity,size) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:4000/api/cart/cart", {
        productId,quantity,size
      });
      dispatch({
        type: "ADD_TO_CART",
        payload: {productId,quantity,size}
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFromCart = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/cart/cart/${productId}`
      );

      dispatch({
        type: "DELETE_FROM_CART",
        payload: productId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
