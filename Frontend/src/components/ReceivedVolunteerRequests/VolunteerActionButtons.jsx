/* eslint-disable react/prop-types */

const VolunteerActionButtons = ({ 
    onReject, 
    onAccept, 
    volunteer, 
    volunteerStatuses }) => {

    return (
        <div 
            className={`flex gap-2 md:mt-0 mt-2 ${
            volunteerStatuses[volunteer._id] ? "hidden" : ""
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

  }

export default VolunteerActionButtons;


/* eslint-enable react/prop-types */
