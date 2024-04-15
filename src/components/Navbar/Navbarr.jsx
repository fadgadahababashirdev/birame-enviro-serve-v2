import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-scroll';

import './styles.css';
const Navbarr = () => {
  const [scroll, setScrolll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScrolll(true);
    } else {
      setScrolll(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      <header
        className={
          scroll
            ? 'bg-white header border-b border-white fixed left-0 top-0 z-50 md:py-10'
            : 'header border-b  left-0 top-0 fixed z-50 md:py-10'
        }
      >
        <a href="" className="logo">
          {scroll && (
            <img
              src="../logo nganji.png"
              alt="image not found"
              className="w-36 h-full  pl-6"
            ></img>
          )}
        </a>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <RiMenu2Line id="menu" />
          <FaTimes id="close" />
        </label>
        <nav className="navbar pr-40">
          <Link to="aboutus" smooth={true} duration={1000}>
            {' '}
            <a
              href=""
              className={
                scroll
                  ? 'text-gray-900 text-lg font-semibold'
                  : 'text-black lg:text-white  text-lg '
              }
            >
              ABOUT US
            </a>
          </Link>
          <Link to="whatwedo" smooth={true} duration={1000}>
            <a
              href=""
              className={
                scroll
                  ? 'text-gray-900 text-lg font-semibold'
                  : 'text-black lg:text-white  text-lg'
              }
            >
              WHAT WE DO
            </a>
          </Link>
          <Link to="ourprojects" smooth={true} duration={1000}>
            <a
              href=""
              className={
                scroll
                  ? 'text-gray-900 text-lg font-semibold'
                  : 'text-black lg:text-white  text-lg'
              }
            >
              PROJECTS
            </a>
          </Link>
          <Link to="team" smooth={true} duration={1000}>
            <a
              href=""
              className={
                scroll
                  ? 'text-gray-900 text-lg font-semibold'
                  : 'text-black lg:text-white  text-lg'
              }
            >
              TEAM
            </a>
          </Link>
          <Link to="Resource" smooth={true} duration={1000}>
            <a
              href=""
              className={
                scroll
                  ? 'text-gray-900 text-lg font-semibold'
                  : 'text-black lg:text-white  text-lg'
              }
            >
              RESOURCES
            </a>
          </Link>
          <Link to="donate" smooth={true} duration={1000}>
            <a
              href=""
              className={
                scroll
                  ? 'text-gray-900 text-lg font-semibold'
                  : 'text-black pb-3 lg:text-white  text-lg'
              }
            >
              DONATE
            </a>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbarr;
