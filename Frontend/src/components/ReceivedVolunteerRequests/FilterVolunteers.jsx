/* eslint-disable react/prop-types */
import { useState } from 'react';
import VolunteerAddress from './VolunteerAddress';
import VolunteerDetails from './VolunteerDetails';
import VolunteerHeader from './VolunteerHeader';
import VolunteerStatusAndSelection from './VolunteerStatusAndSelection';
import axios from 'axios';

const FilterVolunteers = ({
    filterVolunteers,
    // rotatedVolunteerIds,
    // handleToggle,
    // handleUpdateStatus,
    // volunteerStatuses
}) => {

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

    return ( 
        <div>
            {filterVolunteers &&
                filterVolunteers.map((volunteer) => (
                    <div
                        key={volunteer._id}
                        className="md:min-h-36 md:mx-[5%] rounded-lg border border-gray-200 shadow-md mb-4 w-full p-4 md:grid md:grid-cols-3"
                    >
                        <div className={`col-span-2 grid ${
                            !rotatedVolunteerIds.includes(volunteer._id) ? 'grid-rows-1' : ''
                        }`}>

                            <VolunteerHeader
                                volunteer={volunteer}
                                rotatedVolunteerIds={rotatedVolunteerIds}
                                handleToggle={handleToggle}
                            />

                            <VolunteerDetails
                                volunteer={volunteer}
                                rotatedVolunteerIds={rotatedVolunteerIds}
                                handleToggle={handleToggle}
                            />

                        </div>
                        <div className={`grid ${
                            !rotatedVolunteerIds.includes(volunteer._id) ? 'grid-rows-1' : 'grid-rows-3'
                        }`}>

                            <VolunteerAddress
                                volunteer={volunteer}
                                rotatedVolunteerIds={rotatedVolunteerIds}
                                handleToggle={handleToggle}
                            />

                            <VolunteerStatusAndSelection
                                volunteer={volunteer}
                                rotatedVolunteerIds={rotatedVolunteerIds}
                                volunteerStatuses={volunteerStatuses}
                                onReject={() => handleUpdateStatus(volunteer._id, "rejected")}
                                onAccept={() => handleUpdateStatus(volunteer._id, "accepted")}
                            />
                            
                        </div>
                    </div>

            ))}
        </div>
     );
}
 
export default FilterVolunteers;


/* eslint-enable react/prop-types */
