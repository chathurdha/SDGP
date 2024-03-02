import React from "react";

function Hero() {
  return (
    <div className="w-full h-[90vh] pt-15 md:min-w-[945px]">
      <div className="h-full w-full flex flex-col md:flex-row bg-gradient-to-tr from-[#084FC7] via-[#5148f4] to-[#7F56D9] opacity-[90%]">
        <div className="h-[50%] md:w-[60%] md:h-full relative">
          <div className="p-8 pt-[30%] md:p-20 flex flex-col justify-center h-full md:pb-20">
            <p
              className="text-white text-2xl md:text-[2.5rem] md:leading-[150%] md:pt-40"
              style={{ fontFamily: "Roboto" }}
            >
              Connecting rural{" "}
              <span className="text-custom-green">Sri Lankan</span> <br />
              students with volunteers, sparking brighter futures !
            </p>
            <p className="text-[#B7B7B7] text-sm md:text-base mb-8">
              Every child deserves quality education, join us to bridge the gap!
            </p>
            <button className="w-full md:w-[20%] p-1 md:p-2 border border-white text-white text-sm text-center rounded-md font-semibold focus:outline-none">
              Get started
            </button>
          </div>
        </div>
        <div className="h-[50%] md:w-[40%] md:h-full relative flex justify-center items-end">
          <img
            className="md:block max-h-[90%] h-auto object-contain"
            src="/src/assets/hero_girl.svg"
            alt=""
          />
        </div>
        <img
          className="md:block h-full object-cover absolute bottom-0 left-0 right-0"
          src="/src/assets/bg-round.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
