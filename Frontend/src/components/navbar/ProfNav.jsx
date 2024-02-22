import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ProfNav = () => {
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
    <nav className="bg-white py-3 px-4 w-screen ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-20 md:items-center`}
        >
          <li>
            <Link
              to="/overview"
              className={`text-${
                isActive("/overview") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm`}
              style={{ fontFamily: "Saira" }}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/Seminar"
              className={`text-${
                isActive("/Seminar") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm`}
              style={{ fontFamily: "Saira" }}
            >
              Received Seminar Requests
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
              Received Volunteer Requests
            </Link>
          </li>
          <li>
            <Link
              to="/PrevEvents"
              className={`text-${
                isActive("/PrevEvents") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm`}
              style={{ fontFamily: "Saira" }}
            >
              Seminars
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
              Statistics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ProfNav;
