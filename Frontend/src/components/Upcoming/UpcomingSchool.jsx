import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
//imp
import { useUser } from '@clerk/clerk-react';

const UpcomingSchool = () => {

        //imp
    const user = useUser().user;

    const [seminars, setSeminars] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [schools, setSchools] = useState([]);
    const [filteredSeminars, setFilteredSeminars] = useState([]);
    const [filteredSchools, setFilteredSchools] = useState([]);
    // const [filteredSeminars, setFilteredSeminars] = useState([]);


        const [specificSeminar, setSpecificSeminar] = useState([]);


    const [isLoading, setIsLoading] = useState(true);


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

    useEffect(() => {
        const fetchData = async (apiUrl) => {
            // setIsLoading(true); // Set loading to true before fetching
            try {
                const response = await axios.get(apiUrl);
                switch (apiUrl) {
                case 'https://sisu-saviya-6510ee9f562c.herokuapp.com/api/organizations':
                    setOrganizations(response.data);
                    console.log(response.data);
                    break;
                case 'https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools':
                    setSchools(response.data);
                    console.log(response.data);
                    break;
                case 'https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars':
                    setSeminars(response.data);
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
  
        fetchData('https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools');
        fetchData('https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars');
        fetchData('https://sisu-saviya-6510ee9f562c.herokuapp.com/api/organizations');
        // setIsLoading(false);

    }, []);


    console.log(organizations)
    
      useEffect(() => {
        if (seminars.length > 0 && schools.length > 0) {

        const filterdSeminar = seminars.filter((seminar) => seminar.status === "accepted");
        setFilteredSeminars(filterdSeminar);
        console.log(filterdSeminar);

        //imp
        const specificSchool = schools.filter((school) => school.userID === user?.id);
        // const specificSchool = schools.filter((school) => school._id === "65f0a01b5e34ced181cf1ab5");
        setFilteredSchools(specificSchool);
        console.log(specificSchool);

        }
      }, [isLoading, seminars, schools]);

    console.log(specificSeminar);

    useEffect(() => {
        if (!filteredSeminars || !filteredSchools) return;
        const specificSeminar = filteredSeminars.filter((seminar) => seminar.schoolId === filteredSchools[0]._id);
  
          const findOrganizationForSeminar = (seminarId) => {
            console.log(seminarId)
            return organizations.find((organization) => organization._id === seminarId);
          };
          const combinedArray = specificSeminar.map((seminar) => {
            const organization = findOrganizationForSeminar(seminar.organizationId);
            console.log(organization);
            return {
              ...seminar,
              organizationId: organization?._id,
              organizationName: organization?.name,
              processedDate: ProcessDate(seminar),

            };
          });
          setSpecificSeminar(specificSeminar);
          console.log(combinedArray);
          setSpecificSeminar(combinedArray);
  
          console.log(specificSeminar);
       }, [filteredSeminars, filteredSchools]);


       const columns = useMemo(
        () => [
          {
            header: 'Organization Name',
            accessorKey: 'organizationName',
            filterVariant: 'multi-select',
          },
          {
            header: 'Grade',
            accessorKey: 'grade',
            filterVariant: 'multi-select',
          },
          {
            header: 'Subject',
            accessorKey: 'subject',
            filterVariant: 'multi-select',
          },
          {
            header: 'Date',
            accessorKey: 'processedDate',
            // accessorFn: (originalRow) => new Date(originalRow.date), //convert to date for sorting and filtering
            // id: 'expDate',
            // // filterVariant: 'date-range',
            // Cell: ({ cell }) => cell.getValue().toLocaleDateString(), // convert back to string for display
            // maxSize: 180,
            enableSorting: false
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

    console.log (specificSeminar)
      
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
 
export default UpcomingSchool;