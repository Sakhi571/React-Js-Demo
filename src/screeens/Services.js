import React from 'react';
import image from '../images/4.jpg';
import image1 from '../images/5.jpg';
import image2 from '../images/6.jpg';
import image3 from '../images/7.jpg';
import image4 from '../images/8.jpg';
import { BsArrowUpRightCircleFill } from "react-icons/bs";


function Services() {
  return (
    <div>

      <div className='flex flex-col mt-12 items-center md:flex-row md:space-x-10 md:ml-10 md:mt-12 '>
        <h1 className='text-2xl bg-green-400 w-32 h-10 text-center mt-2 md:mt-0'>Services</h1>
        <p className='text-[20px] w-[350px] md:w-[580px] text-center md:text-lg md:text-left mt-5'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>

      {/* <div className='flex justify-between '> */}
      <div className='flex md:flex-row  md:mt-10 justify-between md:ml-10 '>
        <div className=''>
          {/* First Card */}
          <div className='border-[1px] border-black md:w-[590px] md:mb-10 rounded-2xl border-b-4 bg-gray-200'>
            <div className='flex md:justify-between'>
              <h1 className='md:text-2xl md:mt-6 md:ml-8 bg-green-400 md:w-[150px] md:h-16'>Search engine optimization</h1>
              <img src={image} alt='' className='md:w-60 md:mr-12 md:mt-7' />
            </div>
            <div className='flex md:space-x-3 md:ml-6 md:mb-6'>
              <BsArrowUpRightCircleFill className='md:mt-1' />
              <button className='text-gray-700'>Learn more</button>
            </div>
          </div>
          {/* Second Card */}
          {/* <div className='border-[1px] border-black md:w-[590px] md:mb-10 rounded-2xl border-b-4 bg-black'>
            <div className='flex md:justify-between'>
              <h1 className='md:text-2xl md:mt-6 md:ml-8 bg-white md:w-[150px] md:h-16'>Social Media Marketing</h1>
              <img src={image1} alt='' className='md:w-60 md:mr-12 md:mt-7'/>
            </div>
            <div className='flex md:space-x-3 md:ml-6 md:mb-6'>
              <BsArrowUpRightCircleFill className='md:mt-1 text-white'/>
              <button className='text-gray-700 text-white'>Learn more</button>
            </div>
          </div> */}

          <div className='border-[1px] border-black md:w-[590px] md:mb-10 rounded-2xl border-b-4 bg-gray-200'>
            <div className='flex md:justify-between'>
              <h1 className='md:text-2xl md:mt-6 md:ml-8 bg-green-400 md:w-[150px] md:h-16'>Social Media Marketing</h1>
              <img src={image1} alt='' className='md:w-60 md:mr-12 md:mt-7' />
            </div>
            <div className='flex md:space-x-3 md:ml-6 md:mb-6'>
              <BsArrowUpRightCircleFill className='md:mt-1' />
              <button className='text-gray-700'>Learn more</button>
            </div>
          </div>

          {/* Third Card */}
          {/* <div className='border-[1px] border-black md:w-[590px] md:mb-10 rounded-2xl border-b-4 bg-green-400'>
            <div className='flex md:justify-between'>
              <h1 className='md:text-2xl md:mt-6 md:ml-8 bg-white md:w-[150px] md:h-16'>Content Creation</h1>
              <img src={image2} alt='' className='md:w-60 md:mr-12 md:mt-7' />
            </div>
            <div className='flex md:space-x-3 md:ml-6 md:mb-6'>
              <BsArrowUpRightCircleFill className='md:mt-1' />
              <button className='text-gray-700'>Learn more</button>
            </div>
          </div> */}

          <div className='border-[1px] border-black md:w-[590px] md:mb-10 rounded-2xl border-b-4 bg-gray-200'>
            <div className='flex md:justify-between'>
              <h1 className='md:text-2xl md:mt-6 md:ml-8 bg-green-400 md:w-[150px] md:h-16'>Content Creation</h1>
              <img src={image2} alt='' className='md:w-60 md:mr-12 md:mt-7' />
            </div>
            <div className='flex md:space-x-3 md:ml-6 md:mb-6'>
              <BsArrowUpRightCircleFill className='md:mt-1' />
              <button className='text-gray-700'>Learn more</button>
            </div>
          </div>







          {/* Main Div of first coloumn data */}
        </div>

        {/* Second Column Start */}
        <div className='md:mr-20'>
          {/* Fourth Card */}
          {/* <div className='border-[1px] border-black md:w-[590px] md:mb-10 md:ml-6 rounded-2xl border-b-4 bg-green-400'>
            <div className='flex md:justify-between'>
              <h1 className='md:text-2xl md:mt-6 md:ml-8 bg-white md:w-[150px] md:h-16'>Pay-per-click advertising</h1>
              <img src={image3} alt='' className='md:w-60 md:mr-12 md:mt-7' />
            </div>
            <div className='flex md:space-x-3 md:ml-6 md:mb-6'>
              <BsArrowUpRightCircleFill className='md:mt-1' />
              <button className='text-gray-700'>Learn more</button>
            </div>
          </div> */}

          <div className='border-[1px] border-black md:w-[590px] md:mb-10 md:ml-5 rounded-2xl border-b-4 bg-gray-200'>
            <div className='flex md:justify-between'>
              <h1 className='md:text-2xl md:mt-6 md:ml-8 bg-green-400 md:w-[150px] md:h-16'>Pay-per-click advertising</h1>
              <img src={image3} alt='' className='md:w-[225px] md:mr-12 md:mt-7' />
            </div>
            <div className='flex md:space-x-3 md:ml-6 md:mb-6'>
              <BsArrowUpRightCircleFill className='md:mt-1' />
              <button className='text-gray-700'>Learn more</button>
            </div>
          </div>




          {/* Fifth Card */}
          {/* <div className='border-[1px] border-black md:w-[590px] md:mb-10 rounded-2xl border-b-4 bg-gray-200'>
            <div className='flex md:justify-between'>
              <h1 className='md:text-2xl md:mt-6 md:ml-8 bg-green-400 md:w-[150px] md:h-16'>Search engine optimization</h1>
              <img src={image} alt='' className='md:w-60 md:mr-12 md:mt-7' />
            </div>
            <div className='flex md:space-x-3 md:ml-6 md:mb-6'>
              <BsArrowUpRightCircleFill className='md:mt-1' />
              <button className='text-gray-700'>Learn more</button>
            </div>
          </div> */}
          <div className='border-[1px] border-black md:w-[590px] md:mb-10 md:ml-5 rounded-2xl border-b-4 bg-gray-200'>
            <div className='flex md:justify-between'>
              <h1 className='md:text-2xl md:mt-6 md:ml-8 bg-green-400 md:w-[150px] md:h-16'>Email Marketing</h1>
              <img src={image4} alt='' className='md:w-[275px] md:mr-12 md:mt-7' />
            </div>
            <div className='flex md:space-x-3 md:ml-6 md:mb-6'>
              <BsArrowUpRightCircleFill className='md:mt-1' />
              <button className='text-gray-700'>Learn more</button>
            </div>
          </div>




          {/* Sixth Card */}
          {/* <div className='border-[1px] border-black md:w-[590px] md:mb-10 rounded-2xl border-b-4 bg-black'>
            <div className='flex md:justify-between'>
              <h1 className='md:text-2xl md:mt-6 md:ml-8 bg-white md:w-[150px] md:h-16'>Social Media Marketing</h1>
              <img src={image1} alt='' className='md:w-60 md:mr-12 md:mt-7' />
            </div>
            <div className='flex md:space-x-3 md:ml-6 md:mb-6'>
              <BsArrowUpRightCircleFill className='md:mt-1 text-white' />
              <button className='text-gray-700 text-white'>Learn more</button>
            </div>
          </div> */}
          <div className='border-[1px] border-black md:w-[590px] md:mb-10 md:ml-5 rounded-2xl border-b-4 bg-gray-200'>
            <div className='flex md:justify-between'>
              <h1 className='md:text-2xl md:mt-6 md:ml-8 bg-green-400 md:w-[150px] md:h-16'>Analytic and Tracking</h1>
              <img src={image1} alt='' className='md:w-[258px] md:mr-12 md:mt-7' />
            </div>
            <div className='flex md:space-x-3 md:ml-6 md:mb-6'>
              <BsArrowUpRightCircleFill className='md:mt-1' />
              <button className='text-gray-700'>Learn more</button>
            </div>
          </div>





          {/* main of second column data */}
        </div>

        {/* main of both Column */}
      </div>
      {/* </div>    */}
      {/* Bottom Div of Services */}
      <div className="flex justify-center items-center justify-between bg-gray-200 md:w-[1200px] md:h-60 rounded-2xl md:mb-5 mx-auto">
        <div className="md: ml-8">
          <h1 className="md:text-2xl">Let's make things happen</h1>
          <p className="md:w-96">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button className="md:mt-3 bg-black text-white md:w-60 md:h-10 rounded-xl">Get your free proposal</button>
        </div>
        <div className="md:mt-10 md:mr-16">
          <img src={image} alt="" />
        </div>
      </div>

      {/* Main Div   */}
    </div>
  );
}

export default Services;
