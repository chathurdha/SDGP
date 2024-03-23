import { useEffect, useState } from "react";
import axios from "axios";


export function getVolunteerCount(allVolunteers,organization) {
    if (allVolunteers.length > 0 && organization !== undefined) {
        const volunteer = allVolunteers.filter((volunteer) => volunteer.orgID === organization._id);
        // console.log(volunteer.length);
        return volunteer.length;
    }
}


const Organizations = () => {

  const [allVolunteers, setAllVolunteers] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  // Sort organizations by volunteer count in descending order
  const sortedOrganizations = organizations.sort(
    (a, b) => b.volunteerCount - a.volunteerCount
  );

  // Get the top 6 organizations
  const topOrganizations = sortedOrganizations.slice(0, 6);

  useEffect(() => {
    const fetchData = async (apiUrl) => {
      try {
        const response = await axios.get(apiUrl);
        switch (apiUrl) {
            case "http://localhost:4000/api/volunteers":
                setAllVolunteers(response.data);
                break;
            case "http://localhost:4000/api/organizations":
                setOrganizations(response.data);
                console.log(response.data);
                break;
            default:
                console.warn("Unexpected API URL:", apiUrl);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {

      }
    };

    fetchData("http://localhost:4000/api/volunteers");
    fetchData("http://localhost:4000/api/organizations");
  }, []);

  return (
    <div className="w-screen flex justify-center items-center bg-gradient-to-t from-[#D9ECFF] to-white">
      <div className="w-[80%] h-full pb-14">
        <h1 className="pt-8 text-[#323232] md:pt-16 text-3xl text-center font-roboto font-bold">
          Top <span className="text-custom-green">Organizations</span>
        </h1>
        <div className="flex flex-wrap justify-center mt-10">
        {topOrganizations.map((organization) => (
            <div
              key={organization._id}
              className="flex flex-col items-center bg-white p-3 rounded-lg shadow-md m-4 w-[10%] h-50"
              style={{ minWidth: "200px" }} // Adjust width if necessary
            >
              <img
                className="h-20 w-20 object-cover rounded-full"
                src={`/src/assets/${organization._id}.jpeg`}
                alt={organization.name}
              />
              <h2 className="text-lg font-semibold mt-4 mb-2">{organization.name}</h2>
              <p className="text-sm text-gray-500">
                {/* No. of volunteers: {organization.volunteerCount} */}
                No. of volunteers: {getVolunteerCount(allVolunteers, organization)}
              </p>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Organizations;
