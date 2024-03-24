import { useEffect } from "react";
import SeminarBtns from "..//Profiles/SeminarBtns";
import TableComponent from "../VolUPCSeminarTable";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

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

  if (userType === "Organization") {
    const response = await axios.get(
      "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/organizations/"
    );
    const orgs = response.data;
    User = orgs.find((org) => org.userID === userID);
  }else{
    console.log("error: unknown user type");
  }

  if (User) {
    mongoID = User._id;
    console.log("Mongo ID:", mongoID);
    return mongoID;
  } else {
    console.log("User not found");
    return null;
  }
}
