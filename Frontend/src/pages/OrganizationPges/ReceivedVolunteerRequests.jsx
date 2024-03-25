import { useEffect, useState } from "react";
import format from "date-fns/format";
import isToday from "date-fns/isToday";
import axios from "axios";
import { useUser } from '@clerk/clerk-react';


import FilterVolunteers from "../../components/ReceivedVolunteerRequests/FilterVolunteers";
import ProfNav from "../../components/navbar/ProfNav";
import OrgHeader from "../../components/Header/OrgHeader";
import Footer from "../../components/Footer/Footer";

const ReceivedSeminarRequests = () => {

  // const user = useUser().user;
  // console.log(user?.id)

  const [volunteers, setVolunteers] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [filteredVolunteers, setFilteredVolunteers] = useState([]);
  const [updatedVolunteers, setUpdatedVolunteers] = useState([]);
  const [groupedVolunteers, setGroupedVolunteers] = useState({});

  const user = useUser().user;
  console.log(user?.id)

  const clarkId = organizations.find((org) => org.userID === user?.id);
  console.log(clarkId);

  // const clarkId = organizations.find((org) => org.userID === user?.id);
  // console.log(clarkId);

  // const [rotatedVolunteerIds, setRotatedVolunteerIds] = useState([]);
  // const [volunteerStatuses, setVolunteerStatuses] = useState({});

  // const handleUpdateStatus = async (id, newStatus) => {
  //     setVolunteerStatuses((prevStatus) => ({
  //         ...prevStatus,
  //         [id]: newStatus,
  //     }));

  //     try {
  //         const apiUrl = `https://sisu-saviya-6510ee9f562c.herokuapp.com/api/volunteers/${id}`;

  //         const response = await axios.patch(apiUrl, {
  //             status: newStatus, // Update only the "status" property
  //         });

  //         if (response.status === 200) {
  //             console.log("Status updated successfully");
  //         }

  //         console.log("Volunteer status updated successfully");
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };

  // const handleToggle = (volunteerId) => {
  //     setRotatedVolunteerIds((prevIds) => {
  //         const updatedIds = prevIds.includes(volunteerId)
  //             ? prevIds.filter((id) => id !== volunteerId) // Remove if already rotated
  //             : [...prevIds, volunteerId]; // Add if not rotated
  //         return updatedIds;
  //     });
  // };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const apiUrl = "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/organizations";
        const response = await axios.get(apiUrl);
        setOrganizations(response.data);
      };

      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const apiUrl = "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/volunteers";
        const response = await axios.get(apiUrl);
        setVolunteers(response.data);
      };

      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!volunteers) return;
    const filterVolunteers = volunteers.filter(
      (volunteer) => volunteer.status === "pending"
    );
    setFilteredVolunteers(filterVolunteers);
    console.log(filterVolunteers);
  }, [volunteers]);

  useEffect(() => {
    const updatedVolunteers = filteredVolunteers.filter(
      // (volunteer) => volunteer.orgID === "65f0b4ea09f477d188a48fab"
      (volunteer) => volunteer.orgID === clarkId?._id
    ); //important
    setUpdatedVolunteers(updatedVolunteers);
    console.log(updatedVolunteers);
  // }, [filteredVolunteers,clarkId]);
}, [clarkId]);

  useEffect(() => {
    const newGroupedVolunteers = {};
    console.log(updatedVolunteers);
    updatedVolunteers.forEach((volunteer) => {
      // filterVolunteers.forEach((volunteer) => {
      const formattedDate = isToday(new Date(volunteer.createdAt))
        ? "Today"
        : format(new Date(volunteer.createdAt), "yyyy-MM-dd");
      if (!newGroupedVolunteers[formattedDate]) {
        newGroupedVolunteers[formattedDate] = [];
      }
      newGroupedVolunteers[formattedDate].push(volunteer);
    });
    setGroupedVolunteers(newGroupedVolunteers);
  }, [updatedVolunteers]);

  return (
    <>
      <OrgHeader />
      <ProfNav />
      <div className="container p-4 w-[80%] m-auto mb-10 md:ml-20">
        {Object.entries(groupedVolunteers).map(([date, filterVolunteers]) => (
          <div key={date}>
            <h2 className="text-lg mx-[6%] font-mono font-medium mt-8 mb-4 text-left">
              {date}
            </h2>
            <FilterVolunteers
              filterVolunteers={filterVolunteers}
              // rotatedVolunteerIds={rotatedVolunteerIds}
              // handleToggle={handleToggle}
              // handleUpdateStatus={handleUpdateStatus}
              // volunteerStatuses={volunteerStatuses}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ReceivedSeminarRequests;
