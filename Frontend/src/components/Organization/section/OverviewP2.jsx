/* eslint-disable no-irregular-whitespace */


import { useState, useEffect } from "react";
import axios from "axios";
import FilterSeminars from "../../ReceivedSeminarRequests/FilterSeminars";
import { Link } from "react-router-dom";

const OverviewP2 = () => {
    const [combinedArray, setCombinedArray] = useState([]);
    const [seminars, setSeminars] = useState([]);
    const [schools, setSchools] = useState([]);

    const filterSeminars = combinedArray.filter((seminar) => seminar.organizationId === "65f0b4ea09f477d188a48fab");
    const firstThreeElements = filterSeminars.slice(0, 3);
    // const filterSeminars = combinedArray.filter((seminar) => seminar.volunteers.find((volunteer) => volunteer.volunteerId === volunteer[0]._id));

    useEffect(() => {

        const fetchData = async (apiUrl) => {
            // setIsLoading(true); // Set loading to true before fetching
            try {
                const response = await axios.get(apiUrl);
                switch (apiUrl) {
                case 'http://localhost:4000/api/schools':
                    setSchools(response.data);
                    console.log(response.data);
                    break;
                case 'http://localhost:4000/api/seminars':
                    setSeminars(response.data);
                    console.log(response.data);
                    break;
                default:
                    console.warn('Unexpected API URL:', apiUrl);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                // setIsLoading(false); // Set loading to false after fetching
            }
        };
  
        fetchData('http://localhost:4000/api/schools');
        fetchData('http://localhost:4000/api/seminars');

    }, []);

  // New useEffect for fetchCombinedArray
    useEffect(() => {
        const fetchCombinedArray = async () => {
        try {
            if (!schools.length || !seminars.length) {
            // Handle the case where schools or seminars haven't been fetched yet
            return; // Exit early if data is not available
            }

            const findSchoolForSeminar = (seminarId) => {
            return schools.find((school) => school._id === seminarId);
            };
            const filteredSeminars = seminars.filter((seminar) => seminar.status === "pending");

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
            console.error('Error combining seminars and schools:', error);
        }
        };

        if (schools.length && seminars.length) {
        // Call fetchCombinedArray only after schools and seminars are available
        fetchCombinedArray();
        }
    }, [schools, seminars]);

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
