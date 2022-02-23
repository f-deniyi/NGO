import React from "react";
import { ImSearch } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaShoppingCart, FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const isNotActiveStyle =
    "mb-0 ";
  const isActiveStyle =
    "text-[#967969] font-bold mb-0 ";
  return (
    <div className="block md:hidden  fixed bottom-0 w-full flex gap-2 mb-0 items-center bg-white border-t-2 border-slate-200 shadow-md justify-between py-4 px-5">
      <NavLink
        to="/app/overview"
        className={({ isActive }) =>
          isActive ? isActiveStyle : isNotActiveStyle
        }
      >
        <AiFillHome fontSize={"31px"} />
      </NavLink>
      <div className="relative  mb-0 py-2 px-2 rounded-full h-8 w-8 ">
        <FaShoppingCart
          className=""
          fontSize={"25px"}
        />
        <div className="bg-red-700 w-5 h-5 -top-1  -right-2 rounded-full absolute ">
          <p className=" text-white   right-0 font-light text-center text-sm">
            3
          </p>
        </div>
      </div>
      <div className=" mb-0 py-2 px-2 rounded-full h-8 w-8 ">
        <ImSearch
          className=""
          fontSize={"23px"}
        />
      </div>
      <div className=" mb-0 py-2 px-2 rounded-full h-8 w-8 ">
        <FaBell
          className=""
          fontSize={"25px"}
        />
      </div>
      <div className=" mb-0 py-2 px-2 rounded-full h-8 w-8 ">
        <BsEnvelopeFill
          className=""
          fontSize={"25px"}
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
