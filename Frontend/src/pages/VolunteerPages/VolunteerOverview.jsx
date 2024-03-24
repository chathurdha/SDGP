import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
// import { Link } from "react-router-dom";
import axios from "axios";
//imp
// import { useUser } from '@clerk/clerk-react';

import FilterSeminars from "../../components/ReceivedSeminarRequests/FilterSeminars";
import VolNavBar from "../../components/navbar/VolNavBar";
import VolHeader from "../../components/Header/VolHeader";
import Footer from "../../components/Footer/Footer";

const VolunteerOverview = () => {
  const [combinedArray, setCombinedArray] = useState([]);
  const [seminars, setSeminars] = useState([]);
  const [schools, setSchools] = useState([]);
  console.log(combinedArray);

  //imp
  // const user = useUser().user;

  //imp
  // const volunteer = volunteers.filter((volunteer) => volunteer.userId === user?.id);

  const filterSeminars = combinedArray.filter((seminar) =>
    seminar.volunteers.find(
      (volunteer) => volunteer.volunteerId === "65fc59d319242601dccb22a4"
    )
  );
  const firstThreeElements = filterSeminars.slice(0, 3);
  // const filterSeminars = combinedArray.filter((seminar) => seminar.volunteers.find((volunteer) => volunteer.volunteerId === volunteer[0]._id));

  useEffect(() => {
    const fetchData = async (apiUrl) => {
      // setIsLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get(apiUrl);
        switch (apiUrl) {
          case "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools":
            setSchools(response.data);
            console.log(response.data);
            break;
          case "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars":
            setSeminars(response.data);
            console.log(response.data);
            break;
          default:
            console.warn("Unexpected API URL:", apiUrl);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchData("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools");
    fetchData("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars");
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
      // Call fetchCombinedArray only after schools and seminars are available
      fetchCombinedArray();
    }
  }, [schools, seminars]);

  return (
    <>
      <VolHeader />
      <VolNavBar />
      <div className="pt-[4%] relative">
        <div className="mt-[15%] flex justify-center items-center relative">
          {!isMobile && (
            <img
              className="w-full lg:w-[80%] h-auto absolute"
              src="/src/assets/aboutUs pic.svg"
              alt=""
            />
          )}
          {/* <img
            className="w-full lg:w-[80%] h-auto absolute"
            src="/src/assets/aboutUs pic.svg"
            alt=""
          /> */}
          {/* {isMobile && (
                    <p className="md:w-[80%] lg:w-[60%] text-sm text-center text-[#FFFFFF]">
                    From preschool to pre-tertiary, our students enjoy fun,
                    interactive, and relevant lessons and are empowered to think
                    beyond the confines of the classroom.
                    </p>
          )} */}
          <div className="absolute flex flex-col justify-center items-center w-full lg:w-[60%]">
            <img
              className="w-[60%] md:w-[30%] lg:w-[40%] h-auto mb-4"
              src="/src/assets/Logo.png"
              alt=""
            />
            {!isMobile && (
              <p className="md:w-[80%] lg:w-[60%] text-sm text-center text-[#FFFFFF]">
                From preschool to pre-tertiary, our students enjoy fun,
                interactive, and relevant lessons and are empowered to think
                beyond the confines of the classroom.
              </p>
            )}
          </div>
        </div>
      </div>
      {/* <div className="pt-[20%] pl-[12%] relative">
        <h1 className="text-2xl text-left font-medium">Our Story</h1>
        <div className="flex items-center">
          <p className="pt-4 text-left w-[50%] text-sm text-[#848383] relative">
            Our website, created by a team of 2nd-year students at Informatics
            Institute of Technology, serves as a platform to facilitate
            connections between rural schools, teaching volunteers, and teaching
            organizations. With its inception rooted in the collective effort of
            young individuals, our platform aims to bridge gaps in educational
            access and resources. Through our website, rural schools can easily
            connect with volunteers and organizations willing to offer
            educational support and resources. Whether it's assisting
            communities during natural disasters, aiding elderly homes,
            organizing educational events, or providing inspirational seminars,
            our platform strives to empower educational initiatives across Sri
            Lanka.
          </p>
          <img
            className="w-[25%] h-auto absolute right-0 mr-[8%]"
            src="/src/assets/aboutbg1.png"
            alt=""
          />
        </div>
        <div className="flex items-center mt-14">
          <img
            className="w-[30%] h-auto relative  left-0 mt-4"
            src="/src/assets/aboutbg2.png"
            alt=""
          />
          <div className="w-[60%] lg:w-[40%] ml-[18%] mr-10">
            <h1 className="text-2xl text-left font-medium ">Our Mission</h1>
            <p className="pt-4 text-left text-sm text-[#848383]">
              Our mission is to extend support to potential young individuals
              who possess the ability and passion to grow and contribute to
              achieving the organization's vision. We are committed to
              continuously developing the membership in the areas of their
              educational, professional, and moral competencies, enabling them
              to actively participate in social development and tackle future
              challenges with utmost confidence.
            </p>
          </div>
        </div>
      </div> */}
      <div className="md:pt-[20%] pt-[8%]relative">
        <h1 className="text-2xl py-8 text-center font-medium">
          Received Seminar Requests
        </h1>

        {/* <Link
            to="/"
            className="underline text-right pr-4 pb-2 md:block text-custom-lightb hover:text-gray-300 text-sm font-saira"
            style={{ fontFamily: "Saira" }}
            >
                See more
            </Link> */}
        <p
          to="/"
          className="underline text-right pr-4 pb-2 md:block text-custom-lightb hover:text-gray-300 text-sm font-saira"
          style={{ fontFamily: "Saira" }}
        >
          See more
        </p>

        <FilterSeminars filterSeminars={firstThreeElements} />
      </div>
      <Footer />
    </>
  );
};

export default VolunteerOverview;
