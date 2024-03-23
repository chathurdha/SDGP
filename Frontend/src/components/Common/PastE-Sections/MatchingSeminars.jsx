/* eslint-disable react/prop-types */

import Card from "./Card";

const MatchingSeminars = ({ seminars }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {seminars &&
        seminars.map((seminar) => (
          <Card
            key={seminar._id}
            seminar={seminar}
            className="w-full" // Added w-full and border class
          />
        ))}
    </div>
  );
};

export default MatchingSeminars;

/* eslint-enable react/prop-types */

