import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Contact Doctor, your trusted partner in healthcare. Our mission is to revolutionize the way you access medical care by bridging the gap between patients and doctors with just a few clicks.<br/><br/>
At Contact Doctor, we aim to provide a seamless and efficient platform for booking doctor appointments, managing prescriptions, and staying on top of your health needs. Whether you're seeking specialized care or routine consultations,
 we connect you with top healthcare professionals, ensuring convenience and quality care at your fingertips.</p>
          <p>Contact Doctor is commited to excellence in healthcare technology. you can:</p>
          <ul>
              <li>Schedule appointments anytime, anywhere.</li>
              <li>Keep track of your medical records and prescriptions.</li>
             <li>Receive timely reminders for follow-ups and medications.</li>
          </ul>

          <b className='text-gray-800'>Our Vision</b>
          <p>Our Vision at Contact Doctor is to making healthcare accessible, reliable, and patient-centric.
             Let Contact Doctor take care of the logistics so you can focus on what matters most—your well-being.</p>
        </div>
      </div>
      <div className='texl-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience:</b>
        <p>Access to a network of trusted healthcare professionals in your area.</p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalization:</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>

        </div>

      </div>

    </div>
  )
}

export default About
