// import { useEffect, useState } from 'react';
// import axios from 'axios';

import React from 'react';
import Card from './components/card';

import FilterOption from './components/FilterOption';

const PastEvents = () => {

  const seminars = [
    {_id: 1, name: "Seminar 1", description: "This is the first seminar", rating: 4.0, organizationId: 1}, 
    {_id: 2, name: "Seminar 2", description: "This is the second seminar", rating: 3.0, organizationId: 2}, 
    {_id: 3, name: "Seminar 3", description: "This is the third seminar", rating: 3.5, organizationId: 3}
  ];

  const organizations = [
    {_id: 1, name: "Organization 1", description: "This is the first organization"}, 
    {_id: 2, name: "Organization 2", description: "This is the second organization"}, 
    {_id: 3, name: "Organization 3", description: "This is the third organization"}
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
    <div className='w-full'>
      <h1 className=''>Past Events</h1>
      <FilterOption />
      <div className=''>
        {/* <img src="./images/1" alt="" /> */}
        {/* {seminars && seminars.map((seminar) => (
          // <card key={data._id} name={data.name} image={data._id} address={data.address} />
          <Card key={seminar._id} seminar={seminar} />
          // <p key={seminar._id}>{seminar.name}</p>
        ))} */}
      </div>
    </div>
  );
}
 
export default PastEvents;