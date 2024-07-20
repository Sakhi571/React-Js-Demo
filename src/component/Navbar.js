import React from 'react';
import image from '../images/1.png';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center md:ml-1">
        <div className="flex items-center md:ml-6">
          <img src={image} alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-black md:text-3xl sm:text-xl">Postivius</h1>
        </div>
      
        <div className="md:hidden">
          <FaBars />
        </div>
        <div className="hidden md:flex items-center space-x-10 md:mr-10">
          <Link to="/" className="text-black mr-1">About us</Link>
          <Link to="/service" className="text-black mr-1">Services</Link>
          <Link to="/case" className="text-black mr-1">Use Cases</Link>
          <Link to="/price" className="text-black mr-1">Pricing</Link>
          <Link to="/blog" className="text-black mr-1">Blog</Link>
          <button className="text-black px-4 py-2 rounded border-black border-2">Request a quote</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
