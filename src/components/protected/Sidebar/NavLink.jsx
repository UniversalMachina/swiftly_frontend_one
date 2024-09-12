import React from "react";
import { Link } from "react-router-dom";

// Props include the icon component, link text, and the href attribute for navigation
const NavLink = ({ Icon, text, path, onSignOut }) => {
  // Function to handle click event
  const handleClick = () => {
    if (text === "Logout" && onSignOut) {
      onSignOut();
    }
  };

  return (
    <li className="list-none">
      <Link
        to={`/${path}`}
        className="flex items-center text-white py-[5px] pl-8 pr-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-300 ease-in-out font-light hover:bg-customColor-150 relative no-underline"
        onClick={handleClick} // Attach the click event handler here
      >
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-customGray-400 hidden hover:block transition-all duration-300 ease-in-out"></div>
        <Icon className="mr-4 text-xl transition-transform duration-300 ease-in-out hover:scale-110" />
        <span className="text-[16px] font-body-base-regular">{text}</span>
      </Link>
    </li>
  );
};

export default NavLink;
