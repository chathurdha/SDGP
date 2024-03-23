/* eslint-disable react/no-unescaped-entities */

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="pt-[4%] relative">
        <h1 className="pt-16 pb-12 text-3xl font-bold text-center font-roboto">
          About Us
        </h1>
        <div className="mt-[15%] flex justify-center items-center relative">
          <img
            className="w-full lg:w-[80%] h-auto absolute"
            src="/src/assets/aboutUs pic.svg"
            alt=""
          />
          <div className="absolute flex flex-col justify-center items-center w-full lg:w-[60%]">
            <img
              className="w-[20%] lg:w-[40%] h-auto mb-4"
              src="/src/assets/Logo.png"
              alt=""
            />
            <p className="w-[80%] lg:w-[60%] text-sm text-center text-[#FFFFFF]">
              From preschool to pre-tertiary, our students enjoy fun,
              interactive, and relevant lessons and are empowered to think
              beyond the confines of the classroom.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[20%] pl-[12%] relative">
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
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;

/* eslint-enable react/no-unescaped-entities */
