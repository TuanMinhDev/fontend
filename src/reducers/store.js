import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
  dataProduct: [],
  dataCart: [],
  productDetails: [],
};

const productRedux = (state = initialState, action) => {
  switch (action.type) {
    // Product
    case "GET_PRODUCT":
      return { ...state, dataProduct: action.payload };
    case "GET_PRODUCT_ITEM":
      return { ...state, dataProduct: action.payload };
    case "GET_PRODUCT_ID":
      return { ...state, productDetails: action.payload };
      
    // Cart
    case "GET_CART":
      return { ...state, dataCart: action.payload };

    case "ADD_TO_CART":
      const existingItemIndex = state.dataCart.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.dataCart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, dataCart: updatedCart };
      } else {
        return { ...state, dataCart: [...state.dataCart, action.payload] };
      }

    case "UPDATE_QUANTITY":
      return {
        ...state,
        dataCart: state.dataCart.map((item) =>
          item.productId === action.payload.productId && item.size === action.payload.size
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "DELETE_FROM_CART":
      return {
        ...state,
        dataCart: state.dataCart.filter(
          (item) =>
            item.productId !== action.payload.productId ||
            item.size !== action.payload.size
        ),
      };

    default:
      return state;
  }
};


const store = createStore(productRedux, applyMiddleware(thunk));

export default store;
