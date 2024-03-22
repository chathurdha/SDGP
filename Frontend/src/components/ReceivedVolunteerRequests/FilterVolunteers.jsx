import React, { useState } from 'react';
import axios from 'axios';

import VolunteerAddress from './VolunteerAddress';
import VolunteerDetails from './VolunteerDetails';
import VolunteerHeader from './VolunteerHeader';
import VolunteerStatusAndSelection from './VolunteerStatusAndSelection';

const FilterVolunteers = ({
    filterVolunteers,
    rotatedVolunteerIds,
    handleToggle,
    handleUpdateStatus,
    volunteerStatuses
}) => {

    return ( 
        <div>
            {filterVolunteers &&
                filterVolunteers.map((volunteer) => (
                    <div
                        key={volunteer._id}
                        className="md:min-h-36 rounded-lg border border-gray-200 shadow-md mb-4 w-full p-4 md:grid md:grid-cols-3"
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