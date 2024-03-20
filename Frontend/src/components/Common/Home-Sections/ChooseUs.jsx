import React from "react";

function ChooseUs() {
  return (
    <div className="relative w-screen pt-15 md:min-w-[945px] flex justify-center items-center ">
      <div className="h-full w-full flex flex-col align-middle md:flex-col bg-gradient-to-r from-[#084FC7] via-[#5148f4] to-[#7F56D9] opacity-[90%] text-center items-center pb-10">
        <h1 className="pt-8 text-white md:pt-16 text-3xl font-roboto font-bold">
          Who are <span className="text-custom-green">WE?</span>
        </h1>
        <p className="mt-6 w-[70%] md:w-[60%] text-md font-normal text-white">
          We are a charitable social service organization, initiated with the
          intention of building a just and equitable society with a high level
          of human morality. We deliver our projects with the core of enabling
          human beings with an optimum intellectual, social, and spiritual
          balance. You are welcome to join our hands in rebuilding a nation with
          belief and intellect.
        </p>
        <div className="flex flex-row items-center w-[60%]">
          <div className="flex flex-col items-center">
            <img
              className="md:block md:h-[10%] md:mt-10  object-cover hidden"
              src="/src/assets/learn.svg"
              alt=""
            />
            <p
              className="pt-8 text-white md:pt-10 text-lg font-bold"
              style={{ fontFamily: "Rowdies" }}
            >
              01. Learn
            </p>
            <p className=" w-[80%] md:w-[50%] pt-3 text-white md:pt-5 text-sm font-light font-saira">
              Our organization is dedicated to nurturing minds through
              education, fostering critical thinking and social change.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <img
              className="md:block h-[80%] md:h-[100%] mt-4 object-cover "
              src="/src/assets/Line 15.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              className="md:block md:h-[10%] md:mt-10  object-cover hidden "
              src="/src/assets/Teach.svg"
              alt=""
            />
            <p
              className="pt-8 text-white md:pt-10 text-lg font-bold"
              style={{ fontFamily: "Rowdies" }}
            >
              02. Teach
            </p>
            <p className=" w-[80%] md:w-[50%] pt-3 text-white md:pt-5 text-sm font-light font-saira">
              We offer diverse learning opportunities, empowering growth and
              unlocking full potential for a brighter future.
            </p>
          </div>
        </div>
      </div>
      <img
        className="md:block h-[25%] md:h-[35%] mt-14  md:mt-13 object-cover absolute top-0 left-0 right-0 pointer-events-none"
        src="/src/assets/aboutBg.svg"
        alt=""
      />
      <img
        className="md:block h-full object-cover absolute bottom-0 left-0 right-0 pointer-events-none"
        src="/src/assets/bg-round.svg"
        alt=""
      />
    </div>
  );
}

export default ChooseUs;
