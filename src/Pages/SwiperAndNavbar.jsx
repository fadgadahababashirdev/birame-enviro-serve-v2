import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Swiper from '../components/Swiper/Swiper';
const SwiperAndNavbar = () => {
  return (
    <div>
      <div className="relative w-screen h-screen">
      <div>
        <Swiper />
      </div>
      <div className="absolute z-30 top-0 left-0">
        <Navbar />
      </div>
      <div className="absolute top-1/2  z-20">
        <h1 className="w-screen flex justify-center text-white md:text-4xl lg:text-5xl">
          {' '}
          <span> Thriving Environment And Development For</span>
          <br />
          <p>All</p>
        </h1>
      </div>
    </div>

    </div>
  );
};

export default SwiperAndNavbar;
