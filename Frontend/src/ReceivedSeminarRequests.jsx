import  { useEffect, useState } from 'react';

import SeminarHeader from './components/SeminarHeader';
import SeminarDetails from './components/SeminarDetails';
import SeminarStatusIcon from './components/SeminarStatusIcon';
import SeminarActionButtons from './components/SeminarActionButtons';

const ReceivedSeminarRequests = () => {

  // const seminars = [
  //     { _id: 1, name: "Seminar 1", description: "This is the first seminar", rating: 4.0, organizationId: 1, year: 2021, location: "location 1", status: "", subject: "subject 1", grade: "grade 1", expStudentCount: 10, expTeacherCount: 2, additionalRequests: "additional requests 1", expDate: "2nd of May, 2022", schoolId: 1},
  //     { _id: 2, name: "Seminar 2", description: "This is the second seminar", rating: 3.0, organizationId: 2, year: 2022, location: "location 2", status: "", subject: "subject 2", grade: "grade 2", expStudentCount: 20, expTeacherCount: 4, additionalRequests: "additional requests 2", expDate: "3rd of May, 2023", schoolId: 2},
  //     { _id: 3, name: "Seminar 3", description: "This is the third seminar", rating: 3.5, organizationId: 3, year: 2023, location: "location 3", status: "", subject: "subject 3", grade: "grade 3", expStudentCount: 30, expTeacherCount: 6, additionalRequests: "additional requests 3", expDate: "4th of May, 2024", schoolId: 3},
  //     { _id: 4, name: "Seminar 4", description: "This is the fourth seminar", rating: 4.5, organizationId: 1, year: 2021, location: "location 1", status: "", subject: "subject 4", grade: "grade 4", expStudentCount: 40, expTeacherCount: 8, additionalRequests: "additional requests 4", expDate: "5th of May, 2022", schoolId: 1},
  //     { _id: 5, name: "Seminar 5", description: "This is the fifth seminar", rating: 5.0, organizationId: 2, year: 2022, location: "location 2", status: "", subject: "subject 5", grade: "grade 5", expStudentCount: 50, expTeacherCount: 10, additionalRequests: "additional requests 5", expDate: "6th of May, 2023", schoolId: 2},
  //     { _id: 6, name: "Seminar 6", description: "This is the sixth seminar", rating: 3.5, organizationId: 3, year: 2023, location: "location 3", status: "", subject: "subject 6", grade: "grade 6", expStudentCount: 60, expTeacherCount: 12, additionalRequests: "additional requests 6", expDate: "7th of May, 2024", schoolId: 3}
  // ];

  const seminars = [
      { _id: 1, name: "Seminar 1", description: "This is the first seminar", rating: 4.0, organizationId: 1, year: 2021, location: "location 1", status: "", subject: "subject 1", grade: "grade 1", expStudentCount: 10, expTeacherCount: 2, additionalRequests: "The aroma of freshly baked bread wafted through the air, pulling Amelia from her book.Sunlight streamed through the window, illuminating dust motes dancing in the warm air. Curiosity piqued, she peeked into the kitchen, where her grandmother hummed a cheerful tune while shaping a new loaf.", expDate: "2nd of May, 2022", schoolId: 1},
      { _id: 2, name: "Seminar 2", description: "This is the second seminar", rating: 3.0, organizationId: 2, year: 2022, location: "location 2", status: "", subject: "subject 2", grade: "grade 2", expStudentCount: 20, expTeacherCount: 4, additionalRequests: "The aroma of freshly baked bread wafted through the air, pulling Amelia from her book.Sunlight streamed through the window, illuminating dust motes dancing in the warm air. Curiosity piqued, she peeked into the kitchen, where her grandmother hummed a cheerful tune while shaping a new loaf.", expDate: "3rd of May, 2023", schoolId: 2},
      { _id: 3, name: "Seminar 3", description: "This is the third seminar", rating: 3.5, organizationId: 3, year: 2023, location: "location 3", status: "", subject: "subject 3", grade: "grade 3", expStudentCount: 30, expTeacherCount: 6, additionalRequests: "The aroma of freshly baked bread wafted through the air, pulling Amelia from her book.Sunlight streamed through the window, illuminating dust motes dancing in the warm air. Curiosity piqued, she peeked into the kitchen, where her grandmother hummed a cheerful tune while shaping a new loaf.", expDate: "4th of May, 2024", schoolId: 3},
      { _id: 4, name: "Seminar 4", description: "This is the fourth seminar", rating: 4.5, organizationId: 1, year: 2021, location: "location 1", status: "", subject: "subject 4", grade: "grade 4", expStudentCount: 40, expTeacherCount: 8, additionalRequests: "The aroma of freshly baked bread wafted through the air, pulling Amelia from her book.Sunlight streamed through the window, illuminating dust motes dancing in the warm air. Curiosity piqued, she peeked into the kitchen, where her grandmother hummed a cheerful tune while shaping a new loaf.", expDate: "5th of May, 2022", schoolId: 1},
      { _id: 5, name: "Seminar 5", description: "This is the fifth seminar", rating: 5.0, organizationId: 2, year: 2022, location: "location 2", status: "", subject: "subject 5", grade: "grade 5", expStudentCount: 50, expTeacherCount: 10, additionalRequests: "The aroma of freshly baked bread wafted through the air, pulling Amelia from her book.Sunlight streamed through the window, illuminating dust motes dancing in the warm air. Curiosity piqued, she peeked into the kitchen, where her grandmother hummed a cheerful tune while shaping a new loaf.", expDate: "6th of May, 2023", schoolId: 2},
      { _id: 6, name: "Seminar 6", description: "This is the sixth seminar", rating: 3.5, organizationId: 3, year: 2023, location: "location 3", status: "", subject: "subject 6", grade: "grade 6", expStudentCount: 60, expTeacherCount: 12, additionalRequests: "additional request ", expDate: "7th of May, 2024", schoolId: 3}
  ];

  const schools = [
      { _id: 1, name: "School 1 computers science software engineering", address: "address 1", profileColor: "bg-red-400", profileImageAvailable: true},
      { _id: 2, name: "School 2", address: "address 2", profileColor: "bg-green-200", profileImageAvailable: false},
      { _id: 3, name: "School 3", address: "address 3", profileColor: "bg-blue-400", profileImageAvailable: true}
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
          schoolId: school ? school._id : null, // Handle cases where school is not found
          schoolName: school ? school.name : null, // Handle cases where school is not found
          schoolAddress: school ? school.address : null,
          schoolProfileColor: school ? school.profileColor : null,
          schoolProfileImageAvailable: school ? school.profileImageAvailable : null
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

  const [isSmScreen, setIsSmScreen] = useState(false);

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

  // Detect screen size on component mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmScreen(window.innerWidth < 768); // Adjust breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially for accurate state

    // Cleanup function to remove event listener on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {combinedArray && combinedArray.map((seminar) => (
        <div
          key={seminar._id}
          className={`seminar rounded-lg border border-gray-200 shadow-md p-4 mb-4 justify-between sm:flex flex-col ${
            !rotatedSeminarIds.includes(seminar._id) ? "md:flex-row" : ""
            }`}
        >
          <SeminarHeader
            seminar={seminar}
            handleToggle={handleToggle}
            rotatedSeminarIds={rotatedSeminarIds}
            isSmScreen={isSmScreen}
          />

          <SeminarDetails
            seminar={seminar}
            rotated={rotatedSeminarIds.includes(seminar._id)}
            handleToggle={handleToggle}
            isSmScreen={isSmScreen}
          />

          <SeminarStatusIcon
            seminarId={seminar._id}
            seminarStatuses={seminarStatuses}
            rotatedSeminarIds={rotatedSeminarIds}
          />

          <SeminarActionButtons
            onReject={() => handleUpdateStatus(seminar._id, "rejected")}
            onAccept={() => handleUpdateStatus(seminar._id, "accepted")}
            seminar={seminar}
            seminarStatuses={seminarStatuses}
          />

        </div>
      ))}
    </div>
  );
}
 
export default ReceivedSeminarRequests;