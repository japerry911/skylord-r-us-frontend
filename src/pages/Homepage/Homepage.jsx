import React from 'react';
import './Homepage.css';
import HomepageMain from '../../assets/homepage-main.gif';

const Homepage = () => {
  return (
    <div className="home-main">
      <img
        src={HomepageMain}
        alt="homepage main gif"
        className="home-main-img"
      />
    </div>
  );
};

export default Homepage;
