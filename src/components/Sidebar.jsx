import React,{useEffect} from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = ({ closeToggle }) => {

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTop()
    }
  }, [])

  return (
    <div className='py-10 overflow-hidden'>
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