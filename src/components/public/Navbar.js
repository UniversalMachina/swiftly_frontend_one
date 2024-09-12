import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, onSignOut }) => {
  return (
    <div className="flex items-center overflow-visible fixed top-5 z-50 w-full font-poppins">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="px-[60px]"
      >
        <path
          d="M12 2L2 7h20L12 2zM2 7v10l10 5 10-5V7L12 12 2 7z"
          fill="#1F2937"
        />
      </svg>

      <header className="bg-white text-black shadow-lg rounded-full w-[1680px] overflow-visible">
        <div className="h-20 py-0 px-10 flex items-center justify-between">
          <div className="flex items-center justify-around w-full">
            <Link
              to="/"
              className="text-lg text-black hover:text-gray-500 transition duration-300 no-underline"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-lg text-black hover:text-gray-500 transition duration-300 no-underline"
            >
              About Us
            </Link>
            <Link
              to="/features"
              className="text-lg text-black hover:text-gray-500 transition duration-300 no-underline"
            >
              Features
            </Link>
            <Link
              to="/services"
              className="text-lg text-black hover:text-gray-500 transition duration-300 no-underline"
            >
              Services
            </Link>
            <Link
              to="/contact-us"
              className="text-lg text-black hover:text-gray-500 transition duration-300 no-underline"
            >
              Contact Us
            </Link>
            <Link
              to="/pricing"
              className="text-lg text-black hover:text-gray-500 transition duration-300 no-underline"
            >
              Pricing
            </Link>
            <Link
              to="/faqs"
              className="text-lg text-black hover:text-gray-500 transition duration-300 no-underline"
            >
              FAQs
            </Link>

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
        </div>
      </header>
    </div>
  );
};

export default Navbar;
