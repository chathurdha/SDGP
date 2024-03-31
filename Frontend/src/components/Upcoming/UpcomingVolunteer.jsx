import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import {
    MaterialReactTable,
    useMaterialReactTable,
  } from 'material-react-table';

const UpcomingVolunteer = () => {

        //imp
    // const user = useUser().user;

    const [seminars, setSeminars] = useState([]);
    const [schools, setSchools] = useState([]);
    const [volunteers, setVolunteers] = useState([]);
    const [filteredSeminars, setFilteredSeminars] = useState([]);
    const [filteredVolunteers, setFilteredVolunteers] = useState([]);
    const [specificSeminar, setSpecificSeminar] = useState([]);
    // const [filteredSeminars, setFilteredSeminars] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    //imp
    const user = useUser().user;
    console.log(user?.id);


    const ProcessDate = (seminar) => {

        const date = seminar.expDate ? new Date(seminar.expDate) : null;
    
        // Format date (using padStart for consistent day/month length)
        const formattedDate = date?.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            })
            .split('/')
            //   .reverse()
            .join('.') || 'N/A';
    
        return  formattedDate ;
      }

    // const clarkId = volunteers.find((volunteer) => volunteer.userID === user?.id);
    // console.log(clarkId);

    useEffect(() => {
        const fetchData = async (apiUrl) => {
            // setIsLoading(true); // Set loading to true before fetching
            try {
                const response = await axios.get(apiUrl);
                switch (apiUrl) {
                case 'https://sisu-saviya-6510ee9f562c.herokuapp.com/api/volunteers':
                    setVolunteers(response.data);
                    console.log(response.data);
                    break;
                case 'https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars':
                    setSeminars(response.data);
                    console.log(response.data);
                    break;
                case 'https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools':
                    setSchools(response.data);
                    console.log(response.data);
                    break;
                default:
                    console.warn('Unexpected API URL:', apiUrl);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false); // Set loading to false after fetching
            }
        };
  
        fetchData('https://sisu-saviya-6510ee9f562c.herokuapp.com/api/volunteers');
        fetchData('https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars');
        fetchData('https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools');
        // setIsLoading(false);

    }, []);
    
      useEffect(() => {
        if (!isLoading && seminars.length > 0 && volunteers.length > 0) {

        const filterdSeminar = seminars.filter((seminar) => seminar.status === "accepted");
        setFilteredSeminars(filterdSeminar);
        console.log(filterdSeminar);

        // console.log(user?.id);

        //imp
        const specificVolunteer = volunteers.filter((volunteer) => volunteer.userID === user?.id);
        // const specificVolunteer = volunteers.filter((volunteer) => volunteer._id === "65fc59d319242601dccb22a4");
        setFilteredVolunteers(specificVolunteer);
        console.log(specificVolunteer);

        }
      }, [isLoading, seminars, volunteers]);

    // const specificSeminar = filteredSeminars.filter((seminar) => seminar.volunteers?.find((volunteer) => volunteer.volunteerId === filteredVolunteers[0]?._id));
    console.log(specificSeminar);

    useEffect(() => {
        if (!filteredSeminars || !filteredVolunteers) return;
          const specificSeminar = filteredSeminars?.filter((seminar) => seminar.volunteers?.find((volunteer) => volunteer.volunteerId === filteredVolunteers[0]?._id));
  
          const findSchoolForSeminar = (seminarId) => {
            return schools.find((school) => school._id === seminarId);
          };
  
          const combinedArray = specificSeminar.map((seminar) => {
            const school = findSchoolForSeminar(seminar.schoolId);
            return {
              ...seminar,
              schoolId: school?._id,
              schoolName: school?.name,
              schoolAddress: school?.address,
              processedDate: ProcessDate(seminar),
              // schoolProfileColor: school?.profileColor,
              // schoolProfileImageAvailable: school?.profileImageAvailable,
            };
          });
          // setSpecificSeminar(specificSeminar);
          console.log(combinedArray);
          setSpecificSeminar(combinedArray);
  
          console.log(specificSeminar);
    }, [filteredSeminars, filteredVolunteers]);
  

    const columns = useMemo(
        () => [
          {
              header: 'School Name',
              accessorKey: 'schoolName',
              filterVariant: 'multi-select',
          },
          {
              header: 'Location',
              accessorKey: 'location',
              filterVariant: 'multi-select',
          },
          {
              header: 'Date',
              accessorKey: 'processedDate',
              enableSorting: false,
          },
          {
              header: 'Additional Requirements',
              accessorKey: 'additionalRequests',
              minSize: 200,
              enableSorting: false
          },
        ],
        [],
      );
    
      const table = useMaterialReactTable({
          columns,
          data: specificSeminar,
          muiTableHeadCellProps: {
            sx: {
              fontWeight: 'bold',
              fontSize: '16px',
              backgroundColor: "#8260E2", // Use deep purple as the background color
              color: 'white', // Ensure contrasting text color
              padding: '8px 16px', // Add some padding
              border: '1px solid rgba(0, 0, 0, 0.1)', // Subtle border
            },
          },
          muiTableBodyCellProps: {
            sx: {
              fontSize: '14px',
              fontFamily: 'Arial', // Maintain Arial font family
              '&:hover': { // Apply styles on hover
                backgroundColor: 'rgba(0, 0, 0, 0.05)', // Slight background change on hover
                cursor: 'pointer', // Indicate clickable element
              },
            },
          },
          enableFilters: false,
          enableDensityToggle: false,
          enableFullScreenToggle: false,
          enableHiding: false,
          visibleInShowHideMenu: false,
          enableColumnActions: false,
      
          initialState: { 
            showColumnFilters: false, 
            density: 'spacious'
            },
        });
    
      return <MaterialReactTable table={table} />;
}
 
export default UpcomingVolunteer;






// const Table = ({mongoId}) => {

//     // Global state for mongoId
//     // const [mongoId, setMongoId] = useAtom(mongoIDAtom);
    
//     // const schoolList = schoolListFunction(mongoId);  
//     // const locationList = locationListFunction(mongoId);
  
  
//     const columns = useMemo(
//       () => [
//         {
//             header: 'School Name',
//             accessorKey: 'schoolName',
//             filterVariant: 'multi-select',
//         },
//         {
//             header: 'Location',
//             accessorKey: 'location',
//             filterVariant: 'multi-select',
//         },
//         {
//             header: 'Date',
//             accessorKey: 'processedDate',
//             enableSorting: false,
//         },
//         {
//             header: 'Additional Requirements',
//             accessorKey: 'additionalRequests',
//             minSize: 200,
//             enableSorting: false
//         },
//       ],
//       [],
//     );
  
//     const table = useMaterialReactTable({
//         columns,
//         data: specificSeminar,
//         muiTableHeadCellProps: {
//           sx: {
//             fontWeight: 'bold',
//             fontSize: '16px',
//             backgroundColor: "#8260E2", // Use deep purple as the background color
//             color: 'white', // Ensure contrasting text color
//             padding: '8px 16px', // Add some padding
//             border: '1px solid rgba(0, 0, 0, 0.1)', // Subtle border
//           },
//         },
//         muiTableBodyCellProps: {
//           sx: {
//             fontSize: '14px',
//             fontFamily: 'Arial', // Maintain Arial font family
//             '&:hover': { // Apply styles on hover
//               backgroundColor: 'rgba(0, 0, 0, 0.05)', // Slight background change on hover
//               cursor: 'pointer', // Indicate clickable element
//             },
//           },
//         },
//         enableFilters: false,
//         enableDensityToggle: false,
//         enableFullScreenToggle: false,
//         enableHiding: false,
//         visibleInShowHideMenu: false,
//         enableColumnActions: false,
    
//         initialState: { 
//           showColumnFilters: false, 
//           density: 'spacious'
//           },
//       });
  
//     return <MaterialReactTable table={table} />;
//   };