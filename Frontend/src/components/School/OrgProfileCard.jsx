import { useState } from 'react';
import Logo from '../../assets/react.svg';

export default function OrgProfileCard({ organization }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
        {!isOpen ? (
        <div className='w-1/2 py-2 px-3 shadow-xl rounded-2xl flex flex-row items-center gap-9 mt-9 mx-auto' onClick={toggleDropdown}>
            <div className='w-16 h-16 border-2 rounded-full mt-4'>
                <img src={Logo} alt='Logo' className='w-full h-full cursor-pointer'/>
            </div>
            <h1 className='text-xl font-bold text-center text-gray-800 cursor-pointer' onClick={toggleDropdown}>
                {organization.name}
            </h1>
        </div>
        ): (
            <div className='w-1/2 py-9 mx-auto shadow-2xl rounded-2xl flex flex-col justify-center items-center gap-9 mt-9' onClick={toggleDropdown} >
                <div className='w-32 h-32 border-2 rounded-full mt-4'>
                    <img src={Logo} alt='Logo' className='w-full h-full'/>
                </div>
                <h1 className='text-2xl font-bold text-center text-gray-800 '>{organization.name}</h1>

                <div className='flex flex-row justify-center w-3/4'>
                    <p className='text-sm text-gray-800 text-center'>
                        {organization.description}
                    </p>

                </div>
                <div className='flex flex-col items-center justify-center w-full pb-9'>
                    <div className='flex flex-row justify-between w-1/2'>
                        <p className='text-sm text-gray-800 '>Conducted Seminars</p>
                        <p className='text-sm text-gray-500'>150</p>
                    </div>

                    <div className='flex flex-row justify-between w-1/2'>
                        <p className='text-sm text-gray-800 '>Volunteer Count</p>
                        <p className='text-sm text-gray-500'>100</p>
                    </div>
                    <div className='flex flex-row justify-between w-1/2'>
                        <p className='text-sm text-gray-800 '>Contact Number</p>
                        <p className='text-sm text-gray-500'>{organization.phone}</p>
                    </div>
                    <div className='flex flex-row justify-between w-1/2 gap-2'>
                        <p className='text-sm text-gray-800 '>Webiste</p>
                        <a href={organization.website} className='text-sm text-gray-500' target={"_blank"}
                           rel="noreferrer">{organization.website}</a>
                    </div>

                </div>
            </div>
        )}
        </div>
    );
}
