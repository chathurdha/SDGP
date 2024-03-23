import { useState, useEffect } from "react";
//import { Link, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import {
//   ClerkProvider,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/clerk-react";

const OrgHeader = () => {
//  const location = useLocation(); // Get the current location
  const [profilePic, setProfilePic] = useState(""); // State for organization profile picture

  // Sample organization data (replace with your actual data)
  const organizationData = [
    {
      id: 1,
      profilePic: "/src/assets/profile1.jpg",
    },
    // Add more organization objects as needed
  ];

  // Function to fetch organization profile picture based on ID
  const fetchProfilePic = (id) => {
    // Replace this with actual logic to fetch organization profile picture
    const org = organizationData.find((org) => org.id === id);
    if (org) {
      setProfilePic(org.profilePic);
    }
  };

  useEffect(() => {
    // Fetch organization profile picture when component mounts
    fetchProfilePic(1); // Replace 1 with the actual organization ID
  }, []);

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
          <img
            src={profilePic}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />{" "}
          {/* Organization profile picture */}
          <Link
            to="/"
            className="bg-custom-purple hover:bg-white text-white hover:text-custom-purple hover:border border-custom-purple py-2 px-3 rounded text-sm font-saira"
          >
            Sign out
          </Link>
        </div>
      </div>
    </header>
  );
};

export default OrgHeader;
