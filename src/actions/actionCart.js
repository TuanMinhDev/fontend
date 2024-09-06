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

// Action để thêm sản phẩm vào giỏ hàng
export const addToCart = (product) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:4000/api/cart/cart", {
        product, // Truyền dữ liệu sản phẩm để thêm vào giỏ hàng
      });

      // Dispatch hành động để cập nhật giỏ hàng sau khi thêm sản phẩm
      dispatch({
        type: "ADD_TO_CART",
        payload: product, // Sản phẩm vừa thêm vào giỏ hàng
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

      // Sau khi xóa thành công, dispatch action để cập nhật giỏ hàng
      dispatch({
        type: "DELETE_FROM_CART",
        payload: productId, // Truyền ID của sản phẩm đã bị xóa
      });
    } catch (error) {
      console.log(error);
    }
  };
};
