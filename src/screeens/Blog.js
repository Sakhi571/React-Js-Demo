import React from 'react';
import image20 from '../images/3.jpg';
import image21 from '../images/1.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Blog() {
  return (
    <div>
      <div className='flex flex-col mt-12 items-center md:flex-row md:space-x-10 md:ml-10 md:mt-12'>
        <h1 className='text-2xl bg-green-400 md:w-32 h-10 text-center mt-2 md:mt-0'>Connect Us</h1>
        <p className='text-[20px] w-[350px] md:w-[580px] text-center md:text-lg md:text-left mt-5'>
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>
      {/* Contact Us Elements */}
      <div className='bg-gray-300 md:ml-10 md:w-[1200px] md:h-[670px] rounded-xl'>
        <div className='md:flex md:space-x-10 md:mt-14'>
          <div className='md:mt-10 md:ml-40'>
            <input type='radio' />
            <label className='md:ml-2'>Say Hi</label>
          </div>
          <div className='md:mt-10'>
            <input type='radio' />
            <label className='md:ml-2'>Get A Quote</label>
          </div>
        </div>
        {/* Input Data */}
        <div className='flex flex-col md:flex-row justify-between md:space-x-10'>
          <div>
            <div className='flex flex-col md:mt-5 md:ml-40'>
              <label className='text-xl'>Name</label>
              <input type='text' placeholder='Name' className='rounded-lg md:mt-3 md:w-96 md:h-9 border-[1px] border-black pl-2' />
            </div>
            <div className='flex flex-col md:ml-40 md:mt-10'>
              <label className='text-xl'>Email</label>
              <input type='text' placeholder='Email' className='rounded-lg md:mt-3 md:w-96 md:h-9 border-[1px] border-black pl-2' />
            </div>
            <div className='flex flex-col md:ml-40 md:mt-10'>
              <label className='text-xl'>Message*</label>
              <textarea placeholder='Message' className='rounded-lg md:mt-3 md:w-96 md:h-40 border-[1px] border-black p-2' />
            </div>
            <div className='flex justify-center md:ml-40 md:mt-10 '>
              <button className='bg-black text-white px-4 py-2 rounded md:w-96'>Send Message</button>
            </div>
          </div>
          <div className='md:mt-12 md:mr-6'>
            <img src={image20} alt='' className='md:h-96 md:w-96' />
          </div>
        </div>
      </div>

   {/* Bottom Tab */}
   <div className='bg-black text-white md:mt-10 p-4 md:w-[1200px] justify-center items-center mx-auto  rounded-t-xl'>
      <div className='flex items-center justify-between md:mt-4'>
        {/* Logo and Text */}
        <div className='flex items-center'>
          <img src={image21} alt='Positivus' className='h-10 w-10 mr-2' />
          <h1 className='text-xl'>Positivus</h1>
        </div>

        {/* Navigation Links */}
        <div className='flex space-x-4'>
          <a href='##' className='hover:text-gray-400'>About Us</a>
          <a href='##' className='hover:text-gray-400'>Services</a>
          <a href='##' className='hover:text-gray-400'>UseCases</a>
          <a href='##' className='hover:text-gray-400'>Pricing</a>
          <a href='##' className='hover:text-gray-400'>Blog</a>
        </div>

        {/* Social Icons */}
        <div className='flex space-x-4 md:mr-16'>
          <FaFacebook className='hover:text-gray-400' />
          <FaLinkedin className='hover:text-gray-400' />
          <FaTwitter className='hover:text-gray-400' />
        </div>
      </div>
      
      <div className='flex justify-between'>
          <div className='md:mt-16'>
            <h2 className='text-2xl bg-green-500 md:w-32 rounded-lg '>Contact us:</h2>
            <h2 className='md:mt-5 text-gray-300'>Email: info@positivus.com</h2>
            <h2 className='md:mt-5 text-gray-300'>Phone: 555-567-8901</h2>
            <h2 className='md:mt-5 text-gray-300'>Address: 1234 Main St</h2>
            <h2 className='text-gray-300'>Moonstone City, Stardust State 12345</h2>
          </div>
          <div className='bg-gray-900 md:mr-20 md:w-[440px] md:h-40 md:mt-16 '>
             <input type='text' placeholder='Email' className='pl-2 md:mt-14 md:ml-10 bg-black md:h-10 border-white border-[1px] rounded-xl'/>
             <button className='md:ml-10 bg-green-400 md:w-40 md:h-10 rounded-lg'>Subscribe to news</button>
          </div>

      </div>
      <div className='w-full md:ml-1 bg-white h-[2px] my-4'></div>
      <div className='flex space-x-6'>
        <h3>@ 2023 Positivus. All Rights Reserved</h3>
        <button className='underline'>Privacy Policy</button>
      </div>

    </div>

      {/* Bottom Div End */}
    </div>
  );
}

export default Blog;
