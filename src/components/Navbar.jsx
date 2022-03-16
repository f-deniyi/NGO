import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Navbar = ({ toggleSidebar, setToggleSidebar }) => {
  return (
    <div className="!bg-white  z-5 fixed flex gap-2 md:gap-5 w-full py-3 px-7 md:px-10 top-0 z-50 justify-between items-center shadow-sm border-b-2 border-grey-700">
      {/* <h1 className="text-3xl"></h1>
       */}
      <img src={logo} alt="..." className="w-[15%] md:w-[6.5%]" />

      <div className="flex gap-5 mb-0 items-center hidden md:flex justify-between">
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            isActive ? "text-xl font-bold text-[#fbb771]" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={`/about`}
          className={({ isActive }) =>
            isActive ? "text-xl font-bold text-[#fbb771] " : ""
          }
        >
          About
        </NavLink>

        <NavLink
          to={`/projects`}
          className={({ isActive }) =>
            isActive ? "text-xl font-bold text-[#fbb771]" : ""
          }
        >
          Projects
        </NavLink>

        <NavLink
          to={`/contact`}
          className={({ isActive }) =>
            isActive ? "text-xl font-bold text-[#fbb771]" : ""
          }
        >
          Contact Us
        </NavLink>
      </div>
      <div
        className="block md:hidden"
        onClick={() => {
          setToggleSidebar(!toggleSidebar);
        }}
      >
        
        {toggleSidebar ? <FaTimes color="#fbb771" className=" text-[2em]"/> : <HiMenuAlt3 color="#fbb771" className="font-bold text-[2.7em]" />}
      </div>
      <div className="hidden md:block"> </div>
    </div>
  );
};

export default Navbar;
