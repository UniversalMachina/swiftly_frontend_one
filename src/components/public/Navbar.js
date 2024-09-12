import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, onSignOut }) => {
  return (
    <div className="flex items-center overflow-visible fixed top-5 z-50 w-full font-poppins px-[80px]">
      <header className="bg-white text-black shadow-lg rounded-full w-full overflow-visible">
        <div className="h-20 py-0 pr-[100px] pl-10 flex items-center justify-end">
          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="bg-black py-2 px-4 rounded-full text-white hover:bg-gray-700 transition duration-300 no-underline"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white py-2 px-4 rounded-full text-black border border-black hover:bg-gray-300 transition duration-300 no-underline"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={onSignOut}
                className="bg-white py-2 px-4 rounded-full text-black border border-black hover:bg-gray-300 transition duration-300"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
