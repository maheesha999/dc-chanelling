import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*--left--*/}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt='' />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Experience seamless and reliable doctor channelling with our app. 
            Book appointments with top specialists, access your medical history, and stay informed about your health—all from
             the comfort of your home. Your health, our priority.</p>

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
        <p className='py-5 text-sm text-center'>Copyright 2024@ Contact Doctor - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
