/* eslint-disable no-unused-vars */
import { useEffect , useState} from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useUser } from "@clerk/clerk-react";



  // const [Seminars, setSeminars] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4000/api/Seminars/');
  //       setSeminars(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();

  //   return () => {
  //   };
  // }, []); 


export let dataArray = [
  {
    school: "ABC High School",
    location: "123 Main Street, Cityville",
    headVolunteer: "John Smith",
    date: "2024-04-15",
    addReq: "Participants should bring their own laptops.",
  },
  {
    school: "XYZ Middle School",
    location: "456 Elm Avenue, Townsville",
    headVolunteer: "Jane Doe",
    date: "2024-05-10",
    addReq:
      "Participants are required to submit permission slips signed by their parents.",
  },
  {
    school: "PQR Elementary School",
    location: "789 Oak Road, Villagetown",
    headVolunteer: "Sarah Johnson",
    date: "2024-06-20",
    addReq: "Participants must wear school uniform.",
  },
];

export let dataArrayFunction = (userType, mongoID) => {
  
};

export function schoolListFunction (mongoID) {
  const schools = dataArray.map((item) => item.school);
  return schools;
}
export function locationListFunction(mongoID) {
  const locations = dataArray.map((item) => item.location); // Extract locations
  return locations;
}
export function headVolunteerListFunction(mongoID) {
  const headVolunteers = dataArray.map((item) => item.headVolunteer); // Extract locations
  return headVolunteers;
}


/* eslint-enable no-unused-vars */