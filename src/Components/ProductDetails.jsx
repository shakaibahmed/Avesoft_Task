import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();


  const fetchData = async () => {
    const res = await axios.get(
      `https://aveosoft-react-assignment.herokuapp.com/products/${id}`
    );
   
    setData(res.data);
  };
 

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div className="container">
     {Object.keys(data).length===0 ? <h3 className="mt-5">Loading...</h3>  :<div className="row mt-5">
        <div className="col-md-6">
          <img src="" alt="Error Loading" />
        </div>

        <div className="col-md-6 " style={{ textAlign: "left" }}>
          <h3>Product Name : {data.name}</h3>
          <h2>Price : {data.price}</h2>
          <p>Product description : {data.description}</p>
        </div>
      </div>}
    </div>
  );
};

export default ProductDetails;
