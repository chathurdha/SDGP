/* eslint-disable react/no-unescaped-entities */

import { isMobile } from "react-device-detect";
import OrganizationList from "../../components/School/OrganizationSearch/OrganizationList";
import { Link } from "react-router-dom";
import SchlNavBar from "../../components/navbar/SchlNavBar";
import SchlHeader from "../../components/Header/SchlHeader";
import Footer from "../../components/Footer/Footer";
import aboutUs from "/src/assets/aboutUs pic.svg";
import logo from "/src/assets/Logo.png";
import reqForm from "/src/assets/requestform.svg";
import sendRev from "/src/assets/sendReview.svg";

const SchoolOverview = () => {
  return (
    <>
      <SchlHeader />
      <SchlNavBar />
      <div className="md:pt-[4%] relative">
        <div className="mt-[15%] flex justify-center items-center relative">
          {!isMobile && (
            <img
              className="w-full lg:w-[80%] h-auto absolute"
              src={aboutUs}
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
              src={logo}
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
        <div className="md:pt-[20%] pt-[8%] relative pb-[8%] ">
          <OrganizationList />
        </div>
      </div>
      <div className="pt-[3%] relative ">
        <h1 className="text-2xl mt-4 md:mt-0 md:mb-10 text-center font-semibold">
          Send Seminar Requests
        </h1>
        <div className="flex items-center justify-center mt-4">
          <div className="flex flex-col items-center md:flex-row md:w-4/5 md:p-10 shadow-2xl rounded-xl">
            <img
              src={reqForm}
              alt=""
              className="md:w-2/6 w-[90%] object-cover mb-2 rounded-lg mt-4 md:ml-8"
            />
            <div className="m-4 md:ml-8 flex items-center">
              <div>
                <h1 className="text-center md:text-left font-medium md:text-lg mb-6">
                  Enhance student's education
                </h1>
                <p className="text-center text-sm md:text-left mb-4">
                  The seminars are meticulously crafted to invigorate and enrich
                  the educational experience of both students and educators.
                  Through interactive sessions and expert guidance, participants
                  explore innovative approaches to learning, fostering critical
                  thinking and creativity. Join us in shaping the future of
                  education with transformative seminars that inspire and
                  empower.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link
                    to="/School/Seminar-Request"
                    className="w-56 text-center mt-1 md:ml-4 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    // className="w-full px-3 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Seminar Request
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-2xl mb-10 mt-[8%] text-center font-semibold">
          Send Reviews
        </h1>
        <div className="flex items-center justify-center mt-4 mb-[8%]">
          <div className="flex flex-col items-center md:flex-row md:w-4/5 md:p-10 shadow-2xl rounded-xl">
            <img
              src={sendRev}
              alt=""
              className="md:w-2/6 w-[90%] object-cover mb-2 rounded-lg mt-4 md:ml-8"
            />
            <div className="m-4 md:ml-8 flex items-center">
              <div>
                <h1 className="text-center md:text-left font-medium md:text-lg mb-6">
                  Let's review the seminars
                </h1>
                <p className="text-center text-sm md:text-left mb-4">
                  Schools across the nation laud our seminars as transformative
                  experiences for both students and educators alike. With a
                  curriculum designed to inspire and engage, our seminars offer
                  invaluable insights and practical skills. Participants
                  consistently praise the interactive sessions, expert
                  facilitators, and real-world applications. Review the seminars
                  and contribute to a better education.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link
                    to="/School/Add-Review"
                    className="w-56 text-center mt-1 md:ml-4 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    // className="w-full px-3 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Review
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SchoolOverview;

/* eslint-enable react/no-unescaped-entities */
