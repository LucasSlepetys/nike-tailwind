import { GalleryImg } from './GalleryImg';
import React from 'react';
import shoe2 from '../assets/shoe_2.jpg';
import shoe from '../assets/shoe.jpg';
import shoe3 from '../assets/shoe_3.jpg';
import shoe4 from '../assets/shoe_4.jpg';
import shoe5 from '../assets/shoe_5.jpg';
import shoe6 from '../assets/shoe_6.jpg';

const Gallery = () => {
  return (
    <div className='py-10 h-full w-11/12 mx-auto gap-y-4 gap-x-4 grid justify-center sm:grid-cols-3'>
      <GalleryImg img={shoe2} text={'Sneakers for sport'} height={44} />
      <GalleryImg img={shoe} text={'Social shoes'} />
      <GalleryImg img={shoe3} text={'Social shoes'} />
      <GalleryImg img={shoe4} text={'Sneakers for sport'} height={44} />
      <GalleryImg img={shoe5} text={'Sneakers for night out'} />
      <GalleryImg img={shoe6} text={'Sneakers for sport'} />
    </div>
  );
};

export default Gallery;
