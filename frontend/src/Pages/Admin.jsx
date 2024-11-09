import React from 'react';
import './Admin.css';
import Slider from '../Components/ANavbar/Slider/Slider';
import Navbar from '../Components/ANavbar/Navbar';

import { Routes, Route } from 'react-router-dom';
import Addproduct from '../Components/Addproduct/Addproduct';
import Removeproduct from '../Components/Removeproduct/Removeproduct';
const Admin = () => {
  return (
    <div className='admin'>
      
      <Navbar/>
      <Slider/>
      <Routes>
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/listproduct" element={<Removeproduct />} />
      </Routes>


    </div>
  );
};

export default Admin;
