import React, { useEffect } from "react";
import SeminarBtns from "./Profiles/SeminarBtns";
import TableComponent from "./VolUPCSeminarTable";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import {dataArrayFunction} from "./SeminarData"

function UpSeminar() {
  // Store mongoId here - initially it is null
  let mongoId = null;

  const { user } = useUser();
  console.log(user?.unsafeMetadata.Type);
  let UserID = user?.id;
  let UserType = user?.unsafeMetadata.Type;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set the mongo Id
        mongoId = await SeminarDataFunction(UserID, UserType);
    
      } catch (error) {
        // Most probebly this will trigger if there is a network error or due to any client side error
        console.error("Error fetching seminar data:", error);
      }
    };

    fetchData();
  }, [UserID, UserType]);




  // Handle the error if the mongoId is not recived - Remove this bcoz the error is already handled in the catch block
  if (mongoId === null) {
    return <p>Mongo Id did not recived</p>;
  }


  

  // If the monggoId is available 
  return (
    <>
      <SeminarBtns
        upcomingPageUrl="/UpSeminar"
        previousPageUrl="/PrevSeminar"
      />
      <div className="w-[80%] flex flex-row justify-center">
        <TableComponent mongoId={mongoId} />
        {user?.id}
      </div>
    </>
  );
}

export default UpSeminar;

async function SeminarDataFunction(UserID, UserType) {
  let mongoID;
  const userID = UserID;
  const userType = UserType;

  let User;

  if (userType === "Volunteer") {
    const response = await axios.get("http://localhost:4000/api/volunteers/");
    const vols = response.data;
    User = vols.find((vol) => vol.userID === userID);
    


  } else if (userType === "School") {
    const response = await axios.get("http://localhost:4000/api/schools/");
    const scls = response.data;
    User = scls.find((scl) => scl.userID === userID);
  } else if (userType === "Organization") {
    const response = await axios.get(
      "http://localhost:4000/api/organizations/"
    );
    const orgs = response.data;
    User = orgs.find((org) => org.userID === userID);
  }

  if (User) {
    mongoID = User._id;
    console.log("Mongo ID:", mongoID);
    const dataArray = SeminarDataFunction(UserType, mongoID);
    return dataArray;
    } else {
    console.log("User not found");
    return null;
  }


}
