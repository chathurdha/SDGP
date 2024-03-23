import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser, UserButton, SignedIn, SignedOut} from "@clerk/clerk-react";


function SignedInContent(){
  return(
    <>
      <div className="flex space-x-6 items-center">

      <Link
        to="/Sign-In"
        className="hidden md:block text-custom-lightb hover:text-gray-300 text-sm"
        style={{ fontFamily: 'Saira' }}
      >
        Sign in
      </Link>
      <Link
        to="/Sign-Up"
        className="bg-custom-purple hover:bg-white text-white hover:text-custom-purple hover:border border-custom-purple py-2 px-3 rounded text-sm"
        style={{ fontFamily: 'Saira' }}
      >
        Sign up
      </Link>
      </div>
    </>
  )
}

function SignedOutContent(){
  const UserType = useUser().user?.unsafeMetadata.Type;
  let UserLink;
  if (UserType == "Volunteer"){
    UserLink = "/Volunteer/Overview"
  }else if (UserType == "Organization"){
    UserLink = "/Organization/Overview"
  }else if (UserType == "School"){
    UserLink = "/School/Overview"
  }
  return(
    <div className="flex space-x-3 items-center">

    <Link
      to={UserLink}
      className="bg-custom-purple hover:bg-white text-white hover:text-custom-purple hover:border border-custom-purple py-2 px-3 rounded text-sm mr-5"
      style={{ fontFamily: "Saira" }}
    >
      Go To Page
    </Link>

      <UserButton
      signInUrl={"/Sign-In"}
      afterSignOutUrl= {"/"}/>
              
    </div>
  )
}

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
    <nav className="bg-white py-3 px-4 fixed w-screen z-10">
      <div className="container mx-auto flex justify-between items-center">
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
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-20 md:items-center`}
        >
          <li>
            <Link
              to="/"
              className={`text-${
                isActive("/") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm font-saira`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/past-events"
              className={`text-${
                isActive("/past-events") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm font-saira`}
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
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={`text-${
                isActive("/about-us") ? "custom-green" : "#0b201c"
              } hover:text-gray-300 text-sm font-saira`}
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Sign in and Sign up buttons */}
        <SignedIn>
          <SignedOutContent />
        </SignedIn>

        <SignedOut>
          <SignedInContent />
        </SignedOut>
        
      </div>
    </nav>
  );
};

export default Navbar;
