// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';


// import { Home, Product, Products, AboutPage, ContactPage, Cart, Checkout, PageNotFound } from "./pages"
// import Admin from './pages/Admin';
// import Users from './pages/Users';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product" element={<Products />} />
//         <Route path="/product/:id" element={<Product />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/cart" element={<Cart />} />  
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="*" element={<PageNotFound />} />
//         <Route path="/product/*" element={<PageNotFound />} />
//        <Route path='/admin' element={Admin} >

//        <Route path="users" element={<Users />} />
//        <Route path="/" element={<Home />} />
//        <Route path="/product" element={<Products />} />
//        </Route>
   

//       </Routes>
//     </Provider>
//   </BrowserRouter>
// );
// index.js (or your main entry point with routes)
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import { Home, Product, Products, AboutPage, ContactPage, Cart, Checkout, PageNotFound } from './pages';
import Admin from './pages/Admin';
import Users from './pages/Users';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminProducts from './pages/AdminProducts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        {/* Main application routes */}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Admin routes with nested options */}
        <Route path="/admin" element={<Admin />}>
          <Route path="users" element={<Users />} />
          <Route path="products" element={<AdminProducts />} />
          {/* Use relative paths inside Admin to avoid absolute path conflicts */}
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
