import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const volunteerStatusIcons = ({
    volunteer, 
    volunteerStatuses }) => {
    const status = volunteerStatuses[volunteer._id];
  
    return (
        <div className={`${
            status ? "" : "hidden"
        }`}>
            <FontAwesomeIcon
            icon={status === "accepted" ? faCircleCheck : faCircleXmark}
            className={`text-6xl transition duration-1000 ease-in-out ${
                status === "accepted" ? "text-green-500" : "text-red-500"
            } ${status ? "" : "hidden"}`}
            />
        </div>
    );
}

export default volunteerStatusIcons;