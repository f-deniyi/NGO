import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = ({ closeToggle }) => {
  return (
    <div className='py-10'>
      <div className=" mb-0 text-center flex flex-col">
        <NavLink
          to={`/`}
          onClick={()=>{closeToggle(false)}}
          className={({ isActive }) =>
            isActive ? "text-xl font-bold text-[#fbb771] mb-5" : "text-[1.2em] text-white mb-5"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={`/about`}
          onClick={()=>{closeToggle(false)}}

          className={({ isActive }) =>
            isActive ? "text-xl font-bold text-[#fbb771] mb-5" : "text-[1.2em] text-white mb-5"
          }
        >
          About
        </NavLink>

        <NavLink
          to={`/contact`}
          onClick={()=>{closeToggle(false)}}

          className={({ isActive }) =>
            isActive ? "text-xl font-bold text-[#fbb771] mb-5" : "text-[1.2em] text-white mb-5"
          }
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar