import React from 'react';
import { FaSearch, FaStore } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='hidden absolute left-1/2 -translate-x-1/2 top-10 w-11/12 max-w-6xl mx-auto py-6 px-8 lg:flex items-center justify-between bg-white shadow-2xl'>
      <p className='text-xl uppercase text-orange-500 italic font-bold'>
        Nike <span className='text-black not-italic font-normal'>Store</span>
      </p>
      <div className='flex gap-x-10 items-center'>
        <div className='flex gap-x-8'>
          <p className='text-orange-500 uppercase text-base'>home</p>
          <p className='text-slate-900 uppercase text-base'>shop</p>
          <p className='text-slate-900 uppercase text-base'>blog</p>
          <p className='text-slate-900 uppercase text-base'>pages</p>
          <p className='text-slate-900 uppercase text-base'>contact</p>
        </div>
        <div className='flex gap-x-4 items-center'>
          <FaSearch className='text-base text-slate-500' />
          <FaStore className='text-base text-slate-500' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
