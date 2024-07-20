import React, { useRef } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Abount from './screeens/Abount';
import Services from './screeens/Services';
import UseCase from './screeens/UseCase';
import Price from './screeens/Price';
import Blog from './screeens/Blog';

function App() {


  
  return (
    <BrowserRouter>
    <Navbar  />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Abount />} />
          <Route path="/service" element={<Services />} />
          <Route path="/case" element={<UseCase />} />
          <Route path="/price" element={<Price />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
