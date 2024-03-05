import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const [isOpen, setIsOpen] = useState(false);

  // Function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-3 px-4 fixed w-screen z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          <img
            src="/src/assets/fullLogo.svg"
            alt="Logo"
            className="h-10 w-17 mr-4"
          />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="mobile-menu-button focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-20 md:items-center`}
        >
          <li>
            <Link
              to="/"
              className={`text-${
                isActive("/") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm`}
              style={{ fontFamily: "Saira" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/past-events"
              className={`text-${
                isActive("/past-events") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm`}
              style={{ fontFamily: "Saira" }}
            >
              Past Events
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`text-${
                isActive("/contact-us") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm`}
              style={{ fontFamily: "Saira" }}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={`text-${
                isActive("/about-us") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm`}
              style={{ fontFamily: "Saira" }}
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Sign in and Sign up buttons */}
        <div className="flex space-x-6 items-center">
          <Link
            to="/sign-in"
            className="hidden md:block text-custom-lightb hover:text-gray-300 text-sm"
            style={{ fontFamily: "Saira" }}
          >
            Sign in
          </Link>
          <Link
            to="/sign-up"
            className="bg-custom-purple hover:bg-white text-white hover:text-custom-purple hover:border border-custom-purple py-2 px-3 rounded text-sm"
            style={{ fontFamily: "Saira" }}
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
