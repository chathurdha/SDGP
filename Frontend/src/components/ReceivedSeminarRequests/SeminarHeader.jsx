/* eslint-disable react/prop-types */
import ProfileImage from './ProfileImage';
import SchoolFirstLetter from './SchoolFirstLetter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {isMobile} from 'react-device-detect';

const SeminarHeader = ({
    seminar,
    handleToggle,
    rotatedSeminarIds,
    }) => {

        return (
            <div
                className={`m-2 grid md:grid-cols-6 lg:grid-cols-10 text-left ${
                    isMobile ? "cursor-pointer" : ""
                }`}
                onClick={isMobile ? () => handleToggle(seminar._id) : null}
            >
                <div 
                    className={`md:w-14 md:h-14 w-12 h-12 place-self-center rounded-full flex justify-center items-center md:mr-10 md:mb-0 mb-2`}
                    style={{ backgroundColor: seminar.schoolProfileColor }}
                >
                    {seminar.schoolProfileImageAvailable ? (
                    <ProfileImage id={seminar.schoolId} />
                    ) : (
                    <SchoolFirstLetter name={seminar.schoolName} />
                    )}
                </div>
                <div className={`md:col-span-4 lg:col-span-8 flex flex-row items-center`}>
                    <h1 className="w-full font-serif text-2xl font-light text-gray-700 md:pr-2 text-center md:text-left">{seminar.schoolName}</h1>
                    {!isMobile && (
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`transform transition duration-200 cursor-pointer ${rotatedSeminarIds.includes(seminar._id) ? 'rotate-180' : ''}`}
                        onClick={() => handleToggle(seminar._id)}
                    />
                    )}
                </div>
            </div>
        );
}
 
export default SeminarHeader;

/* eslint-enable react/prop-types */
