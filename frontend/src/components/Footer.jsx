import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*--left--*/}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt='' />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Experience holistic healing with our Smart Ayurvedic Healthcare Platform. Book consultations with expert Ayurvedic doctors, explore authentic herbal products, and track your health effortlessly. 
            Ayurveda, personalized and accessible for you.</p>

        </div>

         {/*--center--*/}
         <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
        </div>

        {/*--right--*/}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>0773214356</li>
                <li>Dinukapriyankara@gmail.com</li>
            </ul>

        </div>
      </div>

          {/*----copyright---*/}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Mediora - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
