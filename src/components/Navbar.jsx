import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../image/logoo.webp";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [showSearch, setShowSearch] = useState(false); // State to control search bar visibility

  // Function to toggle the search bar
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top">
      <div className="container">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo"
            style={{
              height: "50px",
              width: "auto",
              borderRadius: "8px",
              objectFit: "contain",
              cursor: "pointer",
              marginRight: "15px",
            }}
          />
        </NavLink>

        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/product">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/admin">
                Admin
              </NavLink>
            </li>
          </ul>

       
          <div className="d-flex align-items-center ml-3">
            <i
              className="fa fa-search text-white"
              onClick={toggleSearch}
              style={{
                fontSize: "20px",
                cursor: "pointer",
                marginRight: "10px",
              }}
            ></i>
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="form-control"
                style={{
                  width: "200px",
                  transition: "width 0.5s",
                  marginLeft: "10px",
                  background: "transparent",
                  color: "white",
                }}
              />
            )}
          </div>

          {/* Cart Button */}
          <div className="buttons text-center">
            <NavLink to="/cart" className="btn btn-outline-light m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
