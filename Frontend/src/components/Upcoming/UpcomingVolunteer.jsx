import { useEffect, useState } from 'react';
import axios from 'axios';
//imp
// import { useUser } from '@clerk/clerk-react';

const UpcomingVolunteer = () => {

        //imp
    // const user = useUser().user;

    const [seminars, setSeminars] = useState([]);
    const [volunteers, setVolunteers] = useState([]);
    const [filteredSeminars, setFilteredSeminars] = useState([]);
    const [filteredVolunteers, setFilteredVolunteers] = useState([]);
    // const [filteredSeminars, setFilteredSeminars] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (apiUrl) => {
            // setIsLoading(true); // Set loading to true before fetching
            try {
                const response = await axios.get(apiUrl);
                switch (apiUrl) {
                case 'http://localhost:4000/api/volunteers':
                    setVolunteers(response.data);
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
  
        fetchData('http://localhost:4000/api/volunteers');
        fetchData('http://localhost:4000/api/seminars');
        // setIsLoading(false);

    }, []);
    
      useEffect(() => {
        if (!isLoading && seminars.length > 0 && volunteers.length > 0) {

        const filterdSeminar = seminars.filter((seminar) => seminar.status === "accepted");
        setFilteredSeminars(filterdSeminar);
        console.log(filterdSeminar);

        //imp
        // const specificOrganization = organizations.filter((organization) => organization.userId === user?.id);
        const specificVolunteer = volunteers.filter((volunteer) => volunteer._id === "65fc59d319242601dccb22a4");
        setFilteredVolunteers(specificVolunteer);
        console.log(specificVolunteer);

        }
      }, [isLoading, seminars, volunteers]);

    const specificSeminar = filteredSeminars.filter((seminar) => seminar.volunteers?.find((volunteer) => volunteer.volunteerId === filteredVolunteers[0]?._id));
    console.log(specificSeminar);

    return ( 
        <div>
            hello
        </div>
     );
}
 
export default UpcomingVolunteer;