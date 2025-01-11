import React from 'react'
import { assets } from '../assets/assets'
import logo from "../assets/logo.jpg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={logo} alt="Prescripto Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Appointlix connects patients with top healthcare professionals across specialties. From scheduling appointments to accessing trusted medical advice, we are committed to making healthcare accessible and convenient.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>QUICK LINKS</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
          
            <li className='hover:text-blue-500 hover:underline'>
              <Link to={'/'}>Home</Link>
            </li>
            
            <li className='hover:text-blue-500 hover:underline'>
              <Link to="/about">About us</Link>
            </li>
            
            <li className='hover:text-blue-500 hover:underline'>
              <Link to={'/doctors'}>Our Doctors</Link>
            </li>
            
            <li className='hover:text-blue-500 hover:underline'>
              <Link to={'/#speciality'}>Book an Appointment</Link>
            </li>
        
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>CONTACT US</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
        
            <li>Phone: +1 979 985 5931</li>
            <li>Email:hari.medha1901@gmail.com</li>
    
          </ul>
         
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          © 2024 Appointlix - All Rights Reserved.
        </p>
      </div>
      
    </div>
  )
}

export default Footer
