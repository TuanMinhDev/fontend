import { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getCart, updateQuantity } from "../../actions/actionCart";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataCart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleIncreaseQuantity = (productId, size, quantity) => {
    dispatch(updateQuantity(productId, size, quantity + 1));
  };

  const handleDecreaseQuantity = (productId, size, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity(productId, size, quantity - 1));
    }
  };

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => (
          <div className="cartItem" key={item.productId}>
            <img
              className="imgCart"
              src={item.productId.imageLink}
              alt={item.name}
            />
            <div className="contentCart">
              <p className="nameCart">{item.productId.name}</p>
              <div className="parameter">
                <p className="priceCart">Giá: {item.productId.price}đ</p>
                <div className="sizeCart">Size: {item.size}</div>
                <div className="quantityCart">
                  <button
                    className="buttonQuantity"
                    onClick={() =>
                      handleIncreaseQuantity(
                        item.productId,
                        item.size,
                        item.quantity
                      )
                    }
                  >
                    +
                  </button>
                  <div className="quantity">{item.quantity}</div>
                  <button
                    className="buttonQuantity"
                    onClick={() =>
                      handleDecreaseQuantity(
                        item.productId,
                        item.size,
                        item.quantity
                      )
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>Giỏ hàng trống</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
