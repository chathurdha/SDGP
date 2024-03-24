import { useState, useEffect } from "react";
//import { Link, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";

const OrgHeader = () => {


  return (
    <header className="bg-white py-3 px-4 fixed w-screen z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img
            src="/src/assets/fullLogo.svg"
            alt="Logo"
            className="h-10 w-17 mr-4"
          />
        </div>

        {/* Dashboard text in the middle */}
        <h2 className="flex-grow text-xl font-semibold text-center">
          Dashboard
        </h2>

        {/* Organization profile picture and sign-out button */}
        <div className="flex items-center space-x-4">
          <UserButton />
          {/* Organization profile picture */}
          <SignOutButton >
            <Link
              to="/"
              className="bg-custom-purple hover:bg-white text-white hover:text-custom-purple hover:border border-custom-purple py-2 px-3 rounded text-sm font-saira"
            >
              Sign out
            </Link>
          </ SignOutButton>
        </div>
      </div>            
    </header>
  );
};

export default OrgHeader;
