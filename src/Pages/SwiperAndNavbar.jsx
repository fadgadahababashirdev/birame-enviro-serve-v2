import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Swiper from '../components/Swiper/Swiper';
import { useState } from 'react';
import { Link } from 'react-scroll';
const SwiperAndNavbar = () => {
  const [scrolll, setScrolll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScrolll(true);
    } else {
      setScrolll(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return (
    <div id="Swipper">
      <div className="relative w-screen h-screen">
        <div>
          <Swiper />
        </div>
        <div className="absolute z-30 top-0 left-0">
          <Navbar />
        </div>
        <div className="absolute top-1/2  z-20">
          <h1 className="w-screen flex flex-col text-center text-4xl text-white md:text-4xl lg:text-5xl">
            {' '}
            <span className="md:text-6xl" style={{ fontFamily: 'cursive' }}>
              {' '}
              Thriving Environment And Development For
            </span>
            <span className="md:text-6xl" style={{ fontFamily: 'cursive' }}>
              All
            </span>
            <br />
          </h1>
        </div>

        {scrolll && (
          <Link to="Swipper" smooth={true} duration={1000}><button className="text-white z-20 text-2xl font-semibold  rounded-xl text-center  fixed p-2 m-5 flex justify-end  bottom-0 right-0 bg-gray-900 ">
          Top
        </button></Link>
        )}
      </div>
    </div>
  );
};

export default SwiperAndNavbar;
