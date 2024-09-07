
import React from 'react';
import { Navbar } from '../components';
import './Login.css'
const Login = () => {
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
