import { applyMiddleware, createStore } from "redux";
import {thunk} from "redux-thunk"; // import redux-thunk

// Khởi tạo state ban đầu
const initialState = {
  dataProduct: [],
  dataCart: [],
};

// Reducer để xử lý các action
const productRedux = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, dataProduct: action.payload };
    case "GET_CART":
      return { ...state, dataCart: action.payload };
    case "ADD_TO_CART":
      return { ...state, dataCart: [...state.dataCart, action.payload] }; // Thêm sản phẩm mới vào giỏ hàng
    case "DELETE_FROM_CART":
      // Loại bỏ sản phẩm khỏi giỏ hàng dựa trên ID
      return {...state, dataCart: state.dataCart.filter((item) => item.id !== action.payload),};
    default:
      return state;
  }
};

// Tạo store với redux-thunk middleware
const store = createStore(productRedux, applyMiddleware(thunk));

export default store;
