/* eslint-disable no-irregular-whitespace */


import { useState, useEffect } from "react";
import axios from "axios";
import FilterSeminars from "../../ReceivedSeminarRequests/FilterSeminars";
import { Link } from "react-router-dom";

const OverviewP2 = () => {
  const [combinedArray, setCombinedArray] = useState([]);
  const [seminars, setSeminars] = useState([]);
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchData = async (apiUrl) => {
      try {
        const response = await axios.get(apiUrl);
        switch (apiUrl) {
          case "http://localhost:4000/api/schools":
            setSchools(response.data);
            break;
          case "http://localhost:4000/api/seminars":
            setSeminars(response.data);
            break;
          default:
            console.warn("Unexpected API URL:", apiUrl);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData("http://localhost:4000/api/schools");
    fetchData("http://localhost:4000/api/seminars");
  }, []);

  useEffect(() => {
    const fetchCombinedArray = async () => {
      try {
        if (!schools.length || !seminars.length) {
          return;
        }

        const findSchoolForSeminar = (seminarId) => {
          return schools.find((school) => school._id === seminarId);
        };
        const filteredSeminars = seminars.filter(
          (seminar) => seminar.status === "pending"
        );

        const combinedArray = filteredSeminars.map((seminar) => {
          const school = findSchoolForSeminar(seminar.schoolId);
          return {
            ...seminar,
            schoolId: school?._id,
            schoolName: school?.name,
            schoolAddress: school?.address,
            schoolProfileColor: school?.profileColor,
            schoolProfileImageAvailable: school?.profileImageAvailable,
          };
        });

        setCombinedArray(combinedArray);
      } catch (error) {
        console.error("Error combining seminars and schools:", error);
      }
    };

    if (schools.length && seminars.length) {
      fetchCombinedArray();
    }
  }, [schools, seminars]);

  // Filter seminars based on the organization's ID
  const organizationId = "616c81d8f6c4b5c2a0c5b4d"; // Replace with dynamic organization ID
  const filterSeminars = combinedArray.filter(
    (seminar) => seminar.organizationId === organizationId
  );
  const firstThreeElements = filterSeminars.slice(0, 3);

  return (
    <>
      <div className="flex justify-center items-center h-auto my-[4%]">
        <div className="w-[70%]">
          <div className="relative">
            <h1 className="text-2xl py-8 text-center font-medium">
              Received Seminar Requests
            </h1>
            <Link
              to="/OrgRecSeminar" // Adjust the link as per your application
              className="underline text-right pr-4 pb-2 md:block text-custom-lightb hover:text-gray-300 text-sm font-saira"
              style={{ fontFamily: "Saira" }}
            >
              See more
            </Link>
            <FilterSeminars filterSeminars={firstThreeElements} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewP2;


/* eslint-enable no-irregular-whitespace */
