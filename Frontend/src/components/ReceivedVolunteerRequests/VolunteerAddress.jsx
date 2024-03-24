/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {isMobile} from 'react-device-detect';

const VolunteerAddress = ( {
    volunteer,
    handleToggle,
    rotatedVolunteerIds
} ) => {
    return (
        <div className={`grid grid-cols-4 mb-4 md:mb-0 gap-4 ${
            !rotatedVolunteerIds.includes(volunteer._id) ? 'hidden' : ''
            }`}
            onClick={isMobile ? () => handleToggle(volunteer._id) : null}
        >
            <div className="flex items-center justify-end">
                <FontAwesomeIcon icon={faLocationDot} 
                    className='text-2xl'
                />
            </div>
            <div className="col-span-3 text-left font-sans text-sm flex items-center justify-start">{volunteer.address}</div>
        </div>
    );
}

export default VolunteerAddress;

/* eslint-enable react/prop-types */
