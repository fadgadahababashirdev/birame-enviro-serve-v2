import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../features/toggleSlice';
import { Link } from 'react-scroll';
import './styles.css';
const Navbar = () => {
  // changing the color on Scroll
  const [navColor, setNavColor] = useState(false);
  // handle navColor
  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  console.log(navColor);
  // adding an event listener
  window.addEventListener('scroll', handleScroll);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.menu);

  const handleToggleChange = () => dispatch(toggle());
  console.log('The current state is', data);
  return (
    <div
      className={
        navColor
          ? 'bg-white fixed w-screen h-10 md:h-30  px-10 py-12 items-center flex justify-between border-b  border-gray-700top-0 left-0'
          : 'relative w-screen h-30 px-10 py-12 items-center flex justify-between border-b  border-gray-700 top-0 left-0'
      }
    >
      {/* Logo container */}
      <div className="">
        {navColor ? (
          <img
            src="../public/ProjectsFiles/logo-compressed.png"
            alt="image not found"
            className="w-30 h-12"
          ></img>
        ) : (
          ''
        )}
      </div>
      {/* list container */}
      <div>
        {/* unordered lists */}
        <ul className=" gap-10 hidden md:flex ">
          <Link
            to="About us"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <li
              className={
                navColor
                  ? 'text-gray-400 text-xl font-semibold'
                  : 'text-white text-xl font-semibold'
              }
            >
              ABOUT US
            </li>
          </Link>
          <Link
            to="Resource"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <li
              className={
                navColor
                  ? 'text-gray-400 text-xl font-semibold'
                  : 'text-white text-xl font-semibold'
              }
            >
              WHAT WE DO
            </li>
          </Link>
          <li
            className={
              navColor
                ? 'text-gray-400 text-xl font-semibold'
                : 'text-white text-xl font-semibold'
            }
          >
            PROJECTS
          </li>
          <li
            className={
              navColor
                ? 'text-gray-400 text-xl font-semibold'
                : 'text-white text-xl font-semibold'
            }
          >
            TEAM
          </li>
          <li
            className={
              navColor
                ? 'text-gray-400 text-xl font-semibold'
                : 'text-white text-xl font-semibold'
            }
          >
            RESOURCES
          </li>
          <li
            className={
              navColor
                ? 'text-gray-400 text-xl font-semibold'
                : 'text-white text-xl font-semibold'
            }
          >
            DONATE
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <HiOutlineMenuAlt1 onClick={handleToggleChange} />
      </div>
      {data && (
        <div className="lists absolute left-0 top-0 mt-28 text-white z-20 white bg-white w-screen h-fit p-5 navb">
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
