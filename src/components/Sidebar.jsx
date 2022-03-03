import React from "react";
import { NavLink, Link } from "react-router-dom";
import { sidebarMenu } from '../utils/data';


const Sidebar = ({ user, closeToggle }) => {
  const isNotActiveStyle =
    "flex items-center px-5 gap-3 my-2 py-2 text-gray-500 hover:text transition-all duration-200 ease-in-out capitalize";
  const isActiveStyle =
    "flex items-center px-5 gap-3 my-2 py-2 rounded-md text-[#f8f8f8] font-extrabold  border-right-3 border-2 bg-[#CC5500] text-white mr-2 transition-all duration-200 ease-in-out capitalize";

  const handleCloseSidebar = () => {
    if (closeToggle !== undefined) {
      closeToggle(false);
    }
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        {sidebarMenu.map(({ name,icon,link }) => (
          <NavLink
            key={name}
            to={`${link}`}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            {icon}
            {name}
          </NavLink>
        ))}
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="p-2 flex my-5 mb-3 gap-2 items-center bg-white rounded-lg shadow-lg mx-3"
        >
          <img
            src={user.image}
            className="w-10 h-10 rounded-full"
            alt="user-profile"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
