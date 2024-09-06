import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-dark text-white">
        <section className="mt-5 pt-1">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>About
                </h6>
                <p>
                  Get made in Pakistan Perfumes and Indulge in the Exquisite
                  Scents of our 100% Accurate Perfumes at Unbeatable Prices!
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mr-5 mb-4">
                  Useful links
                </h6>
                <p>
                  <NavLink to="/" className="text-reset">
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/product" className="text-reset">
                    Shop
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/about" className="text-reset">
                    Tester
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/contact" className="text-reset">
                    Contact
                  </NavLink>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <div className="text-center p-4">
          © 2024 Funoon Powered by :
          <a className="text-reset fw-bold" href="https://shopify.com/">
            shopify.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
