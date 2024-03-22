/* eslint-disable react/prop-types */


import { Link, useLocation } from "react-router-dom";

const SeminarBtns = ({ upcomingPageUrl, previousPageUrl }) => {
  const location = useLocation(); // Get the current location
  return (
    <div className="flex justify-center pt-7">
      <Link
        to={upcomingPageUrl}
        className={`w-80 h-12 flex items-center justify-center text-center rounded-l-full font-bold py-3 px-4 focus:outline-none focus:shadow-outline ${
          location.pathname === upcomingPageUrl
            ? "bg-[#8260E2] text-white shadow-xl"
            : "bg-white text-[#8260E2] shadow-lg"
        }`}
        style={{
          boxShadow: "0 0 40px rgba(0, 0, 0, 0.08)",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Upcoming Seminars
      </Link>
      <Link
        to={previousPageUrl}
        className={`w-80 h-12 flex items-center justify-center text-center rounded-r-full font-bold py-3 px-4 focus:outline-none focus:shadow-outline ${
          location.pathname === previousPageUrl
            ? "bg-[#8260E2] text-white shadow-xl"
            : "bg-white text-[#8260E2] shadow-lg"
        }`}
        style={{
          boxShadow: "0 0 40px rgba(0, 0, 0, 0.08)",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Previous Seminars
      </Link>
    </div>
  );
};

export default SeminarBtns;


/* eslint-enable react/prop-types */

