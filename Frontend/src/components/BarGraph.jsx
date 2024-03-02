import React, { useState } from 'react';
import DynamicBar from './DynamicBar';

const BarGraph = () => {


    // const Organizations = [
    //     {_id: 1, name: "Organization 1", totalNumSeminars: 100},
    //     {_id: 2, name: "Organization 2", totalNumSeminars: 15},
    //     {_id: 3, name: "Organization 3", totalNumSeminars: 7},
    //     {_id: 4, name: "Organization 4", totalNumSeminars: 5},
    // ];

    const Branches = [
        {_id: 1, location: "Colombo", name: "Colombo Branch", orgId: 1, numConductedSeminars: 30},
        {_id: 2, location: "Kandy", name: "Kandy Branch", orgId: 2, numConductedSeminars: 5},
        {_id: 3, location: "Galle", name: "Galle Branch", orgId: 1, numConductedSeminars: 7},
        {_id: 4, location: "Matara", name: "Matara Branch", orgId: 1, numConductedSeminars: 21},
        {_id: 5, location: "Jaffna", name: "Jaffna Branch", orgId: 5, numConductedSeminars: 2},
        {_id: 6, location: "Kurunegala", name: "Kurunegala Branch", orgId: 1, numConductedSeminars: 2},
    ];

    // const specificOrg = Organizations.find((org) => org._id === 1); // Find specific organization
    const filteredData = Branches.filter((branch) => branch.orgId === 1); // Filter data

    return (

        //----------------------------------------------------------------------
        // imp
        <div className='flex justify-center mt-12'>
            <div className='bg-gray-100 p-4 rounded-md shadow-md lg:w-2/3 w-full'>
                <ul className="flex flex-col">
                    {filteredData.map((branch) => (
                    <li key={branch._id}>
                        <div className="flex py-2 border-b border-gray-200">
                            <div className="text-xs font-medium mb-4 flex items-center justify-end w-1/4 mr-4">
                                {branch.location}
                            </div>
                            <DynamicBar
                                key={branch._id}
                                numConductedSeminars={branch.numConductedSeminars}
                            />
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BarGraph;