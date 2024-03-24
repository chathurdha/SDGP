/* eslint-disable react/prop-types */
import {isMobile} from 'react-device-detect';
import ProcessDate from './ProcessDate';

const SeminarDetails = ({
    seminar,
    rotated,
    handleToggle,
    }) => {

        // const datePart = seminar.expDate.split('T')[0];
        const { formattedDate } = ProcessDate(seminar);

        return (
            rotated && (
                <div
                    className={`grid md:grid-cols-2 md:grid-flow-col my-2 ml-4 ${
                        isMobile ? "cursor-pointer" : ""
                    }`}
                    onClick={isMobile ? () => handleToggle(seminar._id) : null}
                >
                    <div className="">    
                        <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                            <p className="font-semibold text-gray-700 font-sans mr-2">Expected Seminar Date:</p>
                            {/* <p className="md:text-left">{seminar.expDate}</p> */}
                            {/* <p className="md:text-left">{datePart}</p> */}
                            <p className="md:text-left font-sans">{formattedDate}</p>
                        </div>
                        <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                            <p className="font-semibold text-gray-700 font-sans mr-2">Subject:</p>
                            <p className="md:text-left font-sans">{seminar.subject}</p>
                        </div>
                        <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                            <p className="font-semibold text-gray-700 font-sans mr-2">Estimated Student Count:</p>
                            <p className="md:text-left font-sans">{seminar.expStudentCount}</p>
                        </div>
                        <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                            <p className="font-semibold text-gray-700 font-sans mr-2">Expected Teacher Count:</p>
                            <p className="md:text-left font-sans">{seminar.expTeacherCount}</p>
                        </div>
                        <div className="flex flex-col md:flex-row mb-4 md:mb-1">
                            <p className="font-semibold text-gray-700 font-sans mr-2">Grade:</p>
                            <p className="md:text-left font-sans">{seminar.grade}</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-3 mb-4">
                        <p className="font-semibold text-gray-700 font-sans mr-2">Additional request:</p>
                        <p className="text-justify md:col-span-2 font-sans">{seminar.additionalRequests}</p>
                    </div>
                </div>
            )
        );
    };
  
export default SeminarDetails;

/* eslint-enable react/prop-types */
