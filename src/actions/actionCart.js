import axios from "axios";

export const GetCart = () => {
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


export const addToCart = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:4000/api/cart/cart", {
        product, 
      });

      
      dispatch({
        type: "ADD_TO_CART",
        payload: product, 
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
