import React from "react";
import './Product-Card.css';
import { Link } from 'react-router-dom';

const ProductCard = ({productTitle, redirect, productImg, price,...props}) => {

    return(
       <>
        <Link className="product-card" to={redirect}>
          <div className="product-img">
            <img src={productImg} alt="image"/>
          </div>
          <div className="product-title">
            <p>{productTitle}</p>
          </div>
          <div className="price">
            $ {price}
          </div>
        </Link>
       </>
    );
}

export default ProductCard
