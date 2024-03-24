import { Link } from "react-router-dom";
import heroGirl from "/src/assets/hero_girl.svg"
import BgRound from "/src/assets/bg-round.svg"

function Hero() {
  return (
    <div className="relative w-full h-[90vh] pt-15 md:min-w-[945px]">
      {/* Background gradient */}
      <div className="h-full w-full flex flex-col md:flex-row bg-gradient-to-tr from-[#084FC7] via-[#5148f4] to-[#7F56D9] opacity-[90%]">
        {/* Text content */}
        <div className="h-[50%] md:w-[60%] md:h-full relative">
          <div className="p-8 pt-[30%] md:p-20 flex flex-col justify-center h-full md:pb-20">
            <p className="text-white text-2xl md:text-[2.5rem] md:leading-[150%] md:pt-40 font-bold font-roboto">
              Connecting rural{" "}
              <span className="text-custom-green">Sri Lankan</span> <br />
              students with volunteers, sparking brighter futures!
            </p>
            <p className="text-[#B7B7B7] text-sm md:text-base mb-8">
              Every child deserves quality education, join us to bridge the gap!
            </p>
            {/* Link button */}
            <Link
              to="/sign-up"
              className="w-full md:w-[20%] p-1 md:p-2 border border-white text-white text-sm text-center rounded-md font-semibold font-saira focus:outline-none relative z-10"
            >
              Get started
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="h-[50%] md:w-[40%] md:h-full relative flex justify-center items-end">
          <img
            className="md:block max-h-[90%] h-auto object-contain"
            src={heroGirl}
            alt=""
          />
        </div>
      </div>
      {/* Background round image */}
      <img
        className="md:block h-full object-cover absolute bottom-0 left-0 right-0 pointer-events-none"
        src={BgRound}
        alt=""
      />
    </div>
  );
}

export default Hero;
