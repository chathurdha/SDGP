import React from "react";

const SeminarDetails = ({
    seminar,
    rotated,
    handleToggle,
    isSmScreen,
    }) => {

    return (
        rotated && (
        <div
            className={`grid md:grid-cols-2 md:grid-flow-col my-2 ml-4 ${
            isSmScreen ? "cursor-pointer" : ""
            }`}
            onClick={isSmScreen ? () => handleToggle(seminar._id) : null}
        >
            <div className="">    
                <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                    <p className="font-bold mr-2">Expected Seminar Date:</p>
                    <p className="md:text-left">{seminar.expDate}</p>
                </div>
                <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                    <p className="font-bold mr-2">Subject:</p>
                    <p className="md:text-left">{seminar.subject}</p>
                </div>
                <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                    <p className="font-bold mr-2">Estimated Student Count:</p>
                    <p className="md:text-left">{seminar.expStudentCount}</p>
                </div>
                <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                    <p className="font-bold mr-2">Expected Teacher Count:</p>
                    <p className="md:text-left">{seminar.expTeacherCount}</p>
                </div>
                <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                    <p className="font-bold mr-2">Grade:</p>
                    <p className="md:text-left">{seminar.grade}</p>
                </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 mb-4">
                <p className="font-bold mr-2">Additional request:</p>
                <p className="text-justify md:col-span-2">{seminar.additionalRequests}</p>
            </div>
        </div>
      )
    );
  };
  
  export default SeminarDetails;