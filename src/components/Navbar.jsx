import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaInstagram,
  FaMediumM,
  FaLinkedinIn,
} from 'react-icons/fa';
import { 
    RiBubbleChartLine,
    RiAncientPavilionFill,
    RiHome5Line,
    RiFocusLine,
    RiCollageLine,
    RiLayoutTop2Line,
    RiLayoutRowLine,
} from "react-icons/ri";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const icons = [
    RiBubbleChartLine,
    RiAncientPavilionFill,
    RiHome5Line,
    RiFocusLine,
    RiCollageLine,
    RiLayoutTop2Line,
    RiLayoutRowLine,
  ]
  const randomIndex = Math.floor(Math.random() * icons.length)
  const RandomIcon = icons[randomIndex]

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#ffffff] z-40 border-b-2 sm:border-0'>
      <div className='flex justify-between items-center w-40'>
        {/* <div class="w-6 h-6 mr-2 border-solid border-2"></div> */}
        <RandomIcon size={30} />
        <h1 className="text-xl font-semibold cursor-default hover:cursor-pointer"><Link to='home' smooth={true} duration={500}>Shawn Kok.</Link></h1>
      </div>

      {/* menu */}
      <ul className='hidden md:flex items-center text-s font-medium '>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home.
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About.
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects.
          </Link>
        </li>
        <li className='border-2 hover:bg-secondary hover:text-[#ffffff] rounded-xl py-2 ml-2'>
          <Link to='contact' smooth={true} duration={500}>
            Say Hi!
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-default hover:cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[200px] h-[60px] flex justify-between items-center px-5 ml-[-90px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full '
              href='https://www.linkedin.com/in/shawn-kok' target="_blank" rel="noopener noreferrer"
            >
              Linkedin <FaLinkedinIn size={30} />
            </a>
          </li>
          <li className='w-[200px] h-[60px] flex justify-between items-center px-5 ml-[-90px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full '
              href='https://github.com/Kok-je' target="_blank" rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[200px] h-[60px] flex justify-between items-center px-5 ml-[-90px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full '
              href='https://www.instagram.com/therealkokje' target="_blank" rel="noopener noreferrer"
            >
              Insta <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[200px] h-[60px] flex justify-between items-center px-5 ml-[-90px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full '
              href='https://shawnkok00.medium.com/' target="_blank" rel="noopener noreferrer"
            >
              Medium <FaMediumM size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;