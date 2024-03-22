import React from 'react';
import SwiperAndNavbar from './SwiperAndNavbar';
import OurProjects from '../components/Projescts/OurProjects';
import Resource from '../components/Resources/Resource';
import About from '../components/About/About';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import Team from '../components/Team/Team';

const AllPages = () => {
  return (
    <div>
      <SwiperAndNavbar />
      <OurProjects />
      <Resource />
      <About />
      <WhatWeDo />
      <Team/>
    </div>
  );
};

export default AllPages;
