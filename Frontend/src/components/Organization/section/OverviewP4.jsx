/* eslint-disable no-irregular-whitespace */



import { useState, useEffect } from "react";
import axios from "axios";
import MatchingSeminars from "../../Common/PastE-Sections/MatchingSeminars";
import { Link } from "react-router-dom";

const OverviewP4 = () => {
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const fetchPastEvents = async () => {
      try {
        // Replace 'orgId' with the ID of the user's organization
        const response = await axios.get(
          `http://localhost:4000/api/Seminar`
        );
        setPastEvents(response.data);
      } catch (error) {
        console.error("Error fetching past events:", error);
      }
    };

    fetchPastEvents();
  }, []);

  const firstThreeEvents = pastEvents.slice(0, 3);

  return (
    <>
      <div className="flex justify-center h-auto mb-[4%]">
        <div className="w-[70%]">
          <div className=" relative">
            <h1 className="text-2xl py-8 text-center font-medium">Seminars</h1>
            <Link
              to="/UpSeminar" // Adjust the link as per your application
              className="underline text-right pr-4 pb-2 md:block text-custom-lightb hover:text-gray-300 text-sm font-saira"
              style={{ fontFamily: "Saira" }}
            >
              See more
            </Link>
            <MatchingSeminars seminars={firstThreeEvents} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewP4;

/* eslint-enable no-irregular-whitespace */
