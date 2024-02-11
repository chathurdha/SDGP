export default function VolunteerSignUp() {
return(
    <div className='py-2 my-4 shadow-2xl rounded-2xl'>
        <button type="button"
                className="flex items-center justify-center ml-4 mt-5 text-sm text-gray-700  rounded-lg gap-1">
            <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
            </svg>
            <span>Back</span>
        </button>
        <div className='flex flex-col items-center justify-center w-full h-full  space-y-8 bg-white rounded-2xl'>
            <h1 className='text-2xl mt-9 font-bold text-center text-gray-800 '>Sign Up as a Volunteer</h1>
            <form className='flex flex-col items-center justify-center w-full space-y-8'>
                <input type='text' placeholder='Volunteer Name'
                       className='w-3/4 h-10 px-4 text-sm bg-[#F7F7FA] outline-none'/>
                <input type='number' placeholder='Contact Number'
                       className='w-3/4 h-10 px-4 text-sm bg-[#F7F7FA] outline-none'/>
                <input type='text' placeholder='Email'
                       className='w-3/4 h-10 px-4 text-sm bg-[#F7F7FA] outline-none'/>
                <input type='password' placeholder='Password'
                       className='w-3/4 h-10 px-4 text-sm bg-[#F7F7FA] rounded-lg outline-none'/>
                <div className='flex flex-col gap-1 w-3/4 px-4 text-sm '>
                    <div className='flex flex-row gap-1 items-center'>
                        <div className='w-2 h-2 border-2 rounded-full border-black'></div>
                        <p>
                            Something at least 8 characters Long
                        </p>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <div className='w-2 h-2 border-2 rounded-full border-black'></div>
                        <p>Use one or more numbers</p>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <div className='w-2 h-2 border-2 rounded-full border-black'></div>
                        <p>Use one or more lower case letter</p>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <div className='w-2 h-2 border-2 rounded-full border-black'></div>
                        <p>Use one or more upper case letter</p>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <div className='w-2 h-2 border-2 rounded-full border-black'></div>
                        <p>Use one or more special characters</p>
                    </div>
                </div>
                <input type='password' placeholder='Confirm Password'
                       className='w-3/4 h-10 px-4 text-sm bg-[#F7F7FA] rounded-lg outline-none'/>
                <div className='flex flex-col text-sm w-3/4 gap-2'>
                    <div className='flex flex-row gap-2'>
                        <input type='checkbox'/>
                        <p>Send me helpful emails</p>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <input type='checkbox' className='mb-5'/>
                        <p>Yes, I understand and agree to the Sisu Saviya Terms of Service ,
                            including the User Agreement and Privacy Policy .</p>
                    </div>
                </div>

                <button type='submit' className='w-3/4 h-12 text-sm text-white bg-[#8260E2] rounded-lg'>Sign In</button>
            </form>
        </div>
    </div>
)
}