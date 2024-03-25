/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import SeminarHeader from './SeminarHeader';
import SeminarDetails from './SeminarDetails';
import SeminarStatusIcon from './SeminarStatusIcon';
import SeminarActionButtons from './SeminarActionButtons';

const FilterSeminars = ({
    filterSeminars,
    // rotatedSeminarIds,
    // seminarStatuses,
    // handleToggle,
    // handleUpdateStatus,
    // isLoading
}) => {

    const [isLoading, setIsLoading] = useState(true); // Initial loading state
    const [rotatedSeminarIds, setRotatedSeminarIds] = useState([]);
    const [seminarStatuses, setSeminarStatuses] = useState({});

    const handleUpdateStatus = async (id, newStatus) => {
        console.log(id, newStatus);
        setSeminarStatuses((prevStatus) => {
            return {
                ...prevStatus,//'...' spread operator to copy the previous state
                [id]: newStatus
            };
        });

        try {
            const apiUrl = `https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars/${id}`;
        
            const response = await axios.patch(apiUrl, {
            status: newStatus, // Update only the "status" property
            });
        
            if (response.status !== 200) {
                setIsLoading(false);
            throw new Error(`Failed to update seminar: ${response.data.error || response.statusText}`);
            }
        
            console.log('Seminar updated successfully!');

        } catch (error) {
            console.error('Error updating seminar:', error);
        }
    };

    const handleToggle = (seminarId) => {
        setRotatedSeminarIds((prevIds) => {
            if (prevIds.includes(seminarId)) {
                return prevIds.filter((id) => id !== seminarId);
            } else {
                return [...prevIds, seminarId];
            }
        });
    };

    return ( 
        <div>
            {!isLoading ? (
                <p>Loading</p>
                ) : (
                filterSeminars && filterSeminars.map((seminar) => (
                    <div
                        key={seminar._id}
                        className={`md:min-h-36 mx-[5%] rounded-lg border border-gray-200 shadow-md p-4 mb-4 justify-between sm:flex flex-col ${
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
                        onReject={() => handleUpdateStatus(seminar._id, "rejected")}
                        onAccept={() => handleUpdateStatus(seminar._id, "accepted" , seminar.expTeacherCount-=1)}
                        seminar={seminar}
                        seminarStatuses={seminarStatuses}
                        />
        
                    </div>
                ))
            )}
        </div>
     );
}
 
export default FilterSeminars;


/* eslint-enable react/prop-types */
