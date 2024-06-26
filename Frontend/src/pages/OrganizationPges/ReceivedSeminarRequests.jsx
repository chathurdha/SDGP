import { useEffect, useState } from "react";
import format from "date-fns/format";
import isToday from "date-fns/isToday";
import axios from "axios";
import { useUser } from '@clerk/clerk-react';
import fish from "../../assets/fish.gif";

import FilterSeminars from "../../components/ReceivedSeminarRequests/FilterSeminars";
import Footer from "../../components/Footer/Footer";
import ProfNav from "../../components/navbar/ProfNav";
import OrgHeader from "../../components/Header/OrgHeader";

const ReceivedSeminarRequests = () => {
  const [organizations, setOrganizations] = useState([]);
  const [groupedSeminars, setGroupedSeminars] = useState({});
  const [combinedArray, setCombinedArray] = useState([]); // Initial combined array state
  const [seminars, setSeminars] = useState([]);
  const [schools, setSchools] = useState([]);
  const [filterSeminars, setFilterSeminars] = useState([]);

  const user = useUser().user;
  console.log(user?.id)

  const clarkId = organizations.find((org) => org.userID === user?.id);
  console.log(clarkId);

  // const [rotatedSeminarIds, setRotatedSeminarIds] = useState([]);
  // const [seminarStatuses, setSeminarStatuses] = useState({});

  // const handleUpdateStatus = async (id, newStatus) => {
  //     console.log(id, newStatus);
  //     setSeminarStatuses((prevStatus) => {
  //         return {
  //             ...prevStatus,//'...' spread operator to copy the previous state
  //             [id]: newStatus
  //         };
  //     });

  //     try {
  //         const apiUrl = `https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars/${id}`;

  //         const response = await axios.patch(apiUrl, {
  //         status: newStatus, // Update only the "status" property
  //         });

  //         if (response.status !== 200) {
  //         throw new Error(`Failed to update seminar: ${response.data.error || response.statusText}`);
  //         }

  //         console.log('Seminar updated successfully!');

  //     } catch (error) {
  //         console.error('Error updating seminar:', error);
  //     }
  // };

  // const handleToggle = (seminarId) => {
  //     setRotatedSeminarIds((prevIds) => {
  //         if (prevIds.includes(seminarId)) {
  //             return prevIds.filter((id) => id !== seminarId);
  //         } else {
  //             return [...prevIds, seminarId];
  //         }
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
    const fetchData = async (apiUrl) => {
      // setIsLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get(apiUrl);
        switch (apiUrl) {
          case "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools":
            setSchools(response.data);
            console.log(response.data);
            break;
          case "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars":
            setSeminars(response.data);
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
          (seminar) => seminar.status === "pending"
        );

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
    const filterSeminars = combinedArray.filter(
      // (seminar) => seminar.organizationId === "65f0b4ea09f477d188a48fab"
      (seminar) => seminar.organizationId === clarkId?._id
    ); //important
    console.log(filterSeminars);
    setFilterSeminars(filterSeminars);
  }, [clarkId, combinedArray]);

  useEffect(() => {
    if (!combinedArray.length) return; // Exit early if combinedArray is not available

    const newGroupedSeminars = {};
    // const filterSeminars = combinedArray.filter(
    //   (seminar) => seminar.organizationId === "65f0b4ea09f477d188a48fab"
    //   // (seminar) => seminar.organizationId === clarkId?._id
    // ); //important
    // combinedArray.forEach((seminar) => {
    filterSeminars.forEach((seminar) => {
      const formatedDate = isToday(new Date(seminar.createdAt))
        ? "Today"
        : format(new Date(seminar.createdAt), "yyyy-MM-dd");
      if (!newGroupedSeminars[formatedDate]) {
        newGroupedSeminars[formatedDate] = [];
      }
      newGroupedSeminars[formatedDate].push(seminar);
    });
    setGroupedSeminars(newGroupedSeminars);
    console.log(newGroupedSeminars);
  }, [filterSeminars]);

  console.log(filterSeminars);
  console.log(combinedArray);
  console.log(groupedSeminars);

  return (
    <>
      <OrgHeader />
      <ProfNav />
      {filterSeminars.length > 0 ? (
        <div>
        <p>h1</p>
        <div className="h-[90vh] pt-[3%] container mx-auto p-4">
          {Object.entries(groupedSeminars).map(([date, filterSeminars]) => (
            <div key={date}>
              <h2 className="text-lg mx-[6%] font-mono font-medium mt-8 mb-4 text-left">
                {date}
              </h2>
              <FilterSeminars
                filterSeminars={filterSeminars}
                // rotatedSeminarIds={rotatedSeminarIds}
                // seminarStatuses={seminarStatuses}
                // handleToggle={handleToggle}
                // handleUpdateStatus={handleUpdateStatus}
                // isLoading={isLoading}
              />
            </div>
          ))}
        </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64 mx-12">
          <img
            src={fish}
            alt="Loading"
            className="w-28 h-28 mr-4"
          />
          <h1 className="text-2xl font-medium text-center">
            Oops! It seems like there's no content here yet.<br></br> Don't worry, the
            page will get filled after some interaction!
          </h1>
        </div>
      )}

      {/* <div className="h-[90vh] pt-[3%] container mx-auto p-4">
        {Object.entries(groupedSeminars).map(([date, filterSeminars]) => (
          <div key={date}>
            <h2 className="text-lg mx-[6%] font-mono font-medium mt-8 mb-4 text-left">
              {date}
            </h2>
            <FilterSeminars
              filterSeminars={filterSeminars}
              // rotatedSeminarIds={rotatedSeminarIds}
              // seminarStatuses={seminarStatuses}
              // handleToggle={handleToggle}
              // handleUpdateStatus={handleUpdateStatus}
              // isLoading={isLoading}
            />
          </div>
        ))}
      </div> */}
      <Footer />
    </>
  );
};

export default ReceivedSeminarRequests;
