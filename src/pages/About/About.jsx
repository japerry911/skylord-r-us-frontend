import React from 'react';
import './About.css';
import AboutPageDog from '../../assets/about-page-dog.png';
import TransparentLogo250 from '../../assets/skylord-r-us-logo.svg';

const About = () => {
  return (
    <div className="main-about-div">
      <div className="sub-about-div">
        <div>
          <img
            src={AboutPageDog}
            alt="dog illustration"
            className="about-page-dog"
          />
          <h1>About Us</h1>
          <img
            src={TransparentLogo250}
            alt="skylord-r-us logo"
            className="about-page-logo"
          />
        </div>
        <div>
          <p>
            Skylord-R-US was founded in 2021 and is a store for dogs that love
            treats and bones. Skylord is the founder, and came up with the store
            idea after a feast full of bones and treats. Skylord's favorite
            treats are Whimpzee's bones, as well as greenies. Skylord is also a
            major fan of Frommel Foods, which provide a tasty and nutrious meal.
          </p>
          <p>
            Skylord is a catahoula mix breed, who is white with brown spots. He
            loves to nap, and nap, and nap, and make dog food and treat
            companies.
          </p>
        </div>
        <div>
          <button className="about-action-btn">Go Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default About;
