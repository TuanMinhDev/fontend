import axios from "axios";

export const product = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/product/products"
        );
        dispatch({
          type: "GET_PRODUCT",
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };