/* eslint-disable react/no-unescaped-entities */


import { isMobile } from "react-device-detect";
import OrganizationList from '../../components/School/OrganizationSearch/OrganizationList';
// import { Link } from "react-router-dom";

const SchoolOverview = () => {
    return ( 
        <>
        {/* <Navbar /> */}
        <div className="md:pt-[4%] relative">
        <div className="mt-[15%] flex justify-center items-center relative">
            {!isMobile && (
                <img
                className="w-full lg:w-[80%] h-auto absolute"
                src="/src/assets/aboutUs pic.svg"
                alt=""
                />
            )}
          {/* <img
            className="w-full lg:w-[80%] h-auto absolute"
            src="/src/assets/aboutUs pic.svg"
            alt=""
          /> */}
          {/* {isMobile && (
                    <p className="md:w-[80%] lg:w-[60%] text-sm text-center text-[#FFFFFF]">
                    From preschool to pre-tertiary, our students enjoy fun,
                    interactive, and relevant lessons and are empowered to think
                    beyond the confines of the classroom.
                    </p>
          )} */}
          <div className="absolute flex flex-col justify-center items-center w-full lg:w-[60%]">
            <img
              className="w-[60%] md:w-[30%] lg:w-[40%] h-auto mb-4"
              src="/src/assets/Logo.png"
              alt=""
            />
            {!isMobile && (
                <p className="md:w-[80%] lg:w-[60%] text-sm text-center text-[#FFFFFF]">
                From preschool to pre-tertiary, our students enjoy fun,
                interactive, and relevant lessons and are empowered to think
                beyond the confines of the classroom.
                </p>
            )}
          </div>
        </div>
        <div className="md:pt-[20%] pt-[8%] relative pb-[8%]">
            <OrganizationList />
        </div>
      </div>
        <div className="pt-[8%] relative border-t">
            <h1 className="text-2xl mt-4 md:mt-0 md:mb-10 text-center font-semibold">Send Seminar Requests</h1>
            <div className="flex items-center justify-center mt-4">
                <div className="flex flex-col items-center md:flex-row md:w-4/5 md:p-10 shadow-2xl rounded-xl">
                    <img src="/src/assets/requestform.svg" alt="" className='md:w-2/6 w-[90%] object-cover mb-2 rounded-lg mt-4 md:ml-8'/>
                    <div className="m-4 md:ml-8 flex items-center">
                        <div>
                            <h1 className="text-center md:text-left font-medium md:text-lg mb-6">Enhance student's education</h1>
                            <p className="text-center text-sm md:text-left mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit saepe, sequi, consequatur quis at quae fuga quibusdam nostrum eligendi voluptatibus, autem earum doloribus corporis delectus! Reprehenderit maiores dolore quam?</p>
                            <div className="flex justify-center md:justify-start">
                            {/* <Link
                                className="w-56 mt-1 md:ml-4 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                // className="w-full px-3 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Send Seminar Request
                            </Link> */}
                                <p
                                    className=" w-56 mt-1 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    // className="w-full px-3 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Send Seminar Request
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-2xl mb-10 mt-16 text-center font-semibold">Send Reviews</h1>
            <div className="flex items-center justify-center mt-4">
                <div className="flex flex-col items-center md:flex-row md:w-4/5 md:p-10 shadow-2xl rounded-xl">
                    <img src="/src/assets/sendReview.svg" alt="" className='md:w-2/6 w-[90%] object-cover mb-2 rounded-lg mt-4 md:ml-8'/>
                    <div className="m-4 md:ml-8 flex items-center">
                        <div>
                            <h1 className="text-center md:text-left font-medium md:text-lg mb-6">Lorem ipsum dolor sit amet</h1>
                            <p className="text-center text-sm md:text-left mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit saepe, sequi, consequatur quis at quae fuga quibusdam nostrum eligendi voluptatibus, autem earum doloribus corporis delectus! Reprehenderit maiores dolore quam?</p>
                            <div className="flex justify-center md:justify-start">
                            {/* <Link
                                className="w-56 mt-1 md:ml-4 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                // className="w-full px-3 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Send Review
                            </Link> */}
                                <p
                                    className="w-56 mt-1 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    // className="w-full px-3 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Send Review
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
     );
}
 
export default SchoolOverview;



/* eslint-enable react/no-unescaped-entities */
