import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const VolProfNav = () => {
  const location = useLocation(); // Get the current location
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Overview");

  // Function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (item) => {
    setSelectedItem(item);
    if (isSmallScreen) {
      setIsOpen(false); // Close the dropdown when a link is clicked on smaller screens
    }
  };

  return (
    <nav className="bg-white py-3 px-4">
      <div
        className={`container mx-auto ${
          isSmallScreen ? "justify-start" : "justify-center"
        } flex items-center`}
      >
        {/* Navigation links */}
        {!isSmallScreen ? ( // Render all links for larger screens
          <ul className={`flex space-x-10 items-center`}>
            <li>
              <Link
                to="/"
                className={`text-${
                  isActive("/") ? "custom-green" : "#1B2336"
                } hover:text-gray-300 text-sm`}
                style={{ fontFamily: "Saira" }}
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={`text-${
                  isActive("/") ? "custom-green" : "#1B2336"
                } hover:text-gray-300 text-sm`}
                style={{ fontFamily: "Saira" }}
              >
                Recieved seminar Requests
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={`text-${
                  isActive("/") ? "custom-green" : "#1B2336"
                } hover:text-gray-300 text-sm`}
                style={{ fontFamily: "Saira" }}
              >
                Upcoming Seminars
              </Link>
            </li>
          </ul>
        ) : (
          // Render dropdown for smaller screens
          <div className="relative">
            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none flex items-center"
              onClick={toggleMenu}
            >
              <span className="text-[#2AAA94]">{selectedItem}</span>
              <svg
                className="h-6 w-6 fill-current ml-2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 5a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 7.414 6.707 10.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 5z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 15a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 15z"
                  />
                )}
              </svg>
            </button>
            {isOpen && (
              <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                <li>
                  <Link
                    to="/"
                    className={`block px-4 py-2 text-${
                      isActive("/") ? "custom-green" : "#1B2336"
                    } hover:text-gray-300 text-sm`}
                    onClick={() => handleLinkClick("Overview")}
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={`block px-4 py-2 text-${
                      isActive("/") ? "custom-green" : "#1B2336"
                    } hover:text-gray-300 text-sm`}
                    onClick={() => handleLinkClick("Received Seminar Requests")}
                  >
                    Recieved seminar Requests
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={`block px-4 py-2 text-${
                      isActive("/") ? "custom-green" : "#1B2336"
                    } hover:text-gray-300 text-sm`}
                    onClick={() =>
                      handleLinkClick("Upcoming Seminars")
                    }
                  >
                    Upcoming Seminars
                  </Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default VolProfNav;
