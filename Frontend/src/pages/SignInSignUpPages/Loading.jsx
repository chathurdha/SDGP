import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../assets/Loading.svg";

const LoadingScreen = () => {
  const Navigate = useNavigate();
  const [nextPageComponent, setNextPageComponent] = useState("");
  const { isSignedIn, user } = useUser();
  let User = user?.unsafeMetadata?.Type;
  let UserType = JSON.stringify(User);
  // let nextPageComponent;
  console.log(`${User}`);

    try {
      if (isSignedIn) {
        if (UserType === '"Volunteer"') {
          console.log(`UserType: ${UserType}`);
          setNextPageComponent("/Volunteer/Overview/");
        } else if (UserType === '"School"') {
          setNextPageComponent("/School/Overview");
        } else if (UserType === '"Organization"') {
          setNextPageComponent("/Organization/Overview");
        } else {
          console.error(`Unhandled UserType: ${UserType}`);
        }
      }
    }catch(error){
      console.log("error : "+error)
    }

  return (
    <div>
      {isSignedIn ? (
        <>{Navigate(nextPageComponent)} </>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          {/* <h1 className='font-bold text-8xl subpixel-antialiased text-sky-500'>Loading...</h1>
          <br />
          <h4 className='font-normal text-3xl'>Welcome to SisuSaviya</h4> */}
          <img src={Loading} alt="Loading.svg" className="w-2/6 h-2/6" />
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;

// function Loading() {
//   return (
//     <div>Loading</div>
//   )
// }

// export default Loading
