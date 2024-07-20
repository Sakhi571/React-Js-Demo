import React, { useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";

function UseCase() {

  //  State
  const [process, setprocess] = useState();
  const [process1, setprocess1] = useState();
  const [process2, setprocess2] = useState();
  const [process3, setprocess3] = useState();
  const [process4, setprocess4] = useState();
  const [process5, setprocess5] = useState();
  


  return (
    <div>
      <div className='flex flex-col mt-12 items-center md:flex-row md:space-x-10 md:ml-10 md:mt-12'>
        <h1 className='text-2xl bg-green-400 md:w-48 h-10 text-center mt-2 md:mt-0'>Case Studies</h1>
        <p className='text-[20px] w-[350px] md:w-[580px] text-center md:text-lg md:text-left mt-5'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>

      {/* Card Component */}
      <div className='bg-black flex flex-col md:flex-row md:w-[1200px] md:h-44 rounded-2xl md:mt-10 md:mb-10 justify-between mx-auto'>
        {/* First Component */}
        <div className='md:mt-6 md:ml-3 flex flex-col md:flex-row items-center md:mb-6'>
          <div className='md:w-72 md:ml-6 text-center md:text-left'>
            <p className='md:text-white text-[15px]'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <div className='flex md:mt-3 justify-center md:justify-start'>
              <h1 className='md:text-yellow-400'>Learn more</h1>
              <GoArrowUpRight className='md:text-yellow-400 text-2xl md:ml-1' />
            </div>
          </div>
          <div className='hidden md:block md:ml-10 md:w-[1px] md:bg-white md:mx-6 md:h-32'></div> {/* Separator */}
        </div>
        {/* Second Component */}
        <div className='md:mt-6 flex flex-col md:flex-row items-center md:mb-6'>
          <div className='md:w-72 md:mr-2 text-center md:text-left'>
            <p className='md:text-white text-[15px]'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <div className='flex md:mt-3 justify-center md:justify-start'>
              <h1 className='md:text-yellow-400'>Learn more</h1>
              <GoArrowUpRight className='md:text-yellow-400 text-2xl md:ml-1' />
            </div>
          </div>
          <div className='hidden md:block md:ml-20 md:w-[1px] md:bg-white md:mx-6 md:h-32'></div> {/* Separator */}
        </div>
        {/* Third Component */}
        <div className='md:mt-6 flex flex-col md:flex-row items-center md:mb-6'>
          <div className='md:w-72 md:mr-10 text-center md:text-left'>
            <p className='md:text-white text-[15px]'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <div className='flex md:mt-3 justify-center md:justify-start'>
              <h1 className='md:text-yellow-400'>Learn more</h1>
              <GoArrowUpRight className='md:text-yellow-400 text-2xl md:ml-1' />
            </div>
          </div>
        </div>
      </div>



      {/* On Working Process */}

      <div className='flex flex-col mt-12 items-center md:flex-row md:space-x-10 md:ml-10 md:mt-12'>
        <h1 className='text-2xl bg-green-400 md:w-60 h-10 text-center mt-2 md:mt-0'>On Working Process</h1>
        <p className='text-[20px] w-[350px] md:w-[580px] text-center md:text-lg md:text-left mt-5'>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>

      {/* First Component of Working Process  */}
      {
        process ? (
          <div className='flex items-center bg-green-400 justify-center mx-auto bg-gray-300 p-2  md:mt-10 md:w-[1200px] rounded-xl md:h-44 border-b-4 border-black'>
            <div className='flex-grow md:ml-6'>
              <h1 className='text-xl md:text-3xl inline '>01 </h1>
              <h1 className='text-2xl md:text-2xl inline'>Consultation</h1>
              {
                process && (
                  <div className='mt-10'>
                    <div className='hidden md:block  md: h-[2px] md:bg-black md:mt-4  md:w-[1000px]'></div>
                    <div>
                      <h1>This is the further context from this link</h1>
                    </div>
                  </div>
                )
              }
            </div>
            <button className='bg-gray-200 border-2 border-black rounded-full md:mt-[-46px] md:w-10 md:h-10 text-5xl flex items-center justify-center' onClick={() => setprocess(!process)}>

              {
                process ? <h1 className='md:mt-[-11px]'>+</h1> : <h1 className='md:mt-[-11px]'>-</h1>
              }
            </button>
          </div>
        ) : (
          <div className='flex items-center justify-center mx-auto bg-gray-300 p-2  md:mt-10 md:w-[1200px] rounded-xl md:h-32 border-b-4 border-black'>
            <div className='flex-grow md:ml-6'>
              <h1 className='text-xl md:text-3xl inline '>01 </h1>
              <h1 className='text-2xl md:text-2xl inline'>Consultation</h1>
              {
                process && (
                  <div className='mt-10'>
                    <div className='hidden md:block  md: h-[2px] md:bg-black md:mt-4  md:w-[1000px]'></div>
                    <div>
                      <h1>This is the further context from this link</h1>
                    </div>
                  </div>
                )
              }
            </div>
            <button className='bg-gray-200 border-2 border-black rounded-full md:w-10 md:h-10 text-5xl flex items-center justify-center' onClick={() => setprocess(!process)}>

              {
                process ? <h1 className='md:mt-[-11px]'>+</h1> : <h1 className='md:mt-[-11px]'>-</h1>
              }
            </button>
          </div>
        )

      }

      {/* Second Component of Working Process */}
      {
        process1 ? (
          <div className='flex items-center bg-green-400 justify-center mx-auto bg-gray-300 p-2  md:mt-10 md:w-[1200px] rounded-xl md:h-44 border-b-4 border-black'>
            <div className='flex-grow md:ml-6'>
              <h1 className='text-xl md:text-3xl inline '>02 </h1>
              <h1 className='text-2xl md:text-2xl inline'>Research and Strategy Development</h1>
              {
                process1 && (
                  <div className='mt-10'>
                    <div className='hidden md:block  md: h-[2px] md:bg-black md:mt-4  md:w-[1000px]'></div>
                    <div>
                      <h1>This is the further context from this link</h1>
                    </div>
                  </div>
                )
              }
            </div>
            <button className='bg-gray-200 border-2 border-black rounded-full md:mt-[-46px] md:w-10 md:h-10 text-5xl flex items-center justify-center' onClick={() => setprocess1(!process1)}>

              {
                process1 ? <h1 className='md:mt-[-11px]'>+</h1> : <h1 className='md:mt-[-11px]'>-</h1>
              }
            </button>
          </div>
        ) : (
          <div className='flex items-center justify-center mx-auto bg-gray-300 p-2  md:mt-10 md:w-[1200px] rounded-xl md:h-32 border-b-4 border-black'>
            <div className='flex-grow md:ml-6'>
              <h1 className='text-xl md:text-3xl inline '>02 </h1>
              <h1 className='text-2xl md:text-2xl inline'>Research and Strategy Development</h1>
              {
                process1 && (
                  <div className='mt-10'>
                    <div className='hidden md:block  md: h-[2px] md:bg-black md:mt-4  md:w-[1000px]'></div>
                    <div>
                      <h1>This is the further context from this link</h1>
                    </div>
                  </div>
                )
              }
            </div>
            <button className='bg-gray-200 border-2 border-black rounded-full md:w-10 md:h-10 text-5xl flex items-center justify-center' onClick={() => setprocess1(!process1)}>

              {
                process1 ? <h1 className='md:mt-[-11px]'>+</h1> : <h1 className='md:mt-[-11px]'>-</h1>
              }
            </button>
          </div>
        )

      }

      {/* Third Component of Working Process */}
      {
        process2 ? (
          <div className='flex items-center bg-green-400 justify-center mx-auto bg-gray-300 p-2  md:mt-10 md:w-[1200px] rounded-xl md:h-44 border-b-4 border-black'>
            <div className='flex-grow md:ml-6'>
              <h1 className='text-xl md:text-3xl inline '>03 </h1>
              <h1 className='text-2xl md:text-2xl inline'>Implementation</h1>
              {
                process2 && (
                  <div className='mt-10'>
                    <div className='hidden md:block  md: h-[2px] md:bg-black md:mt-4  md:w-[1000px]'></div>
                    <div>
                      <h1>This is the further context from this link</h1>
                    </div>
                  </div>
                )
              }
            </div>
            <button className='bg-gray-200 border-2 border-black rounded-full md:mt-[-46px] md:w-10 md:h-10 text-5xl flex items-center justify-center' onClick={() => setprocess2(!process2)}>

              {
                process2 ? <h1 className='md:mt-[-11px]'>+</h1> : <h1 className='md:mt-[-11px]'>-</h1>
              }
            </button>
          </div>
        ) : (
          <div className='flex items-center justify-center mx-auto bg-gray-300 p-2  md:mt-10 md:w-[1200px] rounded-xl md:h-32 border-b-4 border-black'>
            <div className='flex-grow md:ml-6'>
              <h1 className='text-xl md:text-3xl inline '>03 </h1>
              <h1 className='text-2xl md:text-2xl inline'>Implementation</h1>
              {
                process2 && (
                  <div className='mt-10'>
                    <div className='hidden md:block  md: h-[2px] md:bg-black md:mt-4  md:w-[1000px]'></div>
                    <div>
                      <h1>This is the further context from this link</h1>
                    </div>
                  </div>
                )
              }
            </div>
            <button className='bg-gray-200 border-2 border-black rounded-full md:w-10 md:h-10 text-5xl flex items-center justify-center' onClick={() => setprocess2(!process2)}>

              {
                process2 ? <h1 className='md:mt-[-11px]'>+</h1> : <h1 className='md:mt-[-11px]'>-</h1>
              }
            </button>
          </div>
        )

      }
      {/* Fourth Component of Working Process */}
      {
        process3 ? (
          <div className='flex items-center bg-green-400 justify-center mx-auto bg-gray-300 p-2  md:mt-10 md:w-[1200px] rounded-xl md:h-44 border-b-4 border-black'>
            <div className='flex-grow md:ml-6'>
              <h1 className='text-xl md:text-3xl inline '>04 </h1>
              <h1 className='text-2xl md:text-2xl inline'>Monitoring and Optimizing</h1>
              {
                process3 && (
                  <div className='mt-10'>
                    <div className='hidden md:block  md: h-[2px] md:bg-black md:mt-4  md:w-[1000px]'></div>
                    <div>
                      <h1>This is the further context from this link</h1>
                    </div>
                  </div>
                )
              }
            </div>
            <button className='bg-gray-200 border-2 border-black rounded-full md:mt-[-46px] md:w-10 md:h-10 text-5xl flex items-center justify-center' onClick={() => setprocess3(!process3)}>

              {
                process3 ? <h1 className='md:mt-[-11px]'>+</h1> : <h1 className='md:mt-[-11px]'>-</h1>
              }
            </button>
          </div>
        ) : (
          <div className='flex items-center justify-center mx-auto bg-gray-300 p-2  md:mt-10 md:w-[1200px] rounded-xl md:h-32 border-b-4 border-black'>
            <div className='flex-grow md:ml-6'>
              <h1 className='text-xl md:text-3xl inline '>04 </h1>
              <h1 className='text-2xl md:text-2xl inline'>Monitoring and Optimizing</h1>
              {
                process3 && (
                  <div className='mt-10'>
                    <div className='hidden md:block  md: h-[2px] md:bg-black md:mt-4  md:w-[1000px]'></div>
                    <div>
                      <h1>This is the further context from this link</h1>
                    </div>
                  </div>
                )
              }
            </div>
            <button className='bg-gray-200 border-2 border-black rounded-full md:w-10 md:h-10 text-5xl flex items-center justify-center' onClick={() => setprocess3(!process3)}>

              {
                process3 ? <h1 className='md:mt-[-11px]'>+</h1> : <h1 className='md:mt-[-11px]'>-</h1>
              }
            </button>
          </div>
        )

      }
      {/* Fifth Component of Working Process */}
      {
        process4 ? (
          <div className='flex items-center bg-green-400 justify-center mx-auto bg-gray-300 p-2  md:mt-10 md:w-[1200px] rounded-xl md:h-44 border-b-4 border-black'>
            <div className='flex-grow md:ml-6'>
              <h1 className='text-xl md:text-3xl inline '>05 </h1>
              <h1 className='text-2xl md:text-2xl inline'>Reporting and Communication</h1>
              {
                process4 && (
                  <div className='mt-10'>
                    <div className='hidden md:block  md: h-[2px] md:bg-black md:mt-4  md:w-[1000px]'></div>
                    <div>
                      <h1>This is the further context from this link</h1>
                    </div>
                  </div>
                )
              }
            </div>
            <button className='bg-gray-200 border-2 border-black rounded-full md:mt-[-46px] md:w-10 md:h-10 text-5xl flex items-center justify-center' onClick={() => setprocess4(!process4)}>

              {
                process4 ? <h1 className='md:mt-[-11px]'>+</h1> : <h1 className='md:mt-[-11px]'>-</h1>
              }
            </button>
          </div>
        ) : (
          <div className='flex items-center justify-center mx-auto bg-gray-300 p-2  md:mt-10 md:w-[1200px] rounded-xl md:h-32 border-b-4 border-black'>
            <div className='flex-grow md:ml-6'>
              <h1 className='text-xl md:text-3xl inline '>05 </h1>
              <h1 className='text-2xl md:text-2xl inline'>Reporting and Communication</h1>
              {
                process4 && (
                  <div className='mt-10'>
                    <div className='hidden md:block  md: h-[2px] md:bg-black md:mt-4  md:w-[1000px]'></div>
                    <div>
                      <h1>This is the further context from this link</h1>
                    </div>
                  </div>
                )
              }
            </div>
            <button className='bg-gray-200 border-2 border-black rounded-full md:w-10 md:h-10 text-5xl flex items-center justify-center' onClick={() => setprocess4(!process4)}>

              {
                process4 ? <h1 className='md:mt-[-11px]'>+</h1> : <h1 className='md:mt-[-11px]'>-</h1>
              }
            </button>
          </div>
        )

      }
      {/* Sixth Component of Working Process */}
      {
        process5 ? (
          <div className='flex items-center bg-green-400 justify-center mx-auto bg-gray-300 p-2  md:mt-10 md:w-[1200px] rounded-xl md:h-44 border-b-4 border-black'>
            <div className='flex-grow md:ml-6'>
              <h1 className='text-xl md:text-3xl inline '>06 </h1>
              <h1 className='text-2xl md:text-2xl inline'>Continual Improvement</h1>
              {
                process5 && (
                  <div className='mt-10'>
                    <div className='hidden md:block  md: h-[2px] md:bg-black md:mt-4  md:w-[1000px]'></div>
                    <div>
                      <h1>This is the further context from this link</h1>
                    </div>
                  </div>
                )
              }
            </div>
            <button className='bg-gray-200 border-2 border-black rounded-full md:mt-[-46px] md:w-10 md:h-10 text-5xl flex items-center justify-center' onClick={() => setprocess5(!process5)}>

              {
                process5 ? <h1 className='md:mt-[-11px]'>+</h1> : <h1 className='md:mt-[-11px]'>-</h1>
              }
            </button>
          </div>
        ) : (
          <div className='flex items-center justify-center mx-auto bg-gray-300 p-2  md:mt-10 md:w-[1200px] rounded-xl md:h-32 border-b-4 border-black'>
            <div className='flex-grow md:ml-6'>
              <h1 className='text-xl md:text-3xl inline '>06 </h1>
              <h1 className='text-2xl md:text-2xl inline'>Continual Improvement</h1>
              {
                process5 && (
                  <div className='mt-10'>
                    <div className='hidden md:block  md: h-[2px] md:bg-black md:mt-4  md:w-[1000px]'></div>
                    <div>
                      <h1>This is the further context from this link</h1>
                    </div>
                  </div>
                )
              }
            </div>
            <button className='bg-gray-200 border-2 border-black rounded-full md:w-10 md:h-10 text-5xl flex items-center justify-center' onClick={() => setprocess5(!process5)}>

              {
                process5 ? <h1 className='md:mt-[-11px]'>+</h1> : <h1 className='md:mt-[-11px]'>-</h1>
              }
            </button>
          </div>
        )

      }

{/* Main Tag Ending  */}
    </div>
  )
}

export default UseCase;
