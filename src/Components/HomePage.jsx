import CardCustom from "./CardCustom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage=()=> {
  const [state, setState] = useState([]);

  const fetchdata = async () => {
    const res = await axios.get(
      "https://aveosoft-react-assignment.herokuapp.com/products"
    );

    setState(res.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
  
        <div className="container-fluid">
          <div className="row mt-5">
            <div
              className="col-5"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <h4>Product Category</h4>
            </div>
            <div className="col-3">
              <select class="form-select" aria-label="Default select example">
                <option value="1" selected>
                  Laptops
                </option>
                <option value="2">Mobiles</option>
              </select>
            </div>
          </div>
          <div className="row mt-5" style={{justifyContent:"space-evenly"}}>
            {state.map((val) => {
              return (
                <CardCustom
                  key={val.id}
                  Name={val.name}
                  Model={val.model}
                  Price={val.price}
                  id={val.id}
                />
              );
            })}
          </div>
        </div>

  );
}

export default HomePage;