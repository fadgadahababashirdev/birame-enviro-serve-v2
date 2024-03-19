import React from 'react';

const Navbar = () => {
  return (
    <div className="w-screen h-30 px-10 py-12 items-center flex justify-between border-b  border-gray-700 fixed top-0 left-0">
      {/* Logo container */}
      <div></div>
      {/* list container */}
      <div>
        {/* unordered lists */}
        <ul className="flex gap-10 ">
          <li className="text-white text-2xl font-semibold">ABOUT US</li>
          <li className="text-white text-2xl font-semibold">WHAT WE DO</li>
          <li className="text-white text-2xl font-semibold">PROJECTS</li>
          <li className="text-white text-2xl font-semibold">TEAM</li>
          <li className="text-white text-2xl font-semibold">RESOURCES</li>
          <li className="text-white text-2xl font-semibold">DONATE</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
