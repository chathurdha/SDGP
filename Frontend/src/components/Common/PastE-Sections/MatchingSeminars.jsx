/* eslint-disable react/prop-types */
// import { useUser } from '@clerk/clerk-react';

import Card from "./Card";
import fish from "../../../assets/fish.gif";

const MatchingSeminars = ({ seminars }) => {
  console.log(seminars);

    return (
      <>
      {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"> */}
          {seminars?.length > 0 ? (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {seminars &&
                  seminars.map((seminar) => (
                    <Card
                      key={seminar._id}
                      seminar={seminar}
                      className="w-full" // Added w-full and border class
                    />
                  ))}
              </div>
          ) : (
            <div className="flex justify-center items-center h-64 mx-12">
              <img src={fish} alt="Loading" className="w-28 h-28" />
              <h1 className="text-2xl font-medium text-center">Oops! It seems like there's no content here yet.<br></br> Don't worry, the page will get filled after some interaction !</h1>
            </div>
          )}
          {/* </div> */}
      </>
    );

  // return (
  //   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
  //     {seminars &&
  //       seminars.map((seminar) => (
  //         <Card
  //           key={seminar._id}
  //           seminar={seminar}
  //           className="w-full" // Added w-full and border class
  //         />
  //       ))}
  //   </div>
  // );
};

export default MatchingSeminars;

/* eslint-enable react/prop-types */

