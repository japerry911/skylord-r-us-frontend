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
      <ul className="nav-links-ul">
        <li>
          <a className="link-btn" href="/">
            Home
          </a>
        </li>
        <a className="link-btn" href="/about">
          About
        </a>
        <li>
          <a className="link-btn" href="/shop">
            Shop
          </a>
        </li>
        <li>
          <a className="link-btn" href="/contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="icons-right-div">
        <i className="fas fa-user-alt icons"></i>
        <i className="fas fa-shopping-cart icons"></i>
      </div>
    </div>
  );
};

export default Navbar;
