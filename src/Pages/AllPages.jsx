import React from 'react';
import SwiperAndNavbar from './SwiperAndNavbar';
import OurProjects from '../components/Projescts/OurProjects';
import Resource from '../components/Resources/Resource';
import About from '../components/About/About';

const AllPages = () => {
  return (
    <div>
      <SwiperAndNavbar />
      <OurProjects />
      <Resource />
      <About />
    </div>
  );
};

export default AllPages;
