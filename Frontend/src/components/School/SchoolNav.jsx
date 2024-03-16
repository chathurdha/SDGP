import {Link, useLocation} from "react-router-dom"
import React, {useState} from "react";

export default function SchoolNav(){
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
                            style={{fontFamily: "Saira"}}
                        >
                            Overview
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/send-seminar-requests"
                            className={`text-${
                                isActive("/send-seminar-requests") ? "custom-green" : "#0b201c"
                            } hover:text-gray-300 text-sm`}
                            style={{fontFamily: "Saira"}}
                        >
                            Send Seminar Requests
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/upcoming-seminars"
                            className={`text-${
                                isActive("/upcoming-seminars") ? "custom-green" : "#0b201c"
                            } hover:text-gray-300 text-sm`}
                            style={{fontFamily: "Saira"}}
                        >
                            Upcoming Seminars
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/past-seminars"
                            className={`text-${
                                isActive("/past-seminars") ? "custom-green" : "#0b201c"
                            } hover:text-gray-300 text-sm`}
                            style={{fontFamily: "Saira"}}
                        >
                            Past Seminars
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/send-reviews"
                            className={`text-${
                                isActive("/send-reviews") ? "custom-green" : "#0b201c"
                            } hover:text-gray-300 text-sm`}
                            style={{fontFamily: "Saira"}}
                        >
                            Send Reviews
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/reviews"
                            className={`text-${
                                isActive("/reviews") ? "custom-green" : "#0b201c"
                            } hover:text-gray-300 text-sm`}
                            style={{fontFamily: "Saira"}}
                        >
                            Reviews
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}