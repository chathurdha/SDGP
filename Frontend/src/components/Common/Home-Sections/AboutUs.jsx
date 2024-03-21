// import React from "react";
// import { Link } from "react-router-dom";
// import MatchingSeminars from "../PastE-Sections/MatchingSeminars";
// import "../Home-Sections/home.css";

// function AboutUs() {
//   // Assuming you have seminar data available here
//   const seminarsData = [
//     // Example seminar objects
//     {
//       _id: 1,
//       name: "Seminar 1",
//       description: "This is the first seminar",
//       rating: 4.0,
//       organizationId: 1,
//       year: 2021,
//       location: "location 1",
//     },
//     {
//       _id: 2,
//       name: "Seminar 2",
//       description: "This is the second seminar",
//       rating: 3.0,
//       organizationId: 2,
//       year: 2022,
//       location: "location 2",
//     },
//     {
//       _id: 3,
//       name: "Seminar 3",
//       description: "This is the third seminar",
//       rating: 3.5,
//       organizationId: 3,
//       year: 2023,
//       location: "location 3",
//     },
//     // Add more seminar objects as needed
//   ];

//   return (
//     <section id="about-us">
//       <div>
//         <div className="w-full relative">
//           <div className="absolute top-0 h-[20%] md:h-[40%] inset-0 bg-gradient-to-b from-[#b9aef8] via-[#e0dcfe] to-transparent"></div>
//           <img
//             className="h-[14%] mt-10 md:block md:h-[25%] md:mt-20 md:ml-40 object-cover absolute top-0 left-5 right-0 "
//             src="/src/assets/cirlce.svg"
//             alt=""
//           />
//           <h1 className="pt-16 text-3xl font-bold text-center font-roboto">
//             Past Events
//           </h1>
//           <div className="flex justify-center">
//             <p className="mt-6 w-[70%] md:w-[50%] text-sm font-normal text-[#4E596B] text-center flex justify-center">
//               We believe that we can play a major role in the journey of
//               creating a better society. During the journey, we have gone
//               through many milestones. We believe this investment will impact
//               the future of our country.
//             </p>
//           </div>
//         </div>
//         <div className="mt-8 container mx-auto px-4 py-8">
//           <MatchingSeminars seminars={seminarsData} />
//         </div>
//         <div className="flex justify-center mb-10">
//           <Link
//             to="/past-events"
//             className="bg-custom-purple hover:bg-white text-white hover:text-custom-purple hover:border border-custom-purple py-2 px-3 rounded text-sm font-saira"
//           >
//             Explore more
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUs;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MatchingSeminars from "../PastE-Sections/MatchingSeminars";

function AboutUs() {
  const [seminarsData, setSeminarsData] = useState([]);

  useEffect(() => {
    const fetchSeminars = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/seminars");
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
            src="/src/assets/cirlce.svg"
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
          <MatchingSeminars seminars={seminarsData} />
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
