import React from 'react';
import BarGraph from '../components/BarGraph';
import DoughnutChart from '../components/DoughnutChart';

const Statistics = () => {
    return (
        <div className=''>
            {/* conducted seminars section */}
            <div>
                <h1 className='font-semibold text-xl text-left mb-8'>Conducted Seminars</h1>
                <div className='flex justify-center'>
                    <div className="flex flex-cols-2 flex-wrap border-solid border-2 justify-center border-indigo-300 rounded max-w-screen-sm">
                        <div className="flex flex-col text-center md:border-r-2 md:border-b-0 border-b-2 border-neutral-600 md:my-6 md:pr-8 md:mr-8 md:py-0 py-6 md:pl-8">
                            <div className="font-medium text-indigo-500 text-lg">Number of Conducted Seminars</div>
                            <div className="text-3xl font-semibold mt-2">100+</div>
                        </div>
                        <div className="flex flex-col text-center md:my-6 md:py-0 py-6 md:pr-8">
                            <div className="font-medium text-indigo-500 text-lg">Number of Volunteers</div>
                            <div className="text-3xl font-semibold mt-2">300+</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* seminar count section */}
            <div>
                <BarGraph />
            </div>
            {/* Review Sentiment Analysis */}
            <div>
                <DoughnutChart />
            </div>
        </div>
     );
}
 
export default Statistics;