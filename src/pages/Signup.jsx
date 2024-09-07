import React from 'react'
import './Signup.css'
import { Navbar } from '../components'
const Signup = () => {
  return (
   <>
   <Navbar/>
       <div className="signup-container">
      <div className="bd">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="formm">
          <h3>Sign Up Here</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="UserName" id="username" />

          <label htmlFor="username">Email</label>
          <input type="email" placeholder="Email" id="email" />
          
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button>Sign Up</button>
          {/* <div className="social">
            <div className="go"><i className="fa fa-google"></i> Google</div>
           
            <div className="fb"><i className="fa fa-facebook"></i> Facebook</div>
          </div> */}
        </form>
      </div>
    </div>
   </>
  )
}

export default Signup
