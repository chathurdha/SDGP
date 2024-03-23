/* eslint-disable no-irregular-whitespace */




import { useState, useEffect } from "react";
import axios from "axios";
//import ProfNav from "../../navbar/ProfNav";

function OverviewP1() {
  // State variables to store organization name and description
  const [orgName, setOrgName] = useState("");
  const [orgDescription, setOrgDescription] = useState("");

  // Function to fetch organization data based on ID
  const fetchOrgData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/organizations/${id}`
      );
      const { name, description } = response.data; // Assuming API response contains name and description fields
      setOrgName(name);
      setOrgDescription(description);
    } catch (error) {
      console.error("Error fetching organization data:", error);
    }
  };

  useEffect(() => {
    // Fetch organization data with ID 1 (for demonstration)
    fetchOrgData(1);
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  return (
    <>
      <div className="pt-[4%] relative">
        <div className="mt-[15%] flex justify-center items-center relative">
          <img
            className="w-full lg:w-[80%] h-auto absolute"
            src="/src/assets/aboutUs pic.svg"
            alt=""
          />
          <div className="absolute flex flex-col justify-center items-center w-full lg:w-[60%]">
            <h1 className="w-[20%] lg:w-[40%] h-auto mb-4 text-3xl font-medium text-center text-[#FFFFFF]">
              {orgName}
            </h1>
            <p className="w-[80%] lg:w-[60%] text-sm text-center text-[#FFFFFF]">
              {orgDescription}
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[20%] pl-[12%] relative"></div>
    </>
  );
}

export default OverviewP1;



/* eslint-enable no-irregular-whitespace */
