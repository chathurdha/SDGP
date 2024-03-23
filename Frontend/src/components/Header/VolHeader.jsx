import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VolunteerHeader = () => {
  const [profilePic, setProfilePic] = useState(""); // State for volunteer profile picture

  // Sample volunteer data (replace with your actual data)
  const volunteerData = [
    {
      id: 1,
      profilePic: "/src/assets/volunteer1.jpg",
    },
    // Add more volunteer objects as needed
  ];

  // Function to fetch volunteer profile picture based on ID
  const fetchProfilePic = (id) => {
    // Replace this with actual logic to fetch volunteer profile picture
    const volunteer = volunteerData.find((volunteer) => volunteer.id === id);
    if (volunteer) {
      setProfilePic(volunteer.profilePic);
    }
  };

  useEffect(() => {
    // Fetch volunteer profile picture when component mounts
    fetchProfilePic(1); // Replace 1 with the actual volunteer ID
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

export default VolunteerHeader;
