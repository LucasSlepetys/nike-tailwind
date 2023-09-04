import React from 'react';
import { info } from '../data';

const Info = () => {
  return (
    <div className='bg-white shadow-xl my-4 px-8 w-11/12 max-w-6xl mx-auto'>
      <div className='py-10 max-w-fit mx-auto grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 md:grid-cols-4'>
        {info.map((info) => {
          const { icon, policy, text } = info;
          return (
            <div className='flex flex-col gap-y-2  text-center items-center capitalize tracking-wide'>
              {icon}
              <div>
                <p className='font-bold text-base'>{policy}</p>
                <p className='text-sm text-slate-500 '>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
