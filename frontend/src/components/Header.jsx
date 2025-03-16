import React from 'react';
import { assets } from '../assets/assets';
import bg1 from '../assets/bg1.jpg'; // Make sure the path is correct

const Header = () => {
  return (
    <div 
      className='relative flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20 bg-cover bg-center'
      style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Semi-transparent White Overlay */}
      <div className="absolute inset-0 bg-white opacity-50 rounded-lg"></div>

      {/*--left--*/}
      <div className='relative md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-purple font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Consult With Trusted<br/>Ayurvedic Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-grey-600 text-sm font-medium'>
          <img className='w-28' src={assets.group_profiles} alt='' />
          <p>
            Browse our extensive list of trusted Ayurvedic doctors, <br className='hidden sm:block'/>
            find the nearest specialist and<br className='hidden sm:block'/> book your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-black px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-150 transition-all duration-300'>
          Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/*--right--*/}
      <div className='relative md:w-1/2'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
