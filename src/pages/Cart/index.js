import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css'; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/cart/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/cart/cart/${id}`);
      setCartItems(cartItems.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleUpdateQuantity = async (id, quantity) => {
    try {
      await axios.put(`http://localhost:4000/api/cart/cart`, { id, quantity });
      setCartItems(cartItems.map(item =>
        item._id === id ? { ...item, quantity } : item
      ));
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cart">
      <h1>Giỏ Hàng</h1>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item._id} className="cart-item">
              <img src={item.imageLink} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <Link to={`/product/${item._id}`} className="cart-item-name">{item.name}</Link>
                <p className="cart-item-price">{item.price}₫</p>
                <div className="cart-item-quantity">
                  <button onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => handleRemoveItem(item._id)} className="remove-item">Xóa</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p>Tổng tiền: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}₫</p>
            <button className="checkout-button">Thanh toán</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
