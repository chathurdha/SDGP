import React from "react";

function OrgOverview() {
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

      <div className="pt-[20%] pl-[12%] relative"></div>
    </>
  );
}

export default OrgOverview;
