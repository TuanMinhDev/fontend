import { useParams, Link } from "react-router-dom";  // Thêm Link từ react-router-dom
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const params = useParams();
  const [productData, setProductData] = useState(null);  // Trạng thái cho chi tiết sản phẩm
  const [relatedProducts, setRelatedProducts] = useState([]);  // Trạng thái cho danh sách sản phẩm
  const [count, setCount] = useState(1);
  const [isAdding, setIsAdding] = useState(false); // Trạng thái cho quá trình thêm vào giỏ hàng

  useEffect(() => {
    const handleProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/product/products/${params.id}`
        );
        setProductData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleProductDetails();
  }, [params.id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      const categories = ["shirt", "pants", "accessory", "shoes"];
      try {
        const allData = [];
        for (const category of categories) {
          const response = await axios.get(
            `http://localhost:4000/api/product/category/${category}`
          );
          const fetchedData = response.data.reverse().slice(0, 5);
          allData.push(...fetchedData);
        }
        setRelatedProducts(allData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRelatedProducts();
  }, []);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const handlePlus = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      const response = await axios.post("http://localhost:4000/api/cart/cart", {
        productId: productData._id,
        quantity: count,
      });
      alert("Sản phẩm đã được thêm vào giỏ hàng!");
      console.log(response);
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
      alert("Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng. Vui lòng thử lại!");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="productDetails">
      <div className="boxproductDetails">
        <img src={productData.imageLink} alt={productData.name} className="product-image" />
        <div className="content">
          <h1>{productData.name}</h1>
          <p className="category">Thể loại: {productData.category}</p>
          <p className="price">{productData.price}₫</p>
          <div className="sizebox">
            <label className="sizeFontSize">Size</label>
            <div className="sizeContent">
              <div className="boxSizeContent">M</div>
              <div className="boxSizeContent">L</div>
              <div className="boxSizeContent">XL</div>
              <div className="boxSizeContent">XXL</div>
            </div>
          </div>
          <div className="soLuong">
            <label className="soLuongFontSize">Số lượng</label>
            <div className="boxCount">
              <button className="boxButtonCount" onClick={handleMinus}>-</button>
              <div className="count">{count}</div>
              <button className="boxButtonCount" onClick={handlePlus}>+</button>
            </div>
          </div>
          <div className="buttonGroup">
            <button
              className="buttonPay"
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? "Đang thêm..." : "Thêm vào giỏ hàng"}
            </button>
            <button className="buttonPay">Mua ngay</button>
          </div>
        </div>
      </div>
      <div className="note">
        <h4>Miễn phí giao hàng toàn quốc</h4>
        <p>Ship Toàn Quốc đồng giá 25k. Freeship với đơn hàng từ 4 sản phẩm</p>
        <h4>Đổi trả dễ dàng</h4>
        <p>Đổi hàng linh hoạt trong 7 ngày. * Không áp dụng chính sách đổi trả với sản phẩm sale.</p>
        <h4>Mã giảm giá</h4>
        <p>Nhập G5 giảm giá 5% cho đơn hàng đầu tiên</p>
      </div>
      <div className="product-new">
        <h2 className="letter">Sản phẩm bạn quan tâm</h2>
        <div className="item">
          {relatedProducts
            .filter((item) => item.category === productData.category)
            .map((item) => (
              <Link to={`/product_details/${item._id}`} key={item._id} className="productLink"> 
                <div className="boxItem">
                  <img src={item.imageLink} alt={item.name} className="imgItem" />
                  <p className="itemName">{item.name}</p>
                  <p className="itemPrice">Giá: {item.price}₫</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
