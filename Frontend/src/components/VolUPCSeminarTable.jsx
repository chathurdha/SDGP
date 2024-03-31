//need to do prop validation here

/* eslint-disable react/prop-types */

// import { useMemo } from 'react';
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
// } from 'material-react-table';
// import {  schoolListFunction, locationListFunction, dataArray } from './SeminarData.jsx';



// const Table = ({mongoId}) => {

//   // Global state for mongoId
//   // const [mongoId, setMongoId] = useAtom(mongoIDAtom);
  
//   const schoolList = schoolListFunction(mongoId);  
//   const locationList = locationListFunction(mongoId);


//   const columns = useMemo(
//     () => [
//       {
//         header: 'School Name',
//         accessorKey: 'school',
//         filterVariant: 'multi-select',
//         filterSelectOptions: schoolList
//       },
//       {
//         header: 'Location',
//         accessorKey: 'location',
//         filterVariant: 'multi-select',
//         filterSelectOptions: locationList
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
//     data: dataArray,
//     enableDensityToggle: false,
//     enableFullScreenToggle: false,
//     enableHiding: false,
//     visibleInShowHideMenu: false,
//     enableColumnActions: false,

//     initialState: { 
//       showColumnFilters: true, 
//       density: 'spacious'
//      },
//   });

//   return <MaterialReactTable table={table} />;
// };

//Date Picker Imports - these should just be in your Context Provider
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import UpcomingVolunteer from './Upcoming/UpcomingVolunteer.jsx';

const TableComponent = () => (
  //App.tsx or AppProviders file
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    {/* <Table mongoId={mongoId}/> */}
    <UpcomingVolunteer />
  </LocalizationProvider>
);

export default TableComponent;

/* eslint-enable react/prop-types */