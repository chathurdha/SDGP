import { useEffect, useState } from 'react';
import axios from 'axios';
//imp
import { useUser } from '@clerk/clerk-react';

const UpcomingVolunteer = () => {

    const [seminars, setSeminars] = useState([]);
    const [volunteers, setVolunteers] = useState([]);
    const [filteredSeminars, setFilteredSeminars] = useState([]);
    const [filteredVolunteers, setFilteredVolunteers] = useState([]);
    // const [filteredSeminars, setFilteredSeminars] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    //imp
    const user = useUser().user;
    console.log(user?.id);

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
        // setIsLoading(false);

    }, []);
    
      useEffect(() => {
        if (!isLoading && seminars.length > 0 && volunteers.length > 0) {

        const filterdSeminar = seminars.filter((seminar) => seminar.status === "accepted");
        setFilteredSeminars(filterdSeminar);
        console.log(filterdSeminar);

        //imp
        // const specificVolunteer = volunteers.filter((volunteer) => volunteer.userId === user?.id);
        const specificVolunteer = volunteers.filter((volunteer) => volunteer.userID === user?.id);
        // const specificVolunteer = volunteers.filter((volunteer) => volunteer._id === "65fc59d319242601dccb22a4");
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