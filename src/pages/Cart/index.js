import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handle = async () => {
      try {
        
        const response = await axios.get("http://localhost:4000/api/cart/cart");
        const cartItems = response.data;

        // Lấy dữ liệu chi tiết từng sản phẩm từ productId
        const productRequests = cartItems.map((item) =>
          axios.get(`http://localhost:4000/api/product/products/${item.productId}`)
        );
        
        // Chờ tất cả các request hoàn thành
        const productResponses = await Promise.all(productRequests);

        // Kết hợp dữ liệu cart và product
        const productsData = productResponses.map((res) => res.data);
        setData(productsData);
      } catch (error) {
        console.log(error);
      }
    };

    handle();
  }, []);  

  return (
    <div>
      <div>Giỏ hàng</div>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.productId}>
            <p>{item.name}</p>
            <p>Giá: {item.price}</p>
          </div>
        ))
      ) : (
        <p>Giỏ hàng trống</p>
      )}
    </div>
  );
};

export default Cart;
