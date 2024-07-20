import React from 'react'
import img10 from '../images/10.png';
import img11 from '../images/11.png';
import img12 from '../images/12.jpg';
import img13 from '../images/13.png';
import img14 from '../images/14.png';
import img15 from '../images/15.png';
import img16 from '../images/16.png';
import img17 from '../images/icon.png';

function Price() {
  return (
    <div>
        <div className='flex flex-col mt-12 items-center md:flex-row md:space-x-10 md:ml-10 md:mt-12'>
           <h1 className='text-2xl bg-green-400 md:w-24 h-10 text-center mt-2 md:mt-0'>Team</h1>
           <p className='text-[20px] w-[350px] md:w-[580px] text-center md:text-lg md:text-left mt-5'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>
        {/* Team Components */}
        {/* First Row Components */}
        <div className='md:mt-10 justify-center items-center mx-auto md:flex md:space-x-[48px]'>
             {/* Team First Card */}
             <div className='border-[0.5px] md:w-[365px] md:h-52 rounded-xl border-black border-b-4'>
                  <div className='flex md:mt-3'>
                       <img src={img10} alt='' className='md:h-20 md:w-20'/>
                       <h2 className='md:ml-6 md:mt-4 md:text-[20px]'>John Smith <br></br> CE0 and Founder</h2>
                       <img src={img17} alt='' className='md:h-10 md:w-10 md:ml-12 md:mt-2'/>
                  </div>
                  <div className='w-[350px] md:ml-3 bg-black h-[1px] my-4'></div>{/* Separator */}
                   <p className='md:w-96 text-[10px] md:ml-2'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p> 
             </div>

               {/* Team Second Card */}
               <div className='border-[0.5px] md:w-[365px] md:h-52 rounded-xl border-black border-b-4 '>
                  <div className='flex md:mt-3'>
                       <img src={img11} alt='' className='md:h-20 md:w-20'/>
                       <h2 className='md:ml-6 md:mt-4 md:text-[20px]'>John Smith <br></br> CE0 and Founder</h2>
                       <img src={img17} alt='' className='md:h-10 md:w-10 md:ml-12 md:mt-2'/>
                  </div>
                  <div className='w-[350px] md:ml-3 bg-black h-[1px] my-4'></div>{/* Separator */}
                   <p className='md:w-96 text-[10px] md:ml-2'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p> 
             </div>

             {/* Team Third Card */}
             <div className='border-[0.5px] md:w-[365px] md:h-52 rounded-xl border-black border-b-4 md:mr-20'>
                  <div className='flex md:mt-3'>
                       <img src={img12} alt='' className='md:h-20 md:w-20'/>
                       <h2 className='md:ml-6 md:mt-4 md:text-[20px]'>John Smith <br></br> CE0 and Founder</h2>
                       <img src={img17} alt='' className='md:h-10 md:w-10 md:ml-12 md:mt-2'/>
                  </div>
                  <div className='w-[350px] md:ml-3 bg-black h-[1px] my-4'></div>{/* Separator */}
                   <p className='md:w-96 text-[10px] md:ml-2'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p> 
             </div>
        </div>
         {/* Second Row Components */}
         <div className='md:mt-10 justify-center items-center md:flex md:space-x-[48px]'>
             {/* Team Fourth Card */}
             <div className='border-[0.5px] md:w-[365px] md:h-52 rounded-xl border-black border-b-4'>
                  <div className='flex md:mt-3'>
                       <img src={img13} alt='' className='md:h-20 md:w-20'/>
                       <h2 className='md:ml-6 md:mt-4 md:text-[20px]'>John Smith <br></br> CE0 and Founder</h2>
                       <img src={img17} alt='' className='md:h-10 md:w-10 md:ml-12 md:mt-2'/>
                  </div>
                  <div className='w-[350px] md:ml-3 bg-black h-[1px] my-4'></div>{/* Separator */}
                   <p className='md:w-96 text-[10px] md:ml-2'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p> 
             </div>

               {/* Team Fifth Card */}
               <div className='border-[0.5px] md:w-[365px] md:h-52 rounded-xl border-black border-b-4'>
                  <div className='flex md:mt-3'>
                       <img src={img14} alt='' className='md:h-20 md:w-20'/>
                       <h2 className='md:ml-6 md:mt-4 md:text-[20px]'>John Smith <br></br> CE0 and Founder</h2>
                       <img src={img17} alt='' className='md:h-10 md:w-10 md:ml-12 md:mt-2'/>
                  </div>
                  <div className='w-[350px] md:ml-3 bg-black h-[1px] my-4'></div>{/* Separator */}
                   <p className='md:w-96 text-[10px] md:ml-2'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p> 
             </div>

             {/* Team Sixth Card */}
             <div className='border-[0.5px] md:w-[365px] md:h-52 rounded-xl border-black border-b-4 md:mr-20'>
                  <div className='flex md:mt-3'>
                       <img src={img15} alt='' className='md:h-20 md:w-20'/>
                       <h2 className='md:ml-6 md:mt-4 md:text-[20px]'>John Smith <br></br> CE0 and Founder</h2>
                       <img src={img17} alt='' className='md:h-10 md:w-10 md:ml-12 md:mt-2'/>
                  </div>
                  <div className='w-[350px] md:ml-3 bg-black h-[1px] my-4'></div>{/* Separator */}
                   <p className='md:w-96 text-[10px] md:ml-2'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p> 
             </div>
        </div>
        {/* Button */}
          <div className='flex justify-end mt-7  md:mr-12' >
             <button className='bg-black text-white px-4 py-2 rounded md:w-40'>See All Team</button>
          </div>
    </div>
  )
}

export default Price