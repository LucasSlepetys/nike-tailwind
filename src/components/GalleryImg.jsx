import React from 'react';
export function GalleryImg({ img, text, style = '' }) {
  return (
    <div className={`${style} group relative h-fit`}>
      <img
        src={img}
        alt='img'
        className='w-full object-cover overflow-hidden'
      />
      <div className='bg-black absolute left-0 top-0 w-full h-full opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-50'></div>
      <p className='absolute text-center text-xl text-white uppercase left-1/2 -translate-x-1/2 bottom-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:bottom-1/2'>
        {text}
      </p>
    </div>
  );
}
