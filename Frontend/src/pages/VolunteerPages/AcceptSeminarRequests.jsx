import { useEffect, useState } from "react";
import format from "date-fns/format";
import isToday from "date-fns/isToday";
import axios from "axios";
import { useUser } from '@clerk/clerk-react';

import VolunteerSeminarFilter from './VolunteerSeminarFilter';
import VolNavBar from "../../components/navbar/VolNavBar";
import VolHeader from "../../components/Header/VolHeader";
import Footer from "../../components/Footer/Footer";

const AcceptSeminarRequests = () => {

  const [groupedSeminars, setGroupedSeminars] = useState({});
  const [combinedArray, setCombinedArray] = useState([]); // Initial combined array state
  const [seminars, setSeminars] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [schools, setSchools] = useState([]);
  const [rotatedSeminarIds, setRotatedSeminarIds] = useState([]);
  const [seminarStatuses, setSeminarStatuses] = useState({});
  const [filterSeminars, setFilterSeminars] = useState([]);
  const [seminarRequests, setSeminarRequests] = useState([]);

  const user = useUser().user;
  console.log(user?.id)

  const clarkId = volunteers.find((vol) => vol.userID === user?.id);
  console.log(clarkId);

  const handleUpdateStatus = async (id, newStatus, newExpTeaCount) => {
    console.log(id, newStatus);
    setSeminarStatuses((prevStatus) => {
      return {
        ...prevStatus, //'...' spread operator to copy the previous state
        [id]: newStatus,
      };
    });

    try {
      //imp
      // const volunteer = volunteers.filter((volunteer) => volunteer.userId === user?.id);

      const apiUrl = `https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars/${id}`;

      const response = await axios.patch(apiUrl, {
        // status: newStatus, // Update only the "status" property
        expTeacherCount: newExpTeaCount,
        // volunteers: {
        //   // volunteerId: "616c81d8f6c4b5c2a0c5b4d",
        //   volunteerId: clarkId?._id,
        //   //imp
        //   // volunteerId: volunteer[0]._id
        // },
        volunteers: [
          {
            volunteerId: clarkId?._id,
            // volunteerId: volunteer[0]._id
          },
        ],
      });

      if (response.status !== 200) {
        throw new Error(
          `Failed to update seminar: ${
            response.data.error || response.statusText
          }`
        );
      }

      console.log("Seminar updated successfully!");
    } catch (error) {
      console.error("Error updating seminar:", error);
    }
  };

  const handleToggle = (seminarId) => {
    setRotatedSeminarIds((prevIds) => {
      if (prevIds.includes(seminarId)) {
        return prevIds.filter((id) => id !== seminarId);
      } else {
        return [...prevIds, seminarId];
      }
    });
  };

  useEffect(() => {
    const fetchData = async (apiUrl) => {
      // setIsLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get(apiUrl);
        switch (apiUrl) {
          case "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools":
            setSchools(response.data);
            break;
          case "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars":
            setSeminars(response.data);
            break;
          case 'https://sisu-saviya-6510ee9f562c.herokuapp.com/api/volunteers':
              setVolunteers(response.data);
              break;
          default:
            console.warn("Unexpected API URL:", apiUrl);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchData("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools");
    fetchData("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars");
    fetchData("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/volunteers");
  }, []);

  // New useEffect for fetchCombinedArray
  useEffect(() => {
    const fetchCombinedArray = async () => {
      try {
        if (!schools.length || !seminars.length) {
          // Handle the case where schools or seminars haven't been fetched yet
          return; // Exit early if data is not available
        }

        const findSchoolForSeminar = (seminarId) => {
          return schools.find((school) => school._id === seminarId);
        };
        const filteredSeminars = seminars.filter(
          (seminar) =>
            seminar.status === "pending" && seminar.expTeacherCount > 0
        );
        console.log(filteredSeminars);

        const combinedArray = filteredSeminars.map((seminar) => {
          const school = findSchoolForSeminar(seminar.schoolId);
          return {
            ...seminar,
            schoolId: school?._id,
            schoolName: school?.name,
            schoolAddress: school?.address,
            schoolProfileColor: school?.profileColor,
            schoolProfileImageAvailable: school?.profileImageAvailable,
          };
        });

        setCombinedArray(combinedArray);
      } catch (error) {
        console.error("Error combining seminars and schools:", error);
      }
    };

    if (schools.length && seminars.length) {
      // Call fetchCombinedArray only after schools and seminars are available
      fetchCombinedArray();
    }
  }, [schools, seminars]);

  useEffect(() => {
    // for (let i = 0; i < combinedArray.length; i++) {
    //   for (let j = 0; j < combinedArray[i].volunteers.length; j++) {
    //     if (combinedArray[i].volunteers[j].volunteerId !== clarkId?._id) {

    //     }
    //   }
    // }

    const seminarRequests = [];
    for (let i = 0; i < combinedArray.length; i++) {
      let aviailable = false;
      if (combinedArray[i].volunteers.length === 0) {
        console.log("No volunteers");
        seminarRequests.push(combinedArray[i]);
      } else {
        for (let j = 0; j < combinedArray[i].volunteers.length; j++) {
          if (combinedArray[i].volunteers[j].volunteerId !== clarkId?._id) {
            console.log("Not a volunteer");
          } else {
            console.log("Volunteer");
            aviailable = true;
          }
        }
        if (!aviailable) {
          seminarRequests.push(combinedArray[i]);
        }
      }
    }
    console.log(combinedArray);
    console.log(seminarRequests);
    setSeminarRequests(seminarRequests);

    // const existingVolunteers = combinedArray[2]?.volunteers || []; // Get existing volunteers from fetched data (replace seminarData with your data source)
    // console.log(existingVolunteers);

    // // Check if ID already exists (optional)
    // const isDuplicate = existingVolunteers.some(volunteer => volunteer.volunteerId === clarkId?._id);
    // console.log(isDuplicate);

    // if (!isDuplicate) {
    //   console.log("Not a duplicate ID");
    // } else {
    //   console.log("Duplicate ID");
    // }


    // const filterSeminars = combinedArray.filter(
    // const filterSeminars = seminarRequests.filter(
    //   // (seminar) => seminar.organizationId === "65f0b51909f477d188a48fad"
    //   (seminar) => seminar.organizationId === clarkId?._id
    // ); //important
    // console.log(filterSeminars);
    // setFilterSeminars(filterSeminars);
  }, [combinedArray]);
// }, []);

  useEffect(() => {
    console.log(clarkId?._id);
    console.log(seminarRequests);
    const filterSeminars = seminarRequests.filter(
      // (seminar) => seminar.organizationId === "65f0b51909f477d188a48fad"
      (seminar) => seminar.organizationId === clarkId?._id
    ); //important
    console.log(filterSeminars);
    setFilterSeminars(filterSeminars);
  }, [seminarRequests]);

  console.log(seminarRequests);

  useEffect(() => {
    if (!combinedArray.length) return; // Exit early if combinedArray is not available

    const newGroupedSeminars = {};
    // const filterSeminars = combinedArray.filter(
    //   (seminar) => seminar.organizationId === "65f0b51909f477d188a48fad"
    // ); //important
    // console.log(filterSeminars);

    filterSeminars.forEach((seminar) => {
      // combinedArray.forEach((seminar) => {
      const formatedDate = isToday(new Date(seminar.createdAt))
        ? "Today"
        : format(new Date(seminar.createdAt), "yyyy-MM-dd");
      if (!newGroupedSeminars[formatedDate]) {
        newGroupedSeminars[formatedDate] = [];
      }
      newGroupedSeminars[formatedDate].push(seminar);
    });
    setGroupedSeminars(newGroupedSeminars);
  }, [filterSeminars]);

  console.log(combinedArray);

  return (
    <>
      <VolHeader />
      <VolNavBar />
      <div className="container mx-auto p-4 h-screen">
        {Object.entries(groupedSeminars).map(([date, filterSeminars]) => (
          <div key={date}>
            <h2 className="text-lg mx-[6%] font-mono font-medium mt-8 mb-4 text-left">
              {date}
            </h2>
            <VolunteerSeminarFilter
              filterSeminars={filterSeminars}
              rotatedSeminarIds={rotatedSeminarIds}
              seminarStatuses={seminarStatuses}
              handleToggle={handleToggle}
              handleUpdateStatus={handleUpdateStatus}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AcceptSeminarRequests;
