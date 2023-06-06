import React from "react";
import './Main.css';
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="row banner-main">
     
        <div className="banner-content">

          <div className="b-content">
            <hr className="main-hr"/>
            <p className="get-best">Get the Best Products</p>
            <p className="our-store text-uppercase">from our store</p>
          </div>

          <div className="shop-now-btn">
            <Link to="/products" className="btn text-uppercase">shop now <i className="fa-solid fa-angle-right ml-2" style={{color: "#ffffff"}}></i></Link>
          </div>

        </div>

        <div className="banner-img">
          <img src="./assets/banner2.png" alt="website-banner"/>
        </div>

       </div>
      
    </>
  );
};

export default Main;
