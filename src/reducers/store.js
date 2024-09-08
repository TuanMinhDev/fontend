import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
  dataProduct: [],
  dataCart: [],
  productDetails:[],
};

const productRedux = (state = initialState, action) => {
  switch (action.type) {
    //Product
    case "GET_PRODUCT":
      return { ...state, dataProduct: action.payload };
    case "GET_PRODUCT_ITEM":
      return { ...state, dataProduct: action.payload };
    case "GET_PRODUCT_ID":
      return { ...state, productDetails: action.payload };
    //Cart
    case "GET_CART":
      return { ...state, dataCart: action.payload };
    case "ADD_TO_CART":
      return { ...state, dataCart: [...state.dataCart, action.payload] };
    case "DELETE_FROM_CART":
      return {
        ...state,
        dataCart: state.dataCart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(productRedux, applyMiddleware(thunk));

export default store;
