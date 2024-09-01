import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const handleProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/product/products/${params.id}`
        );
        setData(response.data); 
      } catch (error) {
        console.log(error);
      }
    };

    handleProductDetails();
  }, [params.id]); 

  if (!data) {
    
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.imageLink} alt={data.name} className="product-image" />
      <p>Giá: {data.price}₫</p>
      <p>Mô tả: {data.description}</p>
    </div>
  );
};

export default ProductDetails;
