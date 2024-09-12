import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";
import NavLink from "./NavLink"; // Import the NavLink component

const Sidebar = ({ fixed, onSignOut }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const positionClass = fixed ? "fixed" : "sticky";
  const toggleSidebar = () => setIsMinimized(!isMinimized);

  return (
    <div
      className={`${positionClass} top-0 h-screen ${
        isMinimized ? "w-16" : "w-[244px]"
      } bg-customColor-300 shadow-lg border-r border-gray-300 transition-width duration-300`}
    >
      <div
        className={`p-5 flex ${
          isMinimized ? "justify-center" : "justify-between"
        } items-center border-b border-gray-200 mb-4`}
      >
        {!isMinimized && (
          <h1 className="font-dm-sans font-medium text-[20px] text-white">
            Stammer
          </h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 bg-customColor-300 rounded focus:outline-none"
          style={{ color: "white", fontSize: "1.44rem" }} // text-3xl equivalent
        >
          <FaBars />
        </button>
      </div>
      {!isMinimized && (
        <ul className="space-y-2 p-0 m-0">
          <NavLink
            Icon={FaHome}
            text="Dashboard"
            path="dashboard"
            onSignOut={onSignOut}
          />
          <NavLink
            Icon={FaUser}
            text="Profile"
            path="profile"
            onSignOut={onSignOut}
          />
          <NavLink
            Icon={FaCog}
            text="Settings"
            path="settings"
            onSignOut={onSignOut}
          />
          <NavLink
            Icon={FaCog}
            text="Chatbot"
            path="chatbot-interaction-page"
            onSignOut={onSignOut}
          />
          <NavLink
            Icon={FaCog}
            text="Bot-Test"
            path="chatbot-testing-page"
            onSignOut={onSignOut}
          />

          <NavLink
            Icon={FaSignOutAlt}
            text="Logout"
            path=""
            onSignOut={onSignOut}
          />
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
