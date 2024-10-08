import "./style.css";
import { useEffect, useState } from "react";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import axios from "axios";
const AdminProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({
    name: "",
    price: "",
    imageLink: "",
    category: "",
  });
  const handleOk = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/product/products",
        {
          name: info.name,
          price: info.price,
          imageLink: info.imageLink,
          category: info.category,
        }
      );
      setIsModalOpen(false);
      setInfo((prevInfo) => ({
        ...prevInfo,
        name: "",
        price: "",
        imageLink: "",
        category: "",
      }));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const categories = ["shirt", "pants", "accessory", "shoes"];
      const fetchedData = [];
      try {
        for (const category of categories) {
          const response = await axios.get(
            `http://localhost:4000/api/product/category/${category}`
          );
          fetchedData.push(...response.data);
        }
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handle = (category) => { setInfo({ ...info, category: category }) }
  return (
    <div>
      <div className="row">
        <div className="search">
          <input className="text-search" />
          <SearchOutlined className="icon-search" />
        </div>
        <Button className="plus row" onClick={showModal}>
          <PlusOutlined className="icon-plus" />
        </Button>
        <Modal
          title="Thêm sản phẩm"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className="form-container"
        >
          <div className="form-group">
            <label>Tên Sản Phẩm</label>
            <input
              className="input"
              type="name"
              value={info.name}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Link Img</label>
            <input
              className="input"
              type="imageLink"
              value={info.imageLink}
              onChange={(e) => setInfo({ ...info, imageLink: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Thể loại</label>
            <div onClick={()=> handle('shirt')}>shirt</div>
            <div onClick={()=> handle('pants')}>pants</div>
            <div onClick={()=> handle('accessory')}>accessory</div>
            <div onClick={()=> handle('shoes')}>shoes</div>
            {/* <input
              className="input"
              type="category"
              value={info.category}
              onChange={(e) => setInfo({ ...info, category: e.target.value })}
            /> */}
          </div>
          <div className="form-group">
            <label>Giá</label>
            <input
              className="input"
              value={info.price}
              type="price"
              onChange={(e) => setInfo({ ...info, price: e.target.value })}
            />
          </div>
        </Modal>
      </div>
      <div>
        <div>
          <h2>ÁO</h2>
          {data
            .filter((item) => item.category === "shirt")
            .map((item) => (
              <div key={item.id} className="product-home">
                <img
                  src={item.imageLink}
                  alt="img"
                  className="product-home-img"
                />
                <p className="product-home-name">{item.name}</p>
                <p className="product-home-price">Giá: {item.price}</p>
              </div>
            ))}
        </div>
        <div>
          <h2>Quần</h2>
          {data
            .filter((item) => item.category === "pants")
            .map((item) => (
              <div key={item.id} className="product-home">
                <img
                  src={item.imageLink}
                  alt="img"
                  className="product-home-img"
                />
                <p className="product-home-name">{item.name}</p>
                <p className="product-home-price">Giá: {item.price}</p>
              </div>
            ))}
        </div>
        <div>
          <h2>Phụ kiện</h2>
          {data
            .filter((item) => item.category === "accessory")
            .map((item) => (
              <div key={item.id} className="product-home">
                <img
                  src={item.imageLink}
                  alt="img"
                  className="product-home-img"
                />
                <p className="product-home-name">{item.name}</p>
                <p className="product-home-price">Giá: {item.price}</p>
              </div>
            ))}
        </div>
        <div>
          <h2>Giày</h2>
          {data
            .filter((item) => item.category === "shoes")
            .map((item) => (
              <div key={item.id} className="product-home">
                <img
                  src={item.imageLink}
                  alt="img"
                  className="product-home-img"
                />
                <p className="product-home-name">{item.name}</p>
                <p className="product-home-price">Giá: {item.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default AdminProduct;
