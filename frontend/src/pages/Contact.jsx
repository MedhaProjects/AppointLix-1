import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="px-5 md:px-20 lg:px-40 py-16 bg-gray-50">
      
      {/* Header Section */}
     

      {/* Content Section */}
      <div className='my-12 flex flex-col md:flex-row gap-10 items-center  md:items-start  text-sm '>

        {/* Image */}
        <img 
          className='w-full md:max-w-[400px] rounded-lg shadow-lg border-4 border-gray-300'  // Added border classes
          src={assets.contact_image} 
          alt="Contact Us" 
        />

        {/* Contact Information */}
        <div className='flex flex-col gap-8 justify-center items-center w-full h-full0'>

          <div className='text-center text-3xl font-light pt-10 text-[#707070]'>
            <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
          </div>

          {/* Office Info */}
          <div>
            <p className='text-gray-500 leading-7 mt-2 text-[20px]'>
              Tel: +1 979 985 5931<br />
              Email:hari.medha1901@gmail.com
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
