/* eslint-disable react/prop-types */


import ProfileImage from '../ReceivedSeminarRequests/ProfileImage';
import SchoolFirstLetter from '../ReceivedSeminarRequests/SchoolFirstLetter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {isMobile} from 'react-device-detect';

const VolunteerHeader = ({
    volunteer,
    handleToggle,
    rotatedVolunteerIds,
    }) => {
        return (
            <div 
                className="grid md:grid-cols-6 lg:grid-cols-8"
                onClick={isMobile ? () => handleToggle(volunteer._id) : null}
            >
                <div className={`md:w-14 md:h-14 w-12 h-12 place-self-center rounded-full flex justify-center items-center
                    ${!volunteer.volunteerProfileColor ? 'bg-green-400' : `${volunteer.volunteerProfileColor}`}        
                `}>
                    {volunteer.volunteerProfileImageAvailable ? (
                        <ProfileImage id={volunteer._id} />
                    ) : (
                        <SchoolFirstLetter name={volunteer.name} />
                    )}
                </div>
                <h1 className="flex items-center md:col-span-4 w-full font-serif text-2xl font-light text-gray-700 md:pr-2 justify-center md:justify-start md:text-left my-4 md:my-0">{volunteer.name}</h1>
                {!isMobile && (
                    <div className="flex items-center justify-start">
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            className={`transform transition duration-200 cursor-pointer ${
                                rotatedVolunteerIds.includes(volunteer._id)
                                    ? 'rotate-180'
                                    : ''
                            }`}
                            onClick={() => handleToggle(volunteer._id)}
                        />
                    </div>
                )}
            </div>
        );
    }

export default VolunteerHeader;


/* eslint-enable react/prop-types */
