import React, { useEffect, useState } from "react";
import axios from "axios";

import BarGraph from "../components/BarGraph";
import DoughnutChart from "../components/DoughnutChart";
import ProfNav from "../components/navbar/ProfNav";
import OrgHeader from "../components/Header/OrgHeader";
import Footer from "../components/Footer/Footer";

const Statistics = () => {
  const [organizations, setOrganizations] = useState([]);

  //replace orgId with the userId from Clark
  const orgId = 1;
  const specificOrganization = organizations.filter(
    (organization) => organization._id === orgId
  );

  useEffect(() => {
    try {
      const fetchData = async () => {
        const apiUrl = "http://localhost:4000/api/organizations";
        const response = await axios.get(apiUrl);
        setOrganizations(response.data);
      };

      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <OrgHeader />
      <div className="pt-[7%]">
        <ProfNav />
        <div className="mx-7 mt-7">
          {/* conducted seminars section */}
          <div>
            <h1 className="font-semibold text-xl text-left mb-8">
              Conducted Seminars
            </h1>
            <div className="flex justify-center">
              <div className="flex flex-cols-2 flex-wrap border-solid border-2 justify-center border-indigo-300 rounded max-w-screen-sm">
                <div className="flex flex-col text-center md:border-r-2 md:border-b-0 border-b-2 border-neutral-600 md:my-6 md:pr-8 md:mr-8 md:py-0 py-6 md:pl-8">
                  <div className="font-medium text-indigo-500 text-lg">
                    Number of Conducted Seminars
                  </div>
                  <div className="text-3xl font-semibold mt-2">100+</div>
                  {/* <div className="text-3xl font-semibold mt-2">{specificOrganization[0].numConductedSeminars}</div> */}
                </div>
                <div className="flex flex-col text-center md:my-6 md:py-0 py-6 md:pr-8">
                  <div className="font-medium text-indigo-500 text-lg">
                    Number of Volunteers
                  </div>
                  <div className="text-3xl font-semibold mt-2">300+</div>
                  {/* <div className="text-3xl font-semibold mt-2">{specificOrganization[0].numVolunteers}</div> */}
                </div>
              </div>
            </div>
          </div>
          {/* seminar count section */}
          <div>
            <BarGraph />
          </div>
          {/* Review Sentiment Analysis */}
          <div className="mb-[3%]">
            <DoughnutChart />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Statistics;
