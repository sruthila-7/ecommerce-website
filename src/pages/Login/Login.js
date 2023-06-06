import React, {useState, useEffect} from "react";
import { Link, useNavigate  } from "react-router-dom";
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';
import './Login.css';

const Login = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
      
      const [submitted, setSubmitted] = useState(false);
      const [successMessage, setSuccessMessage] = useState('');

      const navigate = useNavigate();

      const toHome = () => {
        navigate('/');
      }

      const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (!form.checkValidity()) {
          form.classList.add('was-validated');
          return;
        }
      
        setSuccessMessage("Login Successful!");
        setSubmitted(true);
        form.reset();
        form.classList.remove('was-validated');
      
        setTimeout(() => {
          setSubmitted(false);
          toHome();
        }, 2000); 
      }
    

  return (
      <>
      <Navbar />
                 {submitted && (
                    <div id="success-message mx-2" className="alert alert-success" role="alert">
                       {successMessage}
                    </div> 
                    
                  )}
      <div id="login-page" className="container py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div id="form-content" className="col-md-4 col-lg-4 col-sm-8 mx-auto ">
            <form onSubmit={handleFormSubmit} noValidate autoComplete="off">
              <div className="my-3">
                <label htmlFor="Email display-4">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="my-3">
                <label htmlFor="Password display-4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-danger fw-bolder">Register</Link> </p>
              </div>
              <div id="submit-btn" className="text-center">
                <button className="my-2 mx-auto btn" type="submit" >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;