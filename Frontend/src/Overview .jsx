import React from 'react';

const requests = [
  { id: 'BV', name: 'Beldenija Central College, Puththalam' },
  { id: 'SS', name: 'Sirimavo Vidyalaya, Gannoruwa' },
  { id: 'AC', name: 'Anula Vidyalaya, Sigiriya' },
  // Add more requests as needed
];

const RequestItem = ({ id, name }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4 mb-2 rounded-lg">
      <div className="flex items-center">
        <span className={`text-sm font-semibold mr-2 px-3 py-1 rounded-full bg-gray-200`}>{id}</span>
        <span className="text-sm">{name}</span>
      </div>
      <div>
        <button className="text-xs text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded mr-2">
          Reject
        </button>
        <button className="text-xs text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded">
          Accept
        </button>
      </div>
    </div>
  );
};

const SeminarRequests = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Received seminar Requests</h2>
      <div>
        {requests.map((request) => (
          <RequestItem key={request.id} {...request} />
        ))}
      </div>
    </div>
  );
};

export default SeminarRequests;