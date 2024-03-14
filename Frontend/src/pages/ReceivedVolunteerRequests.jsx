import React, { useEffect, useState } from 'react';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import axios from 'axios';

import FilterVolunteers from '../components/ReceivedVolunteerRequests/FilterVolunteers';

const ReceivedSeminarRequests = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [groupedVolunteers, setGroupedVolunteers] = useState({});
    const [rotatedVolunteerIds, setRotatedVolunteerIds] = useState([]);
    const [volunteerStatuses, setVolunteerStatuses] = useState({});

    const handleUpdateStatus = async (id, newStatus) => {
        setVolunteerStatuses((prevStatus) => ({
            ...prevStatus,
            [id]: newStatus,
        }));

        try {
            const apiUrl = `http://localhost:4000/api/volunteers/${id}`;

            const response = await axios.patch(apiUrl, {
                status: newStatus, // Update only the "status" property
            });

            if (response.status === 200) {
                console.log("Status updated successfully");
            }

            console.log("Volunteer status updated successfully");
        } catch (error) {
            console.error(error);
        }
    };

    const handleToggle = (volunteerId) => {
        setRotatedVolunteerIds((prevIds) => {
            const updatedIds = prevIds.includes(volunteerId)
                ? prevIds.filter((id) => id !== volunteerId) // Remove if already rotated
                : [...prevIds, volunteerId]; // Add if not rotated
            return updatedIds;
        });
    };

    useEffect(() => {
        try {
            const fetchData = async () => {
                const apiUrl = "http://localhost:4000/api/volunteers";
                const response = await axios.get(apiUrl);
                setVolunteers(response.data);
            }

            fetchData();
        } catch (error) {
            console.error(error);
        }

    }, []);

    useEffect(() => {
        if (!volunteers) return;
        const filterVolunteers = volunteers.filter((volunteer) => volunteer.status === "pending");
    
        const newGroupedVolunteers = {};
        filterVolunteers.forEach((volunteer) => {
            const formattedDate = isToday(new Date(volunteer.createdAt)) ? 'Today' : format(new Date(volunteer.createdAt), 'yyyy-MM-dd');
            if (!newGroupedVolunteers[formattedDate]) {
                newGroupedVolunteers[formattedDate] = [];
            }
            newGroupedVolunteers[formattedDate].push(volunteer);
        });
        setGroupedVolunteers(newGroupedVolunteers);
    }, [volunteers]);
    

    return (
        <div className="container mx-auto p-4">
            {Object.entries(groupedVolunteers).map(([date, filterVolunteers]) => (
                <div key={date}>
                    <h2 className='text-xl font-semibold mt-8 mb-4 text-left'>{date}</h2>
                    <FilterVolunteers
                        filterVolunteers={filterVolunteers}
                        rotatedVolunteerIds={rotatedVolunteerIds}
                        handleToggle={handleToggle}
                        handleUpdateStatus={handleUpdateStatus}
                        volunteerStatuses={volunteerStatuses}
                    />
                </div>
            ))}
        </div>
    );
}
 
export default ReceivedSeminarRequests;
