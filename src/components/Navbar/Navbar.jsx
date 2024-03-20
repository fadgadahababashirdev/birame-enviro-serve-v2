import React from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../features/toggleSlice';
import './styles.css';
const Navbar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.menu);

  const handleToggleChange = () => dispatch(toggle());
  console.log('The current state is', data);
  return (
    <div className=" relative w-screen h-30 px-10 py-12 items-center flex justify-between border-b  border-gray-700 fixed top-0 left-0">
      {/* Logo container */}
      <div></div>
      {/* list container */}
      <div>
        {/* unordered lists */}
        <ul className=" gap-10 hidden md:flex ">
          <li className="text-white text-2xl font-semibold">ABOUT US</li>
          <li className="text-white text-2xl font-semibold">WHAT WE DO</li>
          <li className="text-white text-2xl font-semibold">PROJECTS</li>
          <li className="text-white text-2xl font-semibold">TEAM</li>
          <li className="text-white text-2xl font-semibold">RESOURCES</li>
          <li className="text-white text-2xl font-semibold">DONATE</li>
        </ul>
      </div>
      <div className="md:hidden">
        <HiOutlineMenuAlt1 onClick={handleToggleChange} />
      </div>
      {data && (
        <div className="lists absolute left-0 top-0 mt-28 text-white z-20 white bg-white w-screen h-fit p-5">
          <ul className=" gap-10  block">
            <li className="text-gray-900 text-sm mt-3">ABOUT US</li>
            <li className="text-gray-900 text-sm mt-3">WHAT WE DO</li>
            <li className="text-gray-900 text-sm mt-3">PROJECTS</li>
            <li className="text-gray-900 text-sm mt-3">TEAM</li>
            <li className="text-gray-900 text-sm mt-3">RESOURCES</li>
            <li className="text-gray-900 text-sm mt-3">DONATE</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
