import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import UpcomingSchool from './Upcoming/UpcomingSchool';

const TableComponent = () => (
  //App.tsx or AppProviders file
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <UpcomingSchool />
  </LocalizationProvider>
);

export default TableComponent;
