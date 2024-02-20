import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
{/* <FontAwesomeIcon icon={faCircleCheck} /> */}
{/* <FontAwesomeIcon icon={faCircleXmark} /> */}

import SchoolFirstLetter from './components/SchoolFirstLetter';

const ReceivedSeminarRequests = () => {

  const seminars = [
      { _id: 1, name: "Seminar 1", description: "This is the first seminar", rating: 4.0, organizationId: 1, year: 2021, location: "location 1", status: "", subject: "subject 1", grade: "grade 1", expStudentCount: 10, expTeacherCount: 2, additionalRequests: "additional requests 1", expDate: "2nd of May, 2022", schoolId: 1},
      { _id: 2, name: "Seminar 2", description: "This is the second seminar", rating: 3.0, organizationId: 2, year: 2022, location: "location 2", status: "", subject: "subject 2", grade: "grade 2", expStudentCount: 20, expTeacherCount: 4, additionalRequests: "additional requests 2", expDate: "3rd of May, 2023", schoolId: 2},
      { _id: 3, name: "Seminar 3", description: "This is the third seminar", rating: 3.5, organizationId: 3, year: 2023, location: "location 3", status: "", subject: "subject 3", grade: "grade 3", expStudentCount: 30, expTeacherCount: 6, additionalRequests: "additional requests 3", expDate: "4th of May, 2024", schoolId: 3},
      { _id: 4, name: "Seminar 4", description: "This is the fourth seminar", rating: 4.5, organizationId: 1, year: 2021, location: "location 1", status: "", subject: "subject 4", grade: "grade 4", expStudentCount: 40, expTeacherCount: 8, additionalRequests: "additional requests 4", expDate: "5th of May, 2022", schoolId: 1},
      { _id: 5, name: "Seminar 5", description: "This is the fifth seminar", rating: 5.0, organizationId: 2, year: 2022, location: "location 2", status: "", subject: "subject 5", grade: "grade 5", expStudentCount: 50, expTeacherCount: 10, additionalRequests: "additional requests 5", expDate: "6th of May, 2023", schoolId: 2},
      { _id: 6, name: "Seminar 6", description: "This is the sixth seminar", rating: 3.5, organizationId: 3, year: 2023, location: "location 3", status: "", subject: "subject 6", grade: "grade 6", expStudentCount: 60, expTeacherCount: 12, additionalRequests: "additional requests 6", expDate: "7th of May, 2024", schoolId: 3}
  ];

  const schools = [
      { _id: 1, name: "School 1", address: "address 1", profileColor: "bg-red-400"},
      { _id: 2, name: "School 2", address: "address 2", profileColor: "bg-green-200"},
      { _id: 3, name: "School 3", address: "address 3", profileColor: "bg-blue-400"}
  ]

  // Function to find the corresponding school object for a seminar
  const findSchoolForSeminar = (seminarId) => {
      return schools.find((school) => school._id === seminarId);
  };

  const combinedArray = seminars.map((seminar) => {
      const school = findSchoolForSeminar(seminar.schoolId);
  
      // Combine seminar and school data (adjust properties as needed)
      return {
          ...seminar,
          schoolName: school ? school.name : null, // Handle cases where school is not found
          schoolAddress: school ? school.address : null,
          schoolProfileColor: school ? school.profileColor : null
      };
  });

  const [rotatedSeminarIds, setRotatedSeminarIds] = useState([]);

  const [seminarStatuses, setSeminarStatuses] = useState({});

  const handleUpdateStatus = (id, status) => {
      // console.log(combinedArray);
      console.log(id, status);
      setSeminarStatuses((prevStatus) => {
          return {
              ...prevStatus,
              [id]: status
          };
      });
  };

//   const handleUpdateStatus = async (seminarId, status) => {
//     event.preventDefault();

//     try {
//         const response = await fetch(`/api/seminars/${seminarId}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ status }) // Send updated status
//         });

//         if (response.ok) {
//             // Update local state if successful (optional)
//             // ...
//             console.log('Status updated successfully');
//         } else {
//             console.error('Error updating status:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Error updating status:', error);
//     }
// };

  const handleToggle = (seminarId) => {
    // Update rotatedSeminarIds state
    setRotatedSeminarIds((prevIds) => {
      if (prevIds.includes(seminarId)) {
        // Remove id if already rotated
        return prevIds.filter((id) => id !== seminarId);
      } else {
        // Add id if not rotated
        return [...prevIds, seminarId];
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      {combinedArray && combinedArray.map((seminar) => (
        <div
          key={seminar._id}
          className={`seminar rounded-lg border border-gray-200 shadow-md p-4 mb-4 justify-between flex flex-col ${
              !rotatedSeminarIds.includes(seminar._id) ? "md:flex-row" : ""
          }`}
        >
          <div className="flex items-center m-2">
            <div className={`md:w-14 md:h-14 w-12 h-12 rounded-full flex justify-center items-center md:mr-10 mr-5 ${seminar.schoolProfileColor}`}>
              <h1>
                <SchoolFirstLetter name={seminar.schoolName} />
              </h1>
            </div>
            <h1 className="text-2xl font-bold pr-2">{seminar.schoolName}</h1>
            <FontAwesomeIcon
              icon={faAngleDown}
              className={`transform transition duration-200 cursor-pointer ${rotatedSeminarIds.includes(seminar._id) ? 'rotate-180' : ''}`}
              onClick={() => handleToggle(seminar._id)}
            />
          </div>
          {rotatedSeminarIds.includes(seminar._id) && (
            <div className="grid md:grid-flow-col my-2 ml-4">
              <div className="">
                <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                  <p className="font-bold mr-2">Expected Seminar Date:</p>
                  <p className="">{seminar.expDate}</p>
                </div>
                <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                  <p className="font-bold mr-2">Subject:</p>
                  <p className="">{seminar.subject}</p>
                </div>
                <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                  <p className="font-bold mr-2">Estimated Student Count:</p>
                  <p className="">{seminar.expStudentCount}</p>
                </div>
                <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                  <p className="font-bold mr-2">Expected Teacher Count:</p>
                  <p className="">{seminar.expTeacherCount}</p>
                </div>
                <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                  <p className="font-bold mr-2">Grade:</p>
                  <p className="">{seminar.grade}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mb-4">
                <p className="font-bold mr-2">Additional request:</p>
                <p className="">{seminar.additionalRequests}</p>
              </div>
            </div>
          )}
          <div 
            className={`flex justify-center items-center gap-2 md:mt-0 mt-2 ${
            seminarStatuses[seminar._id] ? "hidden" : ""
            }`}
          >
            <button
              onClick={() => handleUpdateStatus(seminar._id, "rejected")}
              className='w-28 h-12 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Reject
            </button>
            <button
              onClick={() => handleUpdateStatus(seminar._id, "accepted")}
              className='w-28 h-12 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Accept
            </button>
          </div>
          <div className={`${
            !rotatedSeminarIds.includes(seminar._id) ? "md:flex items-center" : ""
          }`}>
            <FontAwesomeIcon
              icon={seminarStatuses[seminar._id] === "accepted" ? faCircleCheck : faCircleXmark}
              className={`text-6xl ${
                seminarStatuses[seminar._id] === "accepted" ? "text-green-500" : "text-red-500"
              } ${seminarStatuses[seminar._id] ? "" : "hidden"}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default ReceivedSeminarRequests;