import React from 'react';
import './Navbar.css';
import TransparentLogo250 from '../../assets/logo-transparent-250.png';

const Navbar = () => {
  return (
    <div className="nav-main-div">
      <div className="logo-div">
        <img
          src={TransparentLogo250}
          alt="logo transparent background"
          className="logo-img"
        />
      </div>
      <div className="nav-links-div">
        <a className="link-btn">Home</a>
        <a className="link-btn">About</a>
        <a className="link-btn">Shop</a>
        <a className="link-btn">Contact</a>
      </div>
      <div className="icons-right-div">
        <i className="fas fa-user-alt icons"></i>
        <i className="fas fa-shopping-cart icons"></i>
      </div>
    </div>
  );
};

export default Navbar;
