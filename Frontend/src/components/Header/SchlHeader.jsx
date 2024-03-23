import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SchoolHeader = () => {
  const [profilePic, setProfilePic] = useState(""); // State for school profile picture

  // Sample school data (replace with your actual data)
  const schoolData = [
    {
      id: 1,
      profilePic: "/src/assets/school1.jpg",
    },
    // Add more school objects as needed
  ];

  // Function to fetch school profile picture based on ID
  const fetchProfilePic = (id) => {
    // Replace this with actual logic to fetch school profile picture
    const school = schoolData.find((school) => school.id === id);
    if (school) {
      setProfilePic(school.profilePic);
    }
  };

  useEffect(() => {
    // Fetch school profile picture when component mounts
    fetchProfilePic(1); // Replace 1 with the actual school ID
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
          <h2 className="flex-grow text-xl font-semibold text-center">
            Dashboard
          </h2>{" "}
          {/* Dashboard text in the middle */}
        </div>

        {/* School profile picture */}
        <img
          src={profilePic}
          alt="Profile"
          className="h-10 w-10 rounded-full"
        />
        <Link
          to="/"
          className="bg-custom-purple hover:bg-white text-white hover:text-custom-purple hover:border border-custom-purple py-2 px-3 rounded text-sm font-saira"
        >
          Sign out
        </Link>
      </div>
    </header>
  );
};

export default SchoolHeader;
