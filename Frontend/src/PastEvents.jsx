// import { useEffect, useState } from 'react';
// import axios from 'axios';

import React from 'react';
import Card from './components/card';

const PastEvents = () => {

  const seminars = [
    {_id: 1, name: "Seminar 1", description: "This is the first seminar"}, 
    {_id: 2, name: "Seminar 2", description: "This is the second seminar"}, 
    {_id: 3, name: "Seminar 3", description: "This is the third seminar"}
  ];

  // const [seminars, setSeminars] = useState(null);

  // useEffect(() => {

  //   const fetchData = async () => {
  //     const response = await fetch('api/seminars');
  //     const json = await response.json();
  //     console.log(json);

  //     if (response.ok) {
  //       setSeminars(json);
  //     }

  //   };

  //   fetchData();
  // }, []);

    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Past Events</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* <img src="./images/1" alt="" /> */}
          {seminars && seminars.map((seminar) => (
            // <card key={data._id} name={data.name} image={data._id} address={data.address} />
            <Card key={seminar._id} seminar={seminar} />
            // <p key={seminar._id}>{seminar.name}</p>
          ))}
        </div>
      </div>
    );
}
 
export default PastEvents;