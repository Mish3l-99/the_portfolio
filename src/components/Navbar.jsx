import React, { useState } from "react";
import Logo from "../assets/MN.png";
import CV from "../assets/CV.pdf";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [mobnav, setmobnav] = useState(false);
  const navToggleHandler = () => setmobnav(!mobnav);
  return (
    <div className="fixed w-full h-[65px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-sm shadow-[#ff161669]">
      <div className="z-10">
        <a href="#home">
          <img
            src={Logo}
            alt="logo"
            className="h-[40px] md:h-[36px] object-contain"
          />
        </a>
      </div>
      <div>
        <ul className="hidden md:flex">
          <li className="web-menu">
            <a href="#home">Home</a>
          </li>
          <li className="web-menu">
            <a href="#about">About</a>
          </li>
          <li className="web-menu">
            <a href="#skills">Skills</a>
          </li>
          <li className="web-menu">
            <a href="#work">Work</a>
          </li>
          <li className="web-menu">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={navToggleHandler} className="md:hidden z-10 text-xl">
        {mobnav ? <FaTimes /> : <FaBars />}
      </div>
      {/* MobileMenu */}
      <div
        className={
          mobnav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex felx-col justify-center items-center md:hidden duration-700"
            : "absolute top-0 left-[-100%] w-full h-screen bg-[#0a192f] flex felx-col justify-center items-center md:hidden duration-700"
        }
      >
        <ul>
          <li className="mob-menu">
            <a onClick={navToggleHandler} href="#home">
              Home
            </a>
          </li>
          <li className="mob-menu">
            <a onClick={navToggleHandler} href="#about">
              About
            </a>
          </li>
          <li className="mob-menu">
            <a onClick={navToggleHandler} href="#skills">
              Skills
            </a>
          </li>
          <li className="mob-menu">
            <a onClick={navToggleHandler} href="#work">
              Work
            </a>
          </li>
          <li className="mob-menu">
            <a onClick={navToggleHandler} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* SocialIcons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="social-menu bg-blue-600">
            <a href="https://www.linkedin.com/in/mishaal-noureldien-204294208/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="social-menu bg-gray-700">
            <a href="https://github.com/Mish3l-99">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="social-menu bg-green-600">
            <a href="mailto:meshaal.nasor10@gmail.com">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="social-menu bg-[#ff1616]">
            <a href={CV} download>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
