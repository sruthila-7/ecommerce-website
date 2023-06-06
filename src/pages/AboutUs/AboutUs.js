import React, { useEffect} from 'react'
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';
import './AboutUs.css';


const AboutUs = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3 aboutus-page">
        
        <header className='abt-header text-center'>
           <h1>Welcome to ShopBag!</h1>
        </header>
        <hr />
        <main className='abt-content'>
           <div> We're a team of passionate individuals who are dedicated to providing you with the best online shopping experience.Our journey started in ShopBag when we recognized the need for a reliable and convenient online shopping platform. Since then, we've been working hard to build a platform that caters to all your shopping needs.</div>

           <p>At ShopBag, we believe that shopping should be easy and hassle-free. That's why we offer a wide range of products from various categories, including electronics, fashion, and Jewelery. Our goal is to provide you with everything you need in one place. </p>
     
           <p>At ShopBag, we value our customers and strive to provide them with an exceptional shopping experience.</p>

           <p>Thank you for choosing ShopBag as your go-to online shopping destination. We hope you enjoy your shopping experience with us and look forward to serving you in the future.</p>

        </main>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-6 col-lg-3 col-md-4 col-sm-6 mb-3 px-3 abt-product-cards">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 col-md-4 col-sm-6 mb-3 px-3 abt-product-cards">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 col-md-4 col-sm-6 mb-3 px-3 abt-product-cards">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 col-md-4 col-sm-6 mb-3 px-3 abt-product-cards">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs