import SchlHeader from "../../components/Header/SchlHeader.jsx";
import SchlNavBar from "../../components/navbar/SchlNavBar.jsx";
import {useEffect, useState} from "react";
import {useUser} from "@clerk/clerk-react";
import Card from "../../components/Common/PastE-Sections/Card.jsx";

export default function SchoolsUpcomingSeminars() {
    const [seminars, setSeminars] = useState([]);
    const [schools, setSchools] = useState([]); // Added schools state
    const user = useUser();
    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        const fetchSeminars = async () => {
            try {
                const apiUrl = "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars";
                const response = await fetch(apiUrl);
                const data = await response.json();
                setSeminars(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        const fetchSchools = async () => { // Added fetchSchools function
            try {
                const apiUrl = "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/schools";
                const response = await fetch(apiUrl);
                const data = await response.json();
                setSchools(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchSchools();
        fetchSeminars();
    }, []);

    const currentSchoolId = schools && schools.filter((school) => school.userId === user.id);
    const acceptedSeminars = seminars && seminars.filter((seminar) => seminar.status === 'accepted');
    const upcomingSeminars = acceptedSeminars && currentSchoolId.length > 0 && acceptedSeminars.filter((seminar) => new Date(seminar.expDate) > new Date(today) && seminar.organizationId === currentSchoolId[0]._id);


    return(
        <>
            <SchlHeader />
            <SchlNavBar />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {upcomingSeminars &&
                    upcomingSeminars.map((seminar) => (
                        <Card
                            key={seminar._id}
                            seminar={seminar}
                            className="w-full" // Added w-full and border class
                        />
                    ))}
            </div>
        </>
    )
}