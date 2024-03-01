import axios from "axios";
import { useQuery } from "react-query";

export let dataArray; // Exporting the dataArray variable
// let getData;
const { isLoading, error, data, refetch } = useQuery("getData" = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/Seminars/");
    dataArray = response.data;
    console.log("Success: Data retrieved successfully");
    //return dataArray;
  } catch (error) {
    console.log("Fail: Failed to retrieve data");
    console.error(error);
  }
})

//console.log("data: " + data[0].name)

export const schoolList = () => {
  const schools = dataArray.map(item => item.school); // Extract locations
  return schools;
}
export const locationList = () => {
  const locations = dataArray.map(item => item.location); // Extract locations
    return locations;
}
export const headVolunteerList = () => {
  const headVolunteers = dataArray.map(item => item.HeadVolunteer); // Extract locations
  return headVolunteers;
}
