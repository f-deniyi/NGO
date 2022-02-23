import React from "react";
import { IoMdSearch } from "react-icons/io";
import { BsChatSquareTextFill } from "react-icons/bs";
import { FaShoppingCart, FaBell } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import userImage from "../assets/user.JPG";

const Navbar = ({ toggleSidebar, setToggleSidebar }) => {
  return (
    <div className="flex gap-2 md:gap-5 w-full py-2 px-5 justify-between items-center shadow-sm border-b-2 border-grey-700">
      <div className="block md:hidden ">
        {!toggleSidebar && (
          <HiMenu
            className="text-[#967969] font-bold"
            fontSize={"30px"}
            onClick={() => setToggleSidebar(!toggleSidebar)}
          />
        )}
        {toggleSidebar && (
          <FaTimes
            className="text-[#967969] font-bold"
            fontSize={"30px"}
            onClick={() => setToggleSidebar(!toggleSidebar)}
          />
        )}
      </div>
      <h1 className="text-3xl">PAF</h1>
      <div className=" hidden md:flex justify-start items-center w-96  px-2 rounded-md  border-none outline-none focus:within:shadow-sm bg-slate-200">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          className="p-2 w-full bg-slate-200 outline-none text-sm"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-2 mb-0 items-center">
        <div className="hidden md:block relative bg-[#f8f8f8] shadow-md mb-0 py-2 px-2 rounded-full h-8 w-8 ">
          <FaShoppingCart className="flex items-center justify-center" />
          <div className="bg-red-700 w-5 h-5 -top-1  -right-2 rounded-full absolute ">
            <p className=" text-white   right-0 font-light text-center text-sm">
              3
            </p>
          </div>
        </div>
        <div className="hidden md:block bg-[#f8f8f8] shadow-md mb-0 py-2 px-2 rounded-full h-8 w-8 ">
          <FaBell className="flex items-center justify-center" />
        </div>
        <div className="hidden md:block bg-[#f8f8f8] shadow-md mb-0 py-2 px-2 rounded-full h-8 w-8 ">
          <BsChatSquareTextFill className="flex items-center justify-center" />
        </div>
        <img
          src={userImage}
          alt="user-img"
          className="w-10 shadow-md border-[#967969] border-2 rounded-full h-10 mb-0"
        />
      </div>
    </div>
  );
};

export default Navbar;
