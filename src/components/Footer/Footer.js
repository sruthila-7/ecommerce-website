import React from "react";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import Fab from '@mui/material/Fab';
import { grey } from '@mui/material/colors';
import './Footer.css'


const Footer = () => {

  return (
    <>
      <footer className="footer">
        <div className="row footer-sections ">
          <div className="col footer-section-left-right">
            <div>
            <h4 className="footer-headings text-uppercase">Contact Us</h4>
            </div>
            <div className="contact-details">
            <i className="fa-solid fa-location-dot fa-xl" style={{color: "#1d3359"}}></i> 
            <p className="mb-0">8 Vinal Street, Apt 1, Boston, Massachusetts, USA</p>
            </div>
            <div className="contact-details">
            <i className="fa-solid fa-phone fa-xl" style={{color: "#1d3359"}}></i> 
            <p className="mb-0">+1 123 456 7890</p>
            </div>
            <div className="contact-details">
            <i className="fa-solid fa-envelope fa-xl" style={{color: "#1d3359"}}></i> 
            <p className="mb-0">abcd@gmail.com</p>
            </div>
          </div>
          <div className="col footer-section-left-right">
            <div>
              <h4 className="footer-headings text-uppercase">About Company</h4>
            </div>
            <div>
              <p className="abt-company">
                Lorem ipsum dolor sit amet, consectateur adispicing elit. 
                Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
              </p>
            </div>
            <div className="social-media-links">
              <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook fa-2xl" style={{color: "#3e5b97"}}></i></a>
              <a href="https://www.google.com" target="_blank"><i className="fa-brands fa-google-plus-g fa-2xl" style={{color: "#da3e56"}}></i></a>
              <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter fa-2xl" style={{color: "#58adec"}}></i></a> 
              <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram fa-2xl" style={{color: "#d94384"}}></i></a>
            </div>
          </div>
        </div>
        <div className="copyright-section">
          <h5 className="text-center mb-0">Copyright © <a href="/" target="_blank">ShopBag.com</a> 2023</h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;