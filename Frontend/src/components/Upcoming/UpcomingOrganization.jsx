import { useEffect, useState } from 'react';
import axios from 'axios';
//imp
// import { useUser } from '@clerk/clerk-react';

const UpcomingOrganization = () => {

        //imp
    // const user = useUser().user;

    const [seminars, setSeminars] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [filteredSeminars, setFilteredSeminars] = useState([]);
    const [filteredOrganizations, setFilteredOrganizations] = useState([]);
    // const [filteredSeminars, setFilteredSeminars] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (apiUrl) => {
            // setIsLoading(true); // Set loading to true before fetching
            try {
                const response = await axios.get(apiUrl);
                switch (apiUrl) {
                case 'http://localhost:4000/api/organizations':
                    setOrganizations(response.data);
                    console.log(response.data);
                    break;
                case 'http://localhost:4000/api/seminars':
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
  
        fetchData('http://localhost:4000/api/organizations');
        fetchData('http://localhost:4000/api/seminars');
        // setIsLoading(false);

    }, []);
    
      useEffect(() => {
        if (!isLoading && seminars.length > 0 && organizations.length > 0) {

        const filterdSeminar = seminars.filter((seminar) => seminar.status === "accepted");
        setFilteredSeminars(filterdSeminar);
        console.log(filterdSeminar);

        //imp
        // const specificOrganization = organizations.filter((organization) => organization.userId === user?.id);
        const specificOrganization = organizations.filter((organization) => organization._id === "65f0b51909f477d188a48fad");
        setFilteredOrganizations(specificOrganization);
        console.log(specificOrganization);

        }
      }, [isLoading, seminars, organizations]);

    const specificSeminar = filteredSeminars.filter((seminar) => seminar.organizationId === filteredOrganizations[0]._id);
    console.log(specificSeminar);

    return ( 
        <div>
            hello
        </div>
     );
}
 
export default UpcomingOrganization;