
import React from 'react';
import { Navbar } from '../components';
import './Login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate =  useNavigate()

  const handleClick = () => {
navigate('/signup')
  }
  return (
    <>
    <Navbar/>
    <div className="login-container">
      <div className="bd">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="formm">
          <h3>Login Here</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button>Log In</button>
          <p>OR</p>
          <button className='btn' onClick={handleClick}>Sign Up</button>
          {/* <div className="social">
            <div className="go"><i className="fa fa-google"></i> Google</div>
            
            <div className="fb"><i className="fa fa-facebook"></i> Facebook</div>
            </div> */}
        </form>
      </div>
    </div>
            </>
  );
};

export default Login;
