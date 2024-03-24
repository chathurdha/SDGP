import Card from "../../Common/PastE-Sections/Card.jsx";
import {useEffect, useState} from "react";
import {useUser} from "@clerk/clerk-react";

export default function UpcomingSeminars(){
    const [seminars, setSeminars] = useState([]);
    const [organizations, setOrganizations] = useState([]);
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

        const fetchOrganizations = async () => {
            try {
                const apiUrl = "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/organizations";
                const response = await fetch(apiUrl);
                const data = await response.json();
                setOrganizations(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchOrganizations();
        fetchSeminars();
    }, []);

    const currentOrganizationId = organizations && organizations.filter((organization) => organization.userId === user.id);
    const acceptedSeminars = seminars && seminars.filter((seminar) => seminar.status === 'accepted');
    const upcomingSeminars = acceptedSeminars && currentOrganizationId.length > 0 && acceptedSeminars.filter((seminar) => new Date(seminar.expDate) > new Date(today) && seminar.organizationId === currentOrganizationId[0]._id);


    return(
        <>
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