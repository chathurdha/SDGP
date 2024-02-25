import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircleCheck, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ProfileImage from './components/ProfileImage';
import SchoolFirstLetter from './components/SchoolFirstLetter';

const ReceivedSeminarRequests = () => {

    const volunteers = [
        {_id: 1, name: "John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeDoeJohn Doe", volunteerId: 1, date: "12.12.2021", time: "12:00 PM", status: "", address: "1234 Main St, City, State, 12345", volunteerProfileImageAvailable: true, volunteerProfileColor: "bg-red-500"},
        {_id: 2, name: "Jane kenedy", volunteerId: 2, date: "12.12.2021", time: "12:00 PM", status: "", address: "1234 Main St, City, State, 12345", volunteerProfileImageAvailable: true, volunteerProfileColor: "bg-blue-500"},
        {_id: 3, name: "John SmithJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn Doe", volunteerId: 3, date: "12.12.2021", time: "12:00 PM", status: "", address: "1234 Main St, City, State, 12345", volunteerProfileImageAvailable: true, volunteerProfileColor: "bg-green-500"},
        {_id: 4, name: "Wayne Smith", volunteerId: 4, date: "12.12.2021", time: "12:00 PM", status: "", address: "1234 Main St, City, State, 12345", volunteerProfileImageAvailable: true, volunteerProfileColor: "bg-yellow-500"},
    ];

    const [rotatedVolunteerIds, setRotatedVolunteerIds] = useState([]);
    const [volunteerStatuses, setVolunteerStatuses] = useState({});

    const handleUpdateStatus = (id, status) => {
        setVolunteerStatuses((prevStatus) => ({
            ...prevStatus,
            [id]: status,
        }));
    };

    const [isSmScreen, setIsSmScreen] = useState(false);

    const handleToggle = (volunteerId) => {
        setRotatedVolunteerIds((prevIds) => {
            const updatedIds = prevIds.includes(volunteerId)
                ? prevIds.filter((id) => id !== volunteerId) // Remove if already rotated
                : [...prevIds, volunteerId]; // Add if not rotated
            return updatedIds;
        });
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmScreen(window.innerWidth < 768); // Adjust breakpoint as needed
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Call initially for accurate state

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="container mx-auto p-4">
            {volunteers &&
                volunteers.map((volunteer) => (
                    <div
                        key={volunteer._id}
                        className="md:min-h-36 rounded-lg border border-gray-200 shadow-md mb-4 w-full p-4 md:grid md:grid-cols-3">
                        <div className={`col-span-2 grid ${
                            !rotatedVolunteerIds.includes(volunteer._id) ? 'grid-rows-1' : ''
                        }`}>
                            <div 
                                className="grid md:grid-cols-6 lg:grid-cols-8"
                                onClick={isSmScreen ? () => handleToggle(volunteer._id) : null}
                            >
                                <div className={`md:w-14 md:h-14 w-12 h-12 place-self-center rounded-full flex justify-center items-center ${volunteer.volunteerProfileColor}`}>
                                    {volunteer.volunteerProfileImageAvailable ? (
                                        <ProfileImage id={volunteer._id} />
                                    ) : (
                                        <SchoolFirstLetter name={volunteer.name} />
                                    )}
                                </div>
                                {/* <div className="w-full text-2xl font-bold text-center md:text-left col-span-4">{volunteer.name}</div> */}
                                <h1 className="flex items-center md:col-span-4 w-full text-2xl font-bold md:pr-2 justify-center md:justify-start md:text-left my-4 md:my-0">{volunteer.name}</h1>
                                {!isSmScreen && (
                                    <div className="flex items-center justify-start">
                                        <FontAwesomeIcon // Bind click to the icon
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
                            <div
                                className={`row-span-2 grid md:grid-cols-2 sm:grid-cols-1 m-5 ${
                                    !rotatedVolunteerIds.includes(volunteer._id) ? 'hidden' : ''
                                }`}
                                onClick={isSmScreen ? () => handleToggle(volunteer._id) : null}
                            >
                                <div>
                                    <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                                    <p className="font-bold mr-2">Request Date:</p>
                                    <p className="md:text-left">{volunteer.date}</p>
                                    </div>
                                    <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                                    <p className="font-bold mr-2">Request Time:</p>
                                    <p className="md:text-left">{volunteer.time}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                                    <p className="font-bold mr-2">Full Name:</p>
                                    <p className="col-span-2 md:text-left">{volunteer.name}</p>
                                    </div>
                                    <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                                    <p className="md:text-left font-bold mr-2">Volunteer ID:</p>
                                    <p className="md:text-left">{volunteer.volunteerId}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`grid grid-rows-3 ${
                            !rotatedVolunteerIds.includes(volunteer._id) ? 'grid-rows-1' : ''
                        }`}>
                            {/* Rest of the code remains the same as before */}
                            <div className={`grid grid-cols-4 gap-4 ${
                                !rotatedVolunteerIds.includes(volunteer._id) ? 'hidden' : ''
                                }`}
                                onClick={isSmScreen ? () => handleToggle(volunteer._id) : null}
                            >
                                <div className="flex items-center justify-end">
                                    <FontAwesomeIcon icon={faLocationDot} 
                                        className='text-2xl'
                                    />
                                </div>
                                <div className="col-span-3 text-left flex items-center justify-start">{volunteer.address}</div>
                            </div>
                            <div className={`row-span-2 flex justify-center items-center ${
                                !rotatedVolunteerIds.includes(volunteer._id) ? "md:flex items-center" : ""
                            }`}>
                                <div className={`${
                                    volunteerStatuses[volunteer._id] ? "" : "hidden"
                                }`}>
                                    <FontAwesomeIcon
                                    icon={volunteerStatuses[volunteer._id] === "accepted" ? faCircleCheck : faCircleXmark}
                                    className={`text-6xl transition duration-1000 ease-in-out ${
                                        volunteerStatuses[volunteer._id] === "accepted" ? "text-green-500" : "text-red-500"
                                    } ${volunteerStatuses[volunteer._id] ? "" : "hidden"}`}
                                    />
                                </div>
                                <div 
                                    className={`flex gap-2 md:mt-0 mt-2 ${
                                    volunteerStatuses[volunteer._id] ? "hidden" : ""
                                    }`}
                                >
                                    <button
                                        onClick={() => handleUpdateStatus(volunteer._id, "rejected")}
                                        className='w-28 h-12 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                        >
                                        Reject
                                    </button>
                                    <button
                                        onClick={() => handleUpdateStatus(volunteer._id, "accepted")}
                                        className='w-28 h-12 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                        >
                                        Accept
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                ))}
        </div>
    );
}
 
export default ReceivedSeminarRequests;
