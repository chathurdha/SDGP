import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useUser } from '@clerk/clerk-react';

import VolNavBar from "../../components/navbar/VolNavBar";
import VolHeader from "../../components/Header/VolHeader";
import Footer from "../../components/Footer/Footer";
import fade_stagger_circles from "../../assets/fade_stagger_circles.svg";
import LoadingSVG from "../../assets/Loading.svg";

const VolunteerOverview = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [volunteers, setVolunteers] = useState([]);
  const [pendingVolunteer, setPendingVolunteer] = useState(false);
  const [rejectedVolunteer, setRejectedVolunteer] = useState(false);

  const user = useUser().user;
  console.log(user?.id)

  const clarkId = volunteers.find((vol) => vol.userID === user?.id);
  console.log(clarkId);

  // useEffect(() => {
  //   const filterSeminars = combinedArray.filter(
  //     (seminar) => seminar.organizationId === clarkId?._id
  //   ); //important
  //   console.log(filterSeminars);
  //   setFilterSeminars(filterSeminars);
  // }, [clarkId, combinedArray]);

  // const firstThreeElements = filterSeminars.slice(0, 3);
  useEffect(() => {
    const volunteerStatus = clarkId?.status;
    if (!isLoading) {
      console.log("Loading...");
    }
    if (volunteerStatus === "rejected") {
      console.log("Your volunteer request has been rejected");
      setRejectedVolunteer(true);
    } else if (volunteerStatus === "accepted") {
      console.log("Your volunteer request has been accepted");
      setRejectedVolunteer(false);
    } else if (volunteerStatus === "pending") {
      console.log("Your volunteer request is pending approval");
      setPendingVolunteer(true);
    }
    setIsLoading(false);
  }, [clarkId]);

  useEffect(() => {
    const fetchData = async (apiUrl) => {
      setIsLoading(true);
      try {
        const response = await axios.get(apiUrl);
        switch (apiUrl) {
          case "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/volunteers":
            setVolunteers(response.data);
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

    fetchData("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/volunteers");
    // setIsLoading(false);
  }, []);

  return (
    <>
    {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <img src={LoadingSVG} alt="Loading" className="w-2/6 h-2/6" />
        </div>
        ) : (rejectedVolunteer ? (
          <div className="flex justify-center items-center h-screen"> 
            <h1 className="text-4xl text-center">
              Your volunteer request has been rejected
            </h1>
          </div>
          ) : (!rejectedVolunteer && !pendingVolunteer ? (//accepted
            <div>
                <VolHeader />
                <div className="pt-[2%] pb-[1%]">
                <VolNavBar />
                </div>
                <div className="pt-[4%] relative">
                  <div className="mt-[15%] flex justify-center items-center relative">
                    {!isMobile && (
                      <img
                        className="w-full lg:w-[80%] h-auto absolute"
                        src="/src/assets/aboutUs pic.svg"
                        alt=""
                      />
                    )}
                    <div className="absolute flex flex-col justify-center items-center w-full lg:w-[60%]">
                      <h1 className="text-4xl mb-2 text-center text-[#FFFFFF]">
                      {clarkId?.name}
                      </h1>
                      {!isMobile && (
                        <p className="md:w-[80%] lg:w-[60%] text-sm text-center text-[#FFFFFF]">
                          {clarkId?.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="pt-[20%] relative">
                  <Footer />
                </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-screen">
                <img src={fade_stagger_circles} alt="Loading" className="w-1/12" />
                <h1 className="text-xl text-center">
                  Your volunteer request is pending approval
                </h1>
            </div>
          )))}
    </>
  );
};

export default VolunteerOverview;
