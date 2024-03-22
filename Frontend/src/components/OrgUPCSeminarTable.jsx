import React from 'react'
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { schoolListFunction, locationListFunction, headVolunteerListFunction, dataArray } from './SeminarData.jsx';

const schoolList = schoolListFunction();  
const locationList = locationListFunction();
const headVolunteerList = headVolunteerListFunction();

const Table = () => {
  const columns = useMemo(
    () => [
      {
        header: 'School Name',
        accessorKey: 'school',
        filterVariant: 'multi-select',
        filterSelectOptions: schoolList
      },
      {
        header: 'Location',
        accessorKey: 'location',
        filterVariant: 'multi-select',
        filterSelectOptions: locationList
      },
      {
        header: 'Team Assigned To',
        accessorKey: 'headVolunteer',
        filterVariant: 'multi-select',
        filterSelectOptions: headVolunteerList, //custom options list (as opposed to faceted list)
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

  const table = useMaterialReactTable({
    columns,
    data: dataArray,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableHiding: false,
    visibleInShowHideMenu: false,
    enableColumnActions: false,

    initialState: { 
      showColumnFilters: true, 
      density: 'spacious'
     },
  });

  return <MaterialReactTable table={table} />;
};

//Date Picker Imports - these should just be in your Context Provider
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const TableComponent = (props) => (
  //App.tsx or AppProviders file
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Table />
  </LocalizationProvider>
);

export default TableComponent;
