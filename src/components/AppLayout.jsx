import React, { useState, useRef } from "react";
import { Sidebar, Navbar } from "../components";
import Footer from "./Footer";


const Layout = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const scrollRef = useRef(null);

  return (
    <div >
      <Navbar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <div className="flex bg-gray-50 md:flex-row flex-col transition-height duration-75 ease-out">
        {/* <div
          className="hidden md:block h-screen"
          style={{
            width: "250px",
          }}
        >
          <Sidebar closeToggle={setToggleSidebar} />
        </div> */}
        <div className="flex md:hidden flex-row  ">
          {toggleSidebar && (
            <div className="fixed w-4/5  bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
              <div className="absolute w-full ">
                <Sidebar closeToggle={setToggleSidebar} />
              </div>
            </div>
          )}
        </div>
        <div
          className="main-container  h-full overflow-y-scroll  w-full  bg-[#f5f5f5] z-20"
          ref={scrollRef}
          onClick={()=>{
            setToggleSidebar(false)
          }}
        >
          {children}
        </div>
      </div>
      {/* <MobileNavbar /> */}
      <Footer/>
    </div>
  );
};

export default Layout;
