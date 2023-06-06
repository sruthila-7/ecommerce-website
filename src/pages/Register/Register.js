import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
      },[])


    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const toHome = () => {
      navigate('/');
    }

      const handleSubmit = (e) => {
        e.preventDefault();
      
        const form = e.target;
        if (!form.checkValidity()) {
          form.classList.add('was-validated');
        return;
        }

        setSuccessMessage("Thank you for registering!")
        setSubmitted(true);
        form.reset();
        form.classList.remove('was-validated');
        
        setTimeout(() => {
            setSubmitted(false);
            toHome();
          }, 2000);
        };
      
      const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    
        if (newPassword.length < 8) {
          setErrorMessage('Password must be at least 8 characters long.');
        } else {
          setErrorMessage('');
        }
      };
         

    return (
        <>
            <Navbar />
                 {submitted && (
                    <div id="success-message" className="alert alert-success" role="alert">
                       {successMessage}
                    </div> 
                  )}
            <div id="register-page" className="container py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div id="form-content" className="col-md-4 col-lg-4 col-sm-8 mx-auto ">
                        <form onSubmit={handleSubmit}  noValidate autoComplete="off">
                            <div className="form my-3">
                                <label htmlFor="Name">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    required
                                />
                                
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="abcd@gmail.com"
                                    required
                                />
                                
                            </div>
                            <div className="form  my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                {errorMessage && (
                                  <small className="text-danger">{errorMessage}</small>
                                )}
                                
                            </div>
                            <div className="my-3">
                                <p>Already has an account?{' '}<Link to="/login" className="text-decoration-underline text-danger fw-bolder">Login</Link>{' '}</p>
                            </div>
                            <div id="register-btn" className="text-center">
                                <button className="my-2 mx-auto btn " type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register;