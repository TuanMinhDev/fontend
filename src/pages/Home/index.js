import axios from "axios";
import "./style.css";
import { useState, useEffect } from "react";

const Home = () => {
  const img = [
    "https://noithattugia.com/wp-content/uploads/2023/02/thiet-ke-shop-quan-ao-nam-hien-dai-1.jpg",
    "https://pendecor.vn/uploads/files/2023/06/06/-hiet-ke-shop-quan-ao-unisex-1.jpg",
    "https://thietkenoithatatz.com/wp-content/uploads/2022/10/thiet-ke-shop-thoi-trang-cong-so-6.jpg",
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const [dataNew, setDataNew] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 3000);

    return () => clearTimeout(interval);
  }, [slideIndex, img.length]);

  useEffect(() => {
    const fetchDataNew = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/product/products"
        );
        let arrDataNew = response.data.reverse().slice(0, 8);
        setDataNew(arrDataNew);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataNew();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const categories = ["shirt", "pants", "accessory", "shoes"];
      try {
        const allData = [];
        for (const category of categories) {
          const response = await axios.get(
            `http://localhost:4000/api/product/category/${category}`
          );
          const fetchedData = response.data.slice(0, 5);
          allData.push(...fetchedData);
        }
        setData(allData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="content">
        <div className="slider">
          <img
            src={img[slideIndex]}
            alt={`Slide ${slideIndex}`}
            className="imgSlider"
          />
        </div>
      </div>
      <div className="product-new">
        <h2 className="letter">Sản Phẩm Mới</h2>
        <div className="item">
          {dataNew.map((item) => (
            <div key={item.id} className="boxItem">
              <img src={item.imageLink} alt={item.name} className="imgItem" />
              <p className="itemName">{item.name}</p>
              <p className="itemPrice">Giá: {item.price}₫</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="product-new">
          <h2 className="letter">Áo</h2>
          <div className="item">
            {data
              .filter((item) => item.category === "shirt")
              .map((item) => (
                <div key={item.id} className="boxItem">
                  <img src={item.imageLink} alt="img" className="imgItem" />
                  <p className="itemName">{item.name}</p>
                  <p className="itemPrice">Giá: {item.price}₫</p>
                </div>
              ))}
          </div>
        </div>
        <div className="product-new">
          <h2 className="letter">Quần</h2>
          <div className="item">
            {data
              .filter((item) => item.category === "pants")
              .map((item) => (
                <div key={item.id} className="boxItem">
                  <img src={item.imageLink} alt="img" className="imgItem" />
                  <p className="itemName">{item.name}</p>
                  <p className="itemPrice">Giá: {item.price}₫</p>
                </div>
              ))}
          </div>
        </div>
        <div className="product-new">
          <h2 className="letter">Phụ kiện</h2>
          <div className="item">
            {data
              .filter((item) => item.category === "accessory")
              .map((item) => (
                <div key={item.id} className="boxItem">
                  <img src={item.imageLink} alt="img" className="imgItem" />
                  <p className="itemName">{item.name}</p>
                  <p className="itemPrice">Giá: {item.price}₫</p>
                </div>
              ))}
          </div>
        </div>
        <div className="product-new">
          <h2 className="letter">Giày</h2>
          <div className="item">
            {data
              .filter((item) => item.category === "shoes")
              .map((item) => (
                <div key={item.id} className="boxItem">
                  <img src={item.imageLink} alt="img" className="imgItem" />
                  <p className="itemName">{item.name}</p>
                  <p className="itemPrice">Giá: {item.price}₫</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
