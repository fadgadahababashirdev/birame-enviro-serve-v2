import React from 'react';
import AllPages from './Pages/AllPages';
import { Routes, Route } from 'react-router-dom';
// components imports
import SwiperAndNavbar from './Pages/SwiperAndNavbar';
import OurProjects from './components/Projescts/OurProjects';
import Resource from './components/Resources/Resource';
import About from './components/About/About';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import SingleWeDo from './components/WhatWeDo/SingleWeDo';

const App = () => {
  return (
    <div className="w-screen h-screen">
      {/* <Routes>
      <Route path="/" element={<AllPages />}></Route>
    </Routes>   */}

      <Routes>
        <Route path="/" element={<AllPages />}></Route>
        <Route path="/SwipperAndNavbar" element={<SwiperAndNavbar />} />
        <Route path="/Projects" element={<OurProjects />} />
        <Route path="/Resorces" element={<Resource />} />
        <Route path="/About us" element={<About />} />
        <Route path="/What-we-do" element={<WhatWeDo />} />
        <Route path ="/what-we-do/:id"element={<SingleWeDo/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
