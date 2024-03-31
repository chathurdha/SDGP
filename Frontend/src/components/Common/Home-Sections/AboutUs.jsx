import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MatchingSeminars from "../PastE-Sections/MatchingSeminars";
import circle from "/src/assets/cirlce.svg"

function AboutUs() {
  const [seminarsData, setSeminarsData] = useState([]);
  const [seminars, setSeminars] = useState([]);
  const firstThreeElements = seminars?.slice(0, 3);

  useEffect(() => {
    if (seminarsData.length > 0) {
      const seminars = seminarsData.filter((seminar) => {
        // return new Date(seminar.expDate) < new Date();
        return seminar.status === "completed";
      });
      setSeminars(seminars);
    }
  }, [seminarsData]);

  useEffect(() => {
    const fetchSeminars = async () => {
      try {
        const response = await axios.get("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars");
        setSeminarsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching seminar data:", error);
      }
    };

    fetchSeminars();
  }, []);

  return (
    <section id="about-us">
      <div>
        <div className="w-full relative">
          <div className="absolute top-0 h-[20%] md:h-[40%] inset-0 bg-gradient-to-b from-[#b9aef8] via-[#e0dcfe] to-transparent"></div>

          <img
            className="h-[14%] mt-10 md:block md:h-[25%] md:mt-20 md:ml-40 object-cover absolute top-0 left-5 right-0 "
            src={circle}
            alt=""
          />

          <h1
            className="pt-16 text-3xl font-bold text-center"
            style={{ fontFamily: "Roboto" }}
          >
            Past Events
          </h1>

          <div className="flex justify-center">
            <p className="mt-6 w-[70%] md:w-[50%] text-sm font-normal text-[#4E596B] text-center flex justify-center">
              We believe that we can play a major role in the journey of
              creating a better society. During the journey, we have gone
              through many milestones. We believe this investment will impact
              the future of our country.
            </p>
          </div>
        </div>

        <div className="mt-8 container mx-auto px-4 py-8">
          <MatchingSeminars seminars={firstThreeElements} />
        </div>

        <div className="flex justify-center mb-10">
          <Link
            to="/past-events"
            className="bg-custom-purple hover:bg-white text-white hover:text-custom-purple hover:border border-custom-purple py-2 px-3 rounded text-sm"
            style={{ fontFamily: "Saira" }}
          >
            Explore more
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

 
