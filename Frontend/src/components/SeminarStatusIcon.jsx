/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const SeminarStatusIcon = ({ seminarId, seminarStatuses, rotatedSeminarIds }) => {
    const status = seminarStatuses[seminarId];
  
    return (
      <div className={`${
        !rotatedSeminarIds.includes(seminarId) ? "md:flex items-center" : ""
      }`}>
        <FontAwesomeIcon
          icon={status === "accepted" ? faCircleCheck : faCircleXmark}
          className={`text-6xl ${
            status === "accepted" ? "text-green-500" : "text-red-500"
          } ${status ? "" : "hidden"}`}
        />
      </div>
    );
  };
  
  export default SeminarStatusIcon;

  /* eslint-enable react/prop-types */
