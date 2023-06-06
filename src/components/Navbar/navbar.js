import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { createTheme } from '@mui/material/styles';
import { grey, teal } from '@mui/material/colors';

import './navbar.css';

const Navbar = () => {
    const state = useSelector(state => state.handleCart)

    const navigate = useNavigate();

    const handleCart = () => {
       navigate("/cart");
     };


      const theme = createTheme({
        palette: {
          neutral: {
            main: teal[300],
        },

          primary: {
            main: grey[900],
          },
        },
      });

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4 px-2" to="/"><img id="website-logo" className='img-fluid' src='./assets/shopbag1.png' alt='website-logo'/></Link>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center d-flex align-items-center justify-content-center">


                      <NavLink to="/login" className='btn navbar-login-btn text-uppercase'>Login/Register</NavLink>
                      
                        <IconButton aria-label="cart" onClick={handleCart} className='mx-1 px-3 py-2'>
                         <Badge theme={theme} color="info" badgeContent={state.length}>
                            <ShoppingCartIcon theme={theme} color="primary" fontSize="large"/> 
                         </Badge>
                        </IconButton>
                      
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar