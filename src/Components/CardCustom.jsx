import React from "react";
import { Link } from "react-router-dom";
const CardCustom = (props) => {
 
  return (
    <>
    <div className="card mt-3" style={{ width: "18rem" }} >
    <Link to={`/product/${props.id}`} style={{textDecoration:"none"}} >
      <img src="" alt="Error Loading" className="card-img-top" />
      <div className="card-body" style={{color:"black"}}>
        <h5 className="card-title" >{props.Name}</h5>
        <p className="card-text">{props.Model}</p>
        <p className="card-text">{props.Price}</p>
      </div>
    </Link>
    </div>
    </>
  );
};

export default CardCustom;
