import React,{ useEffect } from "react";
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch} from "react-redux";
import { addCart, delCart } from "../../redux/action";
import { Link } from "react-router-dom";
import './Cart.css';

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  const getSelectedSize = (productId, category) => {
    if (category === "men's clothing" || category === "women's clothing") {
      return localStorage.getItem(`selectedSize_${productId}`);
    } else {
      return null;
    }
  };

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn continue-btn mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 7.5;
    let delivery = 8.0;
    let discountPercent = 10;
    let totalItems = 0;

    state.map((item) => {
      let discountedPrice = item.price * (1 - discountPercent / 100);
      return (subtotal += discountedPrice * item.qty);
    });
    

    let totalAmount = (subtotal + shipping + delivery);

    state.map((item) => {
      return (totalItems += item.qty);
    });


    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-body">
                    
                  {state.map((item) => {

                     let itemsPrice = item.qty * item.price;
                    let discountedPrice = item.price * (1 - discountPercent / 100);
                    let finalPrice = discountedPrice * item.qty; 

                     return (


                      <div key={item.id} className="item-details">
                      <div className="row each-item">
                        <div className="col col-4 item-image">
                          <img src={item.image} alt={item.title} className="img-fluid" />
                        </div>
                  
                        <div className="col col-3 col-md-3 item-title">
                          <p>{item.title.substring(0, 25)}</p>
                          {getSelectedSize(item.id, item.category) && (
                            <p className="item-size">
                              Size: <span>{getSelectedSize(item.id, item.category)}</span>
                            </p>
                          )}
                          <p className="initial-price">Price: <span className="text-decoration-line-through text-danger">{itemsPrice}</span></p>
                        </div>
                  
                        <div className="col col-md-5 quantity-price-section">
                          <div className="d-flex mb-4 align-items-center justify-content-center quantity-selection">
                            <Fab
                              onClick={() => {
                                removeItem(item);
                              }}
                              size="small"
                              aria-label="minus"
                              className="quantity-icons"
                            >
                              <RemoveIcon className="remove-icon" />
                            </Fab>
                  
                            <p className="mx-4 my-0 item-qty">{item.qty}</p>
                  
                            <Fab
                              onClick={() => {
                                addItem(item);
                              }}
                              size="small"
                              aria-label="add"
                              className="quantity-icons"
                            >
                              <AddIcon className="add-icon" />
                            </Fab>
                          </div>
                  
                          <p className="text-start text-md-center item-price text-danger">
                            <span>Sale: </span> ${finalPrice.toFixed(2)} 
                          </p>
                          <span className="discount text-success">(10% discount applied)</span>
                        </div>
                      </div>
                  
                      <hr className="my-2" />
                    </div>
                      
                     );
                   })}
                    
                  </div>
                </div>
              </div>
              <div  className="col-md-4">
                <div  className="card mb-4">
                  <div id="checkout-header"className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div id="checkout-body" className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({totalItems})<span>${subtotal.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>${shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Delivery fee
                        <span>${delivery}</span>
                      </li>
                      <li id="total-amount" className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong >Total Amount</strong>
                        </div>
                        <span>
                          <strong>${totalAmount.toFixed(2)}</strong>
                        </span>
                      </li>
                    </ul>

                    <div id="checkout-button">
                      <Link
                        to="/checkout"
                        className="btn btn-lg"
                        id="checkout-btn"
                      >
                        Go to checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3 cart-page">
        <h1 className="text-left">Your Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;








