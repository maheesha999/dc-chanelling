import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded-lg' src={assets.about_image} alt="Ayurvedic Healing" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Mediora, your trusted Ayurvedic healthcare platform. We bring you a seamless way to connect with experienced Ayurvedic doctors, ensuring holistic healing through traditional medicine.<br/><br/>
          Our platform allows you to book consultations with Ayurvedic specialists, explore tailored herbal remedies, and find the nearest doctor based on your location. Whether you seek preventive care, chronic disease management, or herbal wellness solutions, AyurMedica is your go-to destination for authentic Ayurveda.</p>
          
          <p>With Mediora, you can:</p>
          <ul>
              <li>Find and book appointments with verified Ayurvedic doctors.</li>
              <li>Purchase herbal medicines and wellness products from our inventory.</li>
              <li>Track your medical history, prescriptions, and appointments.</li>
          </ul>

          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at AyurMedica is to make holistic Ayurvedic healthcare accessible, personalized, and reliable. We aim to empower individuals with natural healing solutions, ensuring well-being through ancient wisdom combined with modern convenience.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Authenticity:</b>
          <p>We connect you with certified Ayurvedic doctors and genuine herbal products.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience:</b>
        <p>Book appointments, order herbal remedies, and track health records all in one place.</p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Holistic Healing:</b>
        <p>Experience personalized Ayurveda treatments that focus on your overall well-being.</p>

        </div>

      </div>

    </div>
  )
}

export default About;
