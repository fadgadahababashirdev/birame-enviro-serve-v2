import React, { useState } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../features/toggleSlice';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
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
          ? 'bg-white fixed w-screen h-10 md:h-30  px-10 py-12 items-center flex justify-between border-b  border-gray-700 top-0 left-0'
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
        <ul className=" gap-10 hidden lg:flex ">
          <li
            className={
              navColor
                ? 'text-slate-900 text-xl font-semibold cursor-pointer '
                : 'text-white text-xl font-semibold cursor-pointer '
            }
          >
            <Link to="aboutus" smooth={true} duration={1000}>
              {' '}
              ABOUT US
            </Link>
          </li>
          <li
            className={
              navColor
                ? 'text-slate-900 text-xl font-semibold cursor-pointer '
                : 'text-white text-xl font-semibold cursor-pointer '
            }
          >
            <Link to="whatwedo" smooth={true} duration={1000}>
              WHAT WE DO
            </Link>
          </li>
          <li
            className={
              navColor
                ? 'text-slate-900 text-xl font-semibold cursor-pointer '
                : 'text-white text-xl font-semibold cursor-pointer '
            }
          >
            <Link to="ourprojects" smooth={true} duration={1000}>
              PROJECTS
            </Link>
          </li>
          <li
            className={
              navColor
                ? 'text-slate-900 text-xl font-semibold cursor-pointer '
                : 'text-white text-xl font-semibold cursor-pointer '
            }
          >
            <Link to="team" smooth={true} duration={1000}>
              <span>TEAM</span>
            </Link>
          </li>
          <li
            className={
              navColor
                ? 'text-slate-900 text-xl font-semibold cursor-pointer '
                : 'text-white text-xl font-semibold cursor-pointer '
            }
          >
            <Link to="Resource" smooth={true} duration={1000}>
              RESOURCES
            </Link>
          </li>
          <li
            className={
              navColor
                ? 'text-slate-900 text-xl font-semibold cursor-pointer '
                : 'text-white text-xl font-semibold cursor-pointer '
            }
          >
            DONATE
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <HiOutlineMenuAlt1 onClick={handleToggleChange} />
      </div>
      {data && (
        <div className="lists absolute left-0 top-0 mt-28 md:mt-24 text-white z-20 white bg-white w-screen h-fit p-5 navb">
          <div>
            <ul className=" gap-10  block pt-4">
              <li className="text-gray-900 text-sm mt-3 cursor-pointer">
                <Link to="aboutus" duration={1000} smooth={true}>
                  ABOUT US
                </Link>
              </li>
              <li className="text-gray-900 text-sm mt-3 cursor-pointer">
                <Link to="whatwedo" duration={1000} smooth={true}>
                  WHAT WE DO
                </Link>
              </li>
              <li className="text-gray-900 text-sm mt-3 cursor-pointer">
                <Link to="ourprojects" duration={1000} smooth={true}>
                  PROJECTS
                </Link>
              </li>
              <li className="text-gray-900 text-sm mt-3 cursor-pointer">
                <Link to="team" duration={1000} smooth={true}>
                  TEAM
                </Link>
              </li>
              <li className="text-gray-900 text-sm mt-3 cursor-pointer">
                <Link to="Resource" duration={1000} smooth={true}>
                  RESOURCES
                </Link>
              </li>
              <li className="text-gray-900 text-sm mt-3 cursor-pointer">
                <Link to="#">DONATE</Link>
              </li>
            </ul>
            <div className="text-black text-2xl flex justify-center w-full pt-4 pb-4 absolute top-0 left-0">
              <FaTimes onClick={handleToggleChange}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
