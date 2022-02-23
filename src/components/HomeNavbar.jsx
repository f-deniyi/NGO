import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

import { MobileSidebar } from "./";

const HomeNavbar = () => {
  const navigate = useNavigate();
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      <div className="z-50 bg-white fixed flex gap-2 md:gap-5 w-full py-3 px-7 justify-between items-center shadow-sm border-b-2 border-grey-700">
        <h1 className="text-3xl">PAF</h1>
        <div className="md:flex gap-2 mb-0 items-center hidden ">
          <button
            className="py-2 mb-0 btn-lg rounded-md mx-auto px-9 bg-[#967969] text-white"
            onClick={() => navigate("/auth/login")}
          >
            Signin
          </button>
          <button
            className="py-2 mb-0 btn-lg rounded-md mx-auto px-9 bg-[#967969] text-white"
            onClick={() => navigate("/auth/register")}
          >
            Signup
          </button>
        </div>
        <div className="md:hidden block">
        {!toggleSidebar && <HiMenu
            className="text-[#967969] font-bold"
            fontSize={"40px"}
            onClick={() => setToggleSidebar(!toggleSidebar)}
          />
        }
         {toggleSidebar && <FaTimes
            className="text-[#967969] font-bold"
            fontSize={"40px"}
            onClick={() => setToggleSidebar(!toggleSidebar)}
          />
        }
        </div>
      </div>
      {toggleSidebar && (
        <div className="md:hidden fixed w-full  overflow-y-auto shadow-lg bg-white z-90 animate-slide-in">
          {/* <div className="absolute w-full "> */}
            <MobileSidebar closeToggle={() => setToggleSidebar(false)} />
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default HomeNavbar;
