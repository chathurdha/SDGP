import React from "react";
import { Link } from "react-router-dom";

function PastEvent() {
  return (
    <div className="relative w-screen pt-15 md:min-w-[945px] flex justify-center">
      <div className="h-[50%] relative md:w-[70%] flex flex-col md:flex-row justify-center items-center my-[5%] mx-10 md:mx-0">
        <img
          className="md:block object-contain max-w-[30%] hidden"
          src="/src/assets/image 4.png"
          alt=""
        />
        <div className="h-[50%] md:w-[60%] md:h-[70%] bg-blue-500 bg-opacity-15 flex flex-col justify-center items-center py-6 px-7 border rounded">
          <h1
            className="text-2xl font-semibold text-[#1D1D45] mb-4"
            style={{ fontFamily: "Roboto" }}
          >
            Why choose us?
          </h1>
          <ul
            className="text-sm text-left font-normal md:ml-0 ml-4"
            style={{ listStyleType: "disc" }}
          >
            <li className="pb-2">
              Solution for Teacher shortages: Limited resources and lack of
              infrastructure make it difficult to attract and retain qualified
              teachers.
            </li>
            <li className="pb-2">
              Can Experience inadequate resources: Access to technology,
              libraries, and extracurricular activities is often restricted.
            </li>
            <li className="pb-2">
              Prevent geographic isolation: Remote locations can hinder exposure
              to diverse learning opportunities and cultural experiences.
            </li>
          </ul>
          <Link
            to="/"
            className="mt-3 bg-custom-purple hover:bg-white text-white hover:text-custom-purple hover:border border-custom-purple py-2 px-3 rounded text-sm"
            style={{ fontFamily: "Saira" }}
          >
            Learn more
          </Link>
        </div>
      </div>
      <img
        className="md:block h-[15%] md:h-[10%] mb-4 object-cover absolute bottom-0 left-16 right-0 pointer-events-none hidden"
        src="/src/assets/greenTria.svg"
        alt=""
      />
    </div>
  );
}

export default PastEvent;
