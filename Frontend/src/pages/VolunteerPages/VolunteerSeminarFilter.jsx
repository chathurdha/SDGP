/* eslint-disable react/prop-types */
// import { useState } from 'react';
// import axios from 'axios';
import SeminarHeader from '../../components/ReceivedSeminarRequests/SeminarHeader';
import SeminarDetails from '../../components/ReceivedSeminarRequests/SeminarDetails';
import SeminarStatusIcon from '../../components/ReceivedSeminarRequests/SeminarStatusIcon';
import SeminarActionButtons from '../../components/ReceivedSeminarRequests/SeminarActionButtons';

const VolunteerSeminarFilter = ({
    filterSeminars,
    rotatedSeminarIds,
    seminarStatuses,
    handleToggle,
    handleUpdateStatus,
}) => {

    // const [isLoading, setIsLoading] = useState(true); // Initial loading state
    // const [rotatedSeminarIds, setRotatedSeminarIds] = useState([]);
    // const [seminarStatuses, setSeminarStatuses] = useState({});

    // const handleUpdateStatus = async (id, newStatus) => {
    //     console.log(id, newStatus);
    //     setSeminarStatuses((prevStatus) => {
    //         return {
    //             ...prevStatus,//'...' spread operator to copy the previous state
    //             [id]: newStatus
    //         };
    //     });

    //     try {
    //         const apiUrl = `http://localhost:4000/api/seminars/${id}`;
        
    //         const response = await axios.patch(apiUrl, {
    //         status: newStatus, // Update only the "status" property
    //         });
        
    //         if (response.status !== 200) {
    //             setIsLoading(false);
    //         throw new Error(`Failed to update seminar: ${response.data.error || response.statusText}`);
    //         }
        
    //         console.log('Seminar updated successfully!');

    //     } catch (error) {
    //         console.error('Error updating seminar:', error);
    //     }
    // };

    // const handleToggle = (seminarId) => {
    //     setRotatedSeminarIds((prevIds) => {
    //         if (prevIds.includes(seminarId)) {
    //             return prevIds.filter((id) => id !== seminarId);
    //         } else {
    //             return [...prevIds, seminarId];
    //         }
    //     });
    // };

    return ( 
        <div>
            {filterSeminars && filterSeminars.map((seminar) => (
                <div
                    key={seminar._id}
                    className={`md:min-h-36 rounded-lg border border-gray-200 shadow-md p-4 mb-4 justify-between sm:flex flex-col ${
                    !rotatedSeminarIds.includes(seminar._id) ? "md:flex-row" : ""
                    }`}
                >
                    <SeminarHeader
                    seminar={seminar}
                    handleToggle={handleToggle}
                    rotatedSeminarIds={rotatedSeminarIds}
                    />
        
                    <SeminarDetails
                    seminar={seminar}
                    rotated={rotatedSeminarIds.includes(seminar._id)}
                    handleToggle={handleToggle}
                    />
        
                    <SeminarStatusIcon
                    seminarId={seminar._id}
                    seminarStatuses={seminarStatuses}
                    rotatedSeminarIds={rotatedSeminarIds}
                    />
        
                    <SeminarActionButtons
                    // onReject={() => handleUpdateStatus(seminar._id, "rejected")}
                    onReject={() => handleUpdateStatus(seminar, "rejected")}
                    // onAccept={() => handleUpdateStatus(seminar._id, "accepted" , seminar.expTeacherCount-=1)}
                    onAccept={() => handleUpdateStatus(seminar, "accepted" , seminar.expTeacherCount-=1)}
                    seminar={seminar}
                    seminarStatuses={seminarStatuses}
                    />
    
                </div>
            ))}
        </div>
     );
}
 
export default VolunteerSeminarFilter;


/* eslint-enable react/prop-types */
