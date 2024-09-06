import { useEffect, useState } from "react";
import "./style.css";
import { MenuUnfoldOutlined, SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useSelection from "antd/es/table/hooks/useSelection";

const Product = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const product = useSelection((state)=> state.dataProduct)

  useEffect(() => {
    // const fetchAllProducts = async () => {
    //   try {
    //     const response = await axios.get(
    //       "http://localhost:4000/api/product/products"
    //     );
    //     setData(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchAllProducts();
    dispatch(product());
  }, [dispatch]);

  const handleAllProduct = async () => {
    // try {
    //   const response = await axios.get(
    //     "http://localhost:4000/api/product/products"
    //   );
    //   setData(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleProductItem = async (category) => {
    // try {
    //   const response = await axios.get(
    //     `http://localhost:4000/api/product/category/${category}`
    //   );
    //   setData(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
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
            {/* {data.map((item) => (
              <Link to={`/product_details/${item._id}`} className="productLink">
                <div key={item.id} className="boxItem">
                  <img src={item.imageLink} alt="img" className="imgItem" />
                  <p className="itemName">{item.name}</p>
                  <div className="pricePlus">
                    <p className="itemPrice">Giá: {item.price}₫</p>
                    <button className="plusProduct">+</button>
                  </div>
                </div>
              </Link>
            ))} */}
            {product && product.map((item)=>{
              <div >{item.name}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
