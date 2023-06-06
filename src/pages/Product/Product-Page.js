import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import Footer from '../../components/Footer/Footer';
import Navbar from "../../components/Navbar/navbar";
import Alert from '@mui/material/Alert';
import Accordion from "../../components/Accordion/Accordion";
import './Product-Page.css';

const ProductPage = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [selectedSize, setSelectedSize] = useState(null);

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };



  const handleAddToCart = () => {
    if (
      !selectedSize &&
      (product.category === "men's clothing" || product.category === "women's clothing")
    ) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      addProduct(product, selectedSize);
      navigate("/cart");
    }
    
  };
  

  const renderSizeButtons = () => {

    const handleSizeClick = (size) => {
      setSelectedSize(size);
      setShowAlert(false);
      localStorage.setItem(`selectedSize_${product.id}`, size);
    };
    
    if (product.category === "men's clothing" || product.category === "women's clothing") {
      return (
        <>
        
        <div className="size-section">
          <p className="pd-size-title">Size: {selectedSize && <span className="size-subtitle mx-2">{selectedSize}</span>}</p>
          <div className="size-btns-section">
            {sizes.map((size, index) => (
            <button key={index} className={`size-btn ${selectedSize === size ? 'active-size' : ' '}`} 
              onClick={(event) => {
                event.stopPropagation();
                setSelectedSize(size);
                handleSizeClick(size);
              }} 
            >
              {size}
            </button>
            ))}
          </div>
        </div>
        </>
      );
    }
  };


  useEffect(() => { 
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-3 py-1 " >
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3 productpage-img">
              <img
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="col-md-6 col-md-6 pd-section-2">
              <h4 className="pd-category text-uppercase">{product.category}</h4>
              <h1 className="pd-title">{product.title}</h1>
              <div className="star-rating">
                <h5>{product.rating && product.rating.rate}{" "}<span><i className="fa fa-star"></i></span></h5>
              </div>
              <h3 className="pd-price my-2">${product.price}</h3>
                <div>
                  {renderSizeButtons()}
                </div>
                {showAlert && (
                  <Alert severity="error" >
                    Please select a size before adding to cart.
                  </Alert>
                )}

                <div className="product-information">
                   <hr className="pd-page-hr" />
                   <Accordion header="Product Details" content={product.description} />
                   <hr className="pd-page-hr" />
                   <Accordion header="Shipping & Returns" 
                           content={
                             <>
                              {/* <div> */}
                                <h6 style={{color: "#5C5A54",fontWeight: 600}}>Shipping</h6>
                                  <p>
                                  This item may not be shipped to American Samoa, Armed Forces Europe, Armed Forces Pacific, U.S. Virgin
                                  Islands, Hawaii, Federated States of Micronesia, Palau, Marshall Islands, Guam, Armed Forces Americas,
                                  Puerto Rico and El Paso, Texas.
                                  </p>
                                <hr />
                                <h6 style={{color: "#5C5A54",fontWeight: 600}}>Returns</h6>
                                  <p>
                                  Returns must be made within 30 days for refunds to process to the original form of payment.
                                  </p>
                              {/* </div> */}
                             </>
                            }
                  />
                  <hr className="pd-page-hr" />
                </div>

              <button
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };


  return (
    <>
      <Navbar />
      <div className="container product-page">
         <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
