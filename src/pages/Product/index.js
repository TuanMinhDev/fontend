import { useEffect, useState } from "react";
import "./style.css";
import { MenuUnfoldOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, fetchProductItem } from "../../actions/actionProduct";
import { addToCart } from "../../actions/actionCart";
import { Modal } from "antd";

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.dataProduct);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleAllProduct = () => {
    dispatch(fetchProduct());
  };

  const handleProductItem = (category) => {
    dispatch(fetchProductItem(category));
  };

  const [size, setSize] = useState(null); // Lưu trạng thái size đã chọn
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Lưu trạng thái sản phẩm đã chọn

  const showModal = (item) => {
    setSelectedProduct(item); // Lưu sản phẩm được chọn để thêm vào giỏ hàng
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (selectedProduct && size) {
      dispatch(addToCart(selectedProduct._id, 1, size)); // Truyền sản phẩm, số lượng và size
      setIsModalOpen(false);
      setSize(null); // Đặt lại size sau khi thêm vào giỏ hàng
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSize(null); // Đặt lại size khi đóng modal
  };

  const handleSize = (selectedSize) => {
    setSize(selectedSize); 
  };

  return (
    <div className="product">
      <div className="navigationProduct">
        <button className="buttonProduct" onClick={handleAllProduct}>
          All Product
        </button>
        <button
          className="buttonProduct"
          onClick={() => handleProductItem("shirt")}
        >
          Shirt
        </button>
        <button
          className="buttonProduct"
          onClick={() => handleProductItem("pants")}
        >
          Pants
        </button>
        <button
          className="buttonProduct"
          onClick={() => handleProductItem("accessory")}
        >
          Accessory
        </button>
        <button
          className="buttonProduct"
          onClick={() => handleProductItem("shoes")}
        >
          Shoes
        </button>
      </div>
      <div className="content">
        <div className="searchArrange">
          <div className="searchProduct">
            <input className="inputSearch" />
            <SearchOutlined className="iconSearch" />
          </div>
          <div className="arrangeProduct">
            <MenuUnfoldOutlined className="menu" />
          </div>
        </div>
        <div className="product-new">
          <div className="item">
            {product.map((item) => {
              return (
                <div key={item._id}>
                  <Link
                    to={`/product_details/${item._id}`}
                    className="productLink"
                  >
                    <div className="boxItem">
                      <img src={item.imageLink} alt="img" className="imgItem" />
                      <p className="itemName">{item.name}</p>
                      <p className="itemPrice">Giá: {item.price}₫</p>
                    </div>
                  </Link>
                  <button className="plusCart" onClick={() => showModal(item)}>
                    +
                  </button>
                  <Modal
                    title="Chọn kích cỡ"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Thêm vào giỏ hàng"
                    cancelText="Hủy"
                  >
                    <div className="sizebox">
                      <label className="sizeFontSize">Size</label>
                      <div className="sizeContent">
                        {["M", "L", "XL", "XXL"].map((s) => (
                          <div
                            key={s}
                            className={`boxSizeContent ${
                              size === s ? "selected" : ""
                            }`}
                            onClick={() => handleSize(s)}
                          >
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Modal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
