import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
//imp
import { useUser } from '@clerk/clerk-react';

const UpcomingOrganization = () => {

        //imp
    const user = useUser().user;
    console.log(user?.id);

    const [seminars, setSeminars] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [filteredSeminars, setFilteredSeminars] = useState([]);
    const [filteredOrganizations, setFilteredOrganizations] = useState([]);

    const [specificSeminar, setSpecificSeminar] = useState([]);

    // const [filteredSeminars, setFilteredSeminars] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

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
  
        fetchData('https://sisu-saviya-6510ee9f562c.herokuapp.com/api/organizations');
        fetchData('https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars');
        // setIsLoading(false);

    }, []);
    
      useEffect(() => {
        // if (!isLoading && seminars.length > 0 && organizations.length > 0) {
        if (!seminars || !organizations) return;

        const filterdSeminar = seminars.filter((seminar) => seminar.status === "accepted");
        setFilteredSeminars(filterdSeminar);
        console.log(filterdSeminar);

        console.log(organizations)
        console.log(seminars)
        //imp
        const specificOrganization = organizations.filter((organization) => organization.userID === user?.id);
        // const specificOrganization = organizations.filter((organization) => organization._id === "66057acb44b3a40ab4435a64");
        setFilteredOrganizations(specificOrganization);
        console.log(specificOrganization);

        // }
    // }, []); 
      }, [isLoading, seminars, organizations]);

    

    useEffect(() => {
        const specificSeminar = filteredSeminars?.filter((seminar) => seminar.organizationId === filteredOrganizations[0]._id);
        setSpecificSeminar(specificSeminar)
        console.log(specificSeminar);
     }, [filteredSeminars, filteredOrganizations])



    //added code from OrgUPCSeminarTable

    const columns = useMemo(
        () => [
          {
            header: 'School Name',
            accessorKey: 'school',
            filterVariant: 'multi-select',
          },
          {
            header: 'Location',
            accessorKey: 'location',
            filterVariant: 'multi-select',
          },
          {
            header: 'Team Assigned To',
            accessorKey: 'headVolunteer',
            filterVariant: 'multi-select',
          },
          {
            header: 'Date',
            accessorFn: (originalRow) => new Date(originalRow.date), //convert to date for sorting and filtering
            id: 'date',
            filterVariant: 'date-range',
            Cell: ({ cell }) => cell.getValue().toLocaleDateString(), // convert back to string for display
            maxSize: 180,
          },
          {
            header: 'Additional Requirements',
            accessorKey: 'addReq',
            minSize: 200,
          },
        ],
        [],
      );

      
    console.log (specificSeminar)
    useEffect(() => {
      if (!specificSeminar)return ;
      
        const table = useMaterialReactTable({
            columns,
            data: specificSeminar,
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
      
    }, [seminars, organizations])
    
    //   const table = useMaterialReactTable({
    //     columns,
    //     data: specificSeminar,
    //     enableDensityToggle: false,
    //     enableFullScreenToggle: false,
    //     enableHiding: false,
    //     visibleInShowHideMenu: false,
    //     enableColumnActions: false,
    
    //     initialState: { 
    //       showColumnFilters: false, 
    //       density: 'spacious'
    //      },
    //   });



    // return <MaterialReactTable table={table} />;
}
 
export default UpcomingOrganization;



// added code


// const schoolList = schoolListFunction();  
// const locationList = locationListFunction();
// const headVolunteerList = headVolunteerListFunction();

// const Table = () => {
//   const columns = useMemo(
//     () => [
//       {
//         header: 'School Name',
//         accessorKey: 'school',
//         filterVariant: 'multi-select',
//       },
//       {
//         header: 'Location',
//         accessorKey: 'location',
//         filterVariant: 'multi-select',
//       },
//       {
//         header: 'Team Assigned To',
//         accessorKey: 'headVolunteer',
//         filterVariant: 'multi-select',
//       },
//       {
//         header: 'Date',
//         accessorFn: (originalRow) => new Date(originalRow.date), //convert to date for sorting and filtering
//         id: 'date',
//         filterVariant: 'date-range',
//         Cell: ({ cell }) => cell.getValue().toLocaleDateString(), // convert back to string for display
//         maxSize: 180,
//       },
//       {
//         header: 'Additional Requirements',
//         accessorKey: 'addReq',
//         minSize: 200,
//       },
//     ],
//     [],
//   );

//   const table = useMaterialReactTable({
//     columns,
//     data: specificSeminar,
//     enableDensityToggle: false,
//     enableFullScreenToggle: false,
//     enableHiding: false,
//     visibleInShowHideMenu: false,
//     enableColumnActions: false,

//     initialState: { 
//       showColumnFilters: false, 
//       density: 'spacious'
//      },
//   });

//   return <MaterialReactTable table={table} />;
// };

// export default Table;

// //// Date Picker Imports - these should just be in your Context Provider
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// // const TableComponent = () => (
// //   //App.tsx or AppProviders file
// //   <LocalizationProvider dateAdapter={AdapterDayjs}>
// //     <Table />
// //   </LocalizationProvider>
// // );

// // export default TableComponent;