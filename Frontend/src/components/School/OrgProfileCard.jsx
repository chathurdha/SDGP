/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
// import axios from 'axios';
import Logo from '../../assets/react.svg';

export default function OrgProfileCard({ organization, allSeminars, allVolunteers }) {

    const [isOpen, setIsOpen] = useState(false);
    // const [allSeminars, setAllSeminars] = useState([]);
    // const [allVolunteers, setAllVolunteers] = useState([]);
    const [seminars, setSeminars] = useState([]);
    const [volunteers, setVolunteers] = useState([]);

    // console.log(allSeminars);

    useEffect(() => {
        if (allSeminars.length > 0) {
            const specificSeminars = allSeminars.filter((seminar) => seminar.organizationId === organization._id);
            const seminars = specificSeminars.filter((seminar) => new Date(seminar.expDate) < new Date());
            setSeminars(seminars);
        }
    }, [allSeminars]);

    console.log(seminars);

    useEffect(() => {
    if (allVolunteers.length > 0) {
        const volunteers = allVolunteers.filter((volunteer) => volunteer.orgID === organization._id);
        setVolunteers(volunteers);
    }
    }, [allVolunteers]);

    console.log(volunteers);

    // useEffect(() => {
    //     const fetchData = async (apiUrl) => {
    //       try {
    //         const response = await axios.get(apiUrl);
    //         switch (apiUrl) {
    //             case "http://localhost:4000/api/volunteers":
    //                 setAllVolunteers(response.data);
    //                 break;
    //             case "http://localhost:4000/api/seminars":
    //                 setAllSeminars(response.data);
    //                 break;
    //             default:
    //                 console.warn("Unexpected API URL:", apiUrl);
    //         }
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       } finally {

    //       }
    //     };
    
    //     fetchData("http://localhost:4000/api/volunteers");
    //     fetchData("http://localhost:4000/api/seminars");
    // }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
        {!isOpen ? (
        <div className='w-full md:w-1/2 py-2 px-3 shadow-xl rounded-2xl flex flex-row items-center gap-9 mt-9 mx-auto' onClick={toggleDropdown}>
            <div className='w-16 h-16 border-2 rounded-full mt-4'>
                <img src={Logo} alt='Logo' className='w-full h-full cursor-pointer'/>
            </div>
            <h1 className='text-xl font-bold text-center text-gray-800 cursor-pointer' onClick={toggleDropdown}>
                {organization.name}
            </h1>
        </div>
        ): (
            <div className='w-full md:w-1/2 py-9 mx-auto shadow-2xl rounded-2xl flex flex-col justify-center items-center gap-9 mt-9' onClick={toggleDropdown} >
                <div className='w-32 h-32 border-2 rounded-full mt-4'>
                    <img src={Logo} alt='Logo' className='w-full h-full'/>
                </div>
                <h1 className='text-2xl font-bold text-center text-gray-800 '>{organization.name}</h1>

                <div className='flex flex-row justify-center w-3/4'>
                    <p className='text-sm text-gray-800 text-center'>
                        {organization.description}
                    </p>
                </div>
                <div className=''>
                    <div className='flex flex-col justify-start w-full pb-9'>
                    <div className='flex flex-row'>
                        <p className='text-sm font-medium text-gray-80 mr-2'>Conducted Seminars :</p>
                        <p className='text-sm text-gray-500'>{seminars.length}</p>
                    </div>

                    <div className='flex flex-row'>
                        <p className='text-sm font-medium  text-gray-800 mr-2'>Volunteer Count :</p>
                        <p className='text-sm text-gray-500'>{volunteers.length}</p>
                    </div>
                    <div className='flex flex-row'>
                        <p className='text-sm font-medium  text-gray-800 mr-2'>Contact Number :</p>
                        <p className='text-sm text-gray-500'>{organization.phone}</p>
                    </div>
                    </div>
                </div>
            </div>
        )}
        </div>

    //     <div className={`org-card ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
    //   <div className="org-card-header flex items-center gap-4">
    //     <div className="org-card-logo w-16 h-16 rounded-full border-2">
    //       <img src={Logo} alt="Logo" className="w-full h-full cursor-pointer" />
    //     </div>
    //     <h1 className="org-card-title text-xl font-bold text-gray-800 cursor-pointer">
    //       {organization.name}
    //     </h1>
    //   </div>
    //   {isOpen && (
    //     <div className="org-card-details flex flex-col gap-4 p-4">
    //       <div className="org-card-description text-sm text-gray-800">
    //         {organization.description}
    //       </div>
    //       <div className="org-card-stats flex flex-wrap justify-between gap-4">
    //         <div className="stat flex items-center">
    //           <p className="text-sm text-gray-800">Conducted Seminars</p>
    //           <p className="text-sm text-gray-500">150</p>
    //         </div>
    //         <div className="stat flex items-center">
    //           <p className="text-sm text-gray-800">Volunteer Count</p>
    //           <p className="text-sm text-gray-500">100</p>
    //         </div>
    //         <div className="stat flex items-center">
    //           <p className="text-sm text-gray-800">Contact Number</p>
    //           <p className="text-sm text-gray-500">{organization.phone}</p>
    //         </div>
    //         <div className="stat flex items-center">
    //           <p className="text-sm text-gray-800">Website</p>
    //           <a
    //             href={organization.website}
    //             className="text-sm text-gray-500"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             {organization.website}
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
    );
}



/* eslint-enable react/prop-types */