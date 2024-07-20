import React from 'react';
import image1 from '../images/2.jpg';
import image2 from '../images/card.svg';
import image3 from '../images/facebook.svg';
import image00 from '../images/logo.png'
import image5 from '../images/netflix.svg';
import image6 from '../images/youtube.svg';
import Services from './Services';
import UseCase from './UseCase';
import Price from './Price';
import Blog from './Blog';

function About() {
  return (
    <div>
    <div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center h-full px-4 ">
          <h1 className="text-4xl font-bold mb-4 mt-4 w-full text-center">Navigating the digital landscape for success</h1>
          <img src={image1} alt="" className="w-full max-w-xs h-auto mb-4" />
          <p className="text-gray-700 mb-4 text-center w-full max-w-xs">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <button className="px-4 py-2 bg-black text-white rounded w-full max-w-xs">Book & Consultation</button>
        </div>
        
        {/* Tablet and Desktop layout */}
        <div className="hidden md:flex md:w-1/2 flex-col md:mt-10 px-4 md:ml-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-24">Navigating the digital landscape for success</h1>
          <p className="text-gray-700 mb-4 md:mb-0 md:w-[520px]">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <button className="px-4 py-2 bg-black text-white rounded mt-4 md:mt-6 md:w-48">Book & Consultation</button>
        </div>
        <div className="hidden md:flex md:w-1/2 md:justify-end mb-4 md:mb-0 md:mr-10">
          <img src={image1} alt="" className="w-full max-w-md h-auto md:h-[300px] md:mt-10" />
        </div>
      </div>
      {/* Images as a scroller */}
      <div className="flex  md:flex-wrap md:flex-row">
        <div className="flex space-x-6 mt-2 ml-4 justify-center md:flex-nowrap md:space-x-[106px] md:ml-10 md:mt-16">
          <img src={image00} alt="" className="h-12  md:h-20 " />
          <img src={image3} alt="" className="h-12  md:h-20 " />
          <img src={image00} alt="" className="h-12  md:h-20 " />
          <img src={image5} alt="" className="h-12  md:h-20 " />
          <img src={image00} alt="" className="h-12 md:h-20 " />
          <img src={image3} alt="" className="h-12  md:h-20 " />
          <img src={image00} alt="" className="h-12 md:h-20 " />
        </div>
      </div>
    </div>

    {/* Render Tabs Components */}
    
    <Services/>
     <UseCase/>
     <Price/>
     <Blog/>
     
    </div>

  );
}

export default About;
