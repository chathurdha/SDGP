import Logo from '../assets/react.svg'
export default function SchoolProfile() {
    return(
        <div className='w-1/2 py-9 shadow-2xl rounded-2xl flex flex-col justify-center items-center gap-9'>
            <div className='w-32 h-32 border-2 rounded-full mt-4'>
                <img src={Logo} alt='Logo' className='w-full h-full'/>
            </div>
            <h1 className='text-2xl font-bold text-center text-gray-800 '>Senarathgama Kanishta Vidyalaya</h1>
            <div className='flex flex-col items-center justify-center w-full pb-9'>
                <div className='flex flex-row justify-between w-1/2'>
                    <p className='text-sm text-gray-800 '>District</p>
                    <p className='text-sm text-gray-500'>Kandy</p>
                </div>
                <div className='flex flex-row justify-between w-1/2'>
                    <p className='text-sm text-gray-800 '>Seminar Conducted</p>
                    <p className='text-sm text-gray-500'>9</p>
                </div>
                <div className='flex flex-row justify-between w-1/2'>
                    <p className='text-sm text-gray-800 '>Contact Number</p>
                    <p className='text-sm text-gray-500'>+94 XXX XXX XXXX</p>
                </div>
            </div>
            <button type='button' className='w-1/2 h-12 text-sm text-white bg-[#8260E2] rounded-md mb-9'>Edit Profile</button>
        </div>
    )
}