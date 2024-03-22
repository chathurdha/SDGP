import React, { useState } from 'react';
import axios from 'axios';

import SeminarHeader from './SeminarHeader';
import SeminarDetails from './SeminarDetails';
import SeminarStatusIcon from './SeminarStatusIcon';
import SeminarActionButtons from './SeminarActionButtons';

const FilterSeminars = ({
    filterSeminars,
    rotatedSeminarIds,
    seminarStatuses,
    handleToggle,
    handleUpdateStatus,
    isLoading
}) => {
    return ( 
        <div>
            {!isLoading ? (
                <p>Loading</p>
                ) : (
                filterSeminars && filterSeminars.map((seminar) => (
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