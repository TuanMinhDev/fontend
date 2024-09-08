import axios from "axios";

export const fetchProduct = () => {
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

export const fetchProductItem = (category) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/product/category/${category}`
      );
      dispatch({
        type: "GET_PRODUCT_ITEM",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchedProductId = (id) =>{
  return async(dispatch)=>{
    try{
      const response = await axios.get(`http://localhost:4000/api/product/products/${id}`);
      dispatch({
      type:"GET_PRODUCT_ID",
      payload: response.data,
    });
    } catch (error){
      console.log(error);
    }
  };
}