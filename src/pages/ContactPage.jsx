
import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {


  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center mb-4">Contact Us</h1>
      
      
        <div className="row my-5 justify-content-center">
          <div className="col-md-8 col-lg-7 col-sm-10">
            <form>
              <div className="form-row d-flex align-items-center mb-4">
                <div className="col">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="Name"
                    placeholder="Enter your name"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="Email"
                    placeholder="name@example.com"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <div className="form-group mb-4">
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  id="Phone"
                  placeholder="Phone Number"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="form-group mb-4">
                <textarea
                  rows={5}
                  className="form-control form-control-lg"
                  id="Message"
                  placeholder="Comment"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-dark my-2 px-4"
                  type="submit"
                
                >
                  Send
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

export default ContactPage;
