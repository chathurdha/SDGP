import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-20 md:items-center`}
        >
          <li>
            <Link
              to="/Profile"
              className={`text-${isActive('/Profile') ? 'custom-green' : '#0b201c'} hover:text-gray-300 text-sm`}
              style={{ fontFamily: 'Saira' }}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/home"
              className={`text-${isActive('../Home/Homepage.jsx') ? 'custom-green' : '#0b201c'} hover:text-gray-300 text-sm`}
              style={{ fontFamily: 'Saira' }}
            >
              Recieved Seminar Requests
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`text-${isActive('/RecVolReq') ? 'custom-green' : '#0b201c'} hover:text-gray-300 text-sm`}
              style={{ fontFamily: 'Saira' }}
            >
                Received Volunteer Requests
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`text-${isActive('/Seminars') ? 'custom-green' : '#0b201c'} hover:text-gray-300 text-sm`}
              style={{ fontFamily: 'Saira' }}
            >
              Seminars
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`text-${isActive('/Satistics') ? 'custom-green' : '#0b201c'} hover:text-gray-300 text-sm`}
              style={{ fontFamily: 'Saira' }}
            >
              Statistics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )};
// Remove the unnecessary closing curly brace
// };

export default ProfNav;
