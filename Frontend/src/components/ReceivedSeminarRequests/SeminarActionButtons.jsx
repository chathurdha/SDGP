import React from "react";

const SeminarActionButtons = ({ onReject, onAccept, seminar, seminarStatuses }) => {
    return (
        <div 
        className={`flex justify-center items-center gap-2 md:mt-0 mt-2 ${
        seminarStatuses[seminar._id] ? "hidden" : ""
        }`}
        >
            <button
            onClick={onReject}
            className='w-28 h-12 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
            Reject
            </button>
            <button
            onClick={onAccept}
            className='w-28 h-12 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
            Accept
            </button>
        </div>
    );
  };
  
  export default SeminarActionButtons;