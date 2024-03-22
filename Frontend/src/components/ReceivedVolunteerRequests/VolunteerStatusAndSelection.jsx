/* eslint-disable react/prop-types */

import VolunteerStatusIcons from './VolunteerStatusIcons';
import VolunteerActionButtons from './VolunteerActionButtons';

const VolunteerStatusAndSelection = ({
    volunteer,
    rotatedVolunteerIds,
    volunteerStatuses,
    onReject, 
    onAccept
}) => {
    return ( 
        <div className={`row-span-2 flex justify-center items-center ${
            !rotatedVolunteerIds.includes(volunteer._id) ? "md:flex items-center" : ""
        }`}>
            <VolunteerStatusIcons
                volunteer={volunteer}
                volunteerStatuses={volunteerStatuses}
            />
            <VolunteerActionButtons
                onReject={onReject}
                onAccept={onAccept}
                volunteer={volunteer}
                volunteerStatuses={volunteerStatuses}
            />
        </div>
     );
}

export default VolunteerStatusAndSelection;

/* eslint-enable react/prop-types */
