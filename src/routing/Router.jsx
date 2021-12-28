import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Homepage from '../pages/Homepage/Homepage';
import Shop from '../pages/Shop/Shop';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
