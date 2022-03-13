import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggleSidebar, setToggleSidebar }) => {
  return (
    <div className="!bg-white py-4 z-5 fixed flex gap-2 md:gap-5 w-full py-3 px-5 md:px-10 top-0 z-50 justify-between items-center shadow-sm border-b-2 border-grey-700">
      <h1 className="text-3xl">PWH</h1>

      <div className="flex gap-2 mb-0 items-center">
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
            isActive ? "text-xl font-bold text-[#fbb771]" : "mx-5"
          }
        >
          About
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
      <div>
        {" "}
      </div>
    </div>
  );
};

export default Navbar;
