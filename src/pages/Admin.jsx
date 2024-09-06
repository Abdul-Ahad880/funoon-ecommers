
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar } from '../components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Admin.css'
const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          
          <nav className="col-md-3 col-lg-2 bg-dark sidebar fixed-sidebar d-flex flex-column align-items-start vh-100 p-3">
            <h2 className="text-white mb-4">Admin Panel</h2>
            <ul className="nav flex-column w-100">
              <li className="nav-item mb-2">
                <Link to="users" className="nav-link text-white">
                  <i className="fa fa-users me-2"></i> Users
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="products" className="nav-link text-white">
                  <i className="fa fa-box me-2"></i> Products
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link text-white">
                  <i className="fa fa-home me-2"></i> Home
                </Link>
              </li>
            </ul>
          </nav>

     
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 content-area">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Admin;
