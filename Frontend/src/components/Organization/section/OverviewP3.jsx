 


import { useState, useEffect } from "react";
import axios from "axios";
import FilterVolunteers from "../../ReceivedVolunteerRequests/FilterVolunteers";
import { Link } from "react-router-dom";

const OverviewP3 = () => {
    const [combinedArray, setCombinedArray] = useState([]);
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await axios.get("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/volunteers");
        setVolunteers(response.data);
        console.log(response.data);
        } catch (error) {
            console.error("Error fetching volunteers:", error);
        }
    };

    fetchData();
    }, []);

    useEffect(() => {
    const fetchCombinedArray = () => {
        if (!volunteers.length) {
            return;
        }

        // Assuming you want only pending volunteer requests
        const filteredVolunteers = volunteers.filter((volunteer) => volunteer.status === "pending");

        // Assuming you want to limit to the first three volunteer requests
        const firstThreeVolunteers = filteredVolunteers.slice(0, 3);

        setCombinedArray(firstThreeVolunteers);
    };

        fetchCombinedArray();
    }, [volunteers]);

    return (
    <>
        <div className="flex justify-center items-center h-auto my-[4%]">
            <div className="lg:w-[70%] md:w-[80%]">
                <div className="pt-[3%] relative">
                <h1 className="text-2xl py-8 text-center font-medium">
                    Received Volunteer Requests
                </h1>
                <Link
                to="/OrgRecVolunteer" // Adjust the link as per your application
                className="underline text-right pr-4 pb-2 md:block text-custom-lightb hover:text-gray-300 text-sm font-saira"
                style={{ fontFamily: "Saira" }}
                >
                See more
                </Link>
                <FilterVolunteers filterVolunteers={combinedArray} />
                </div>
            </div>
        </div>
        {/* <FilterVolunteers filterVolunteers={combinedArray} /> */}
    </>
    );
};

export default OverviewP3;


 
