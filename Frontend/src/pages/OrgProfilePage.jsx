import React, { useEffect, useState } from "react";
import OrgNav from "../components/navbar/ProfNav.jsx";
import Profile from "../components/Profiles/ProfileCard.jsx";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function OrgProfilePage() {

  const { isLoading, error, data, refetch } = useQuery(
    "fetchData",
    async () => {
      console.log("Fetching data....");
      const response = await axios.get("http://localhost:4000/api/Organizations/");
      dataa = response.data
      return response.data; // Assuming response.data contains the desired data
    }, {
      onSuccess:()=>{
        console.log("Data retrieved...");
       
      }
    }
  );


if(isLoading){
  return <div>
    Loading...
    </div>
}

console.log("data: " + data[0].name)


  let Details = [
    { Desc: "Conducted seminars", Val: "100" },
    { Desc: "Volunteer count", Val: "300" },
    { Desc: "No. of branches", Val: "9" },
    { Desc: "Req. response rate", Val: "100%" },
  ];
  return (
    <>
      <OrgNav />
      <Profile
        AccType={"Org"}
        Name={data[0].name}
        //https://drive.google.com/file/d/1mQXTmx_IoTMiJRYnX5nl9Ciqd5YR51z4/view?usp=drive_link
        Pic={"https://drive.google.com/thumbnail?id=1mQXTmx_IoTMiJRYnX5nl9Ciqd5YR51z4"}
        Desc={"Hello World"}
        Rate={"4"}
        ReviewCount={"100"}
        Details={Details}
      />
    </>
  );
}

export default OrgProfilePage;
