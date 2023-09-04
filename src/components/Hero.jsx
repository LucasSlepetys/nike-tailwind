import React from 'react';
import { FaPlus } from 'react-icons/fa';
import nikeImg from '../assets/nike.png';
import sunBg from '../assets/bg-sun.svg';

const Hero = () => {
  return (
    <div className='relative'>
      <img
        src={sunBg}
        alt=''
        className=' lg:hidden absolute -z-10 top-0 right-0 w-full h-full'
      />
      <div className='pl-10 sm:pl-0 grid relative lg:grid-cols-2 items-center justify-center w-10/12 max-w-6xl lg:mx-auto overflow-hidden'>
        <img
          src={sunBg}
          alt=''
          className='hidden lg:block absolute -z-10 top-50 -rotate-45 right-0 w-1/2 h-full rounded-full'
        />
        <div className='my-52 p-10 max-w-2xl flex flex-col gap-y-6 bg-white rounded-tr-3xl rounded-bl-3xl shadow-2xl lg:shadow-none lg:bg-transparent lg:rounded-none'>
          <p className='text-4xl font-bold sm:text-6xl lg:text-6xl'>
            Nike New <span className='block'>Collection!</span>
          </p>
          <p className='text-sm max-w-md'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            eaque accusantium voluptates laboriosam rerum corrupti nesciunt quod
            assumenda ipsum culpa
          </p>
          <button className='bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg w-14 h-14 rounded-full relative'>
            <FaPlus className='text-lg text-white mx-auto' />
            <p className='absolute -right-28 top-1/2 -translate-y-1/2 uppercase text-sm tracking-wider'>
              add to bag
            </p>
          </button>
        </div>
        <img src={nikeImg} alt='nike' className='hidden lg:block' />
      </div>
    </div>
  );
};

export default Hero;
