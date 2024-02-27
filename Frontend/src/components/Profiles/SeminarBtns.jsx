import React, { useState } from "react";
import { Link } from "react-router-dom";

const SeminarBtns = ({ upcomingPageUrl, previousPageUrl }) => {
  return (
    <div>
      <div>
        <Link to={upcomingPageUrl}>Upcoming Seminars</Link>
        <Link to={previousPageUrl}>Previous Seminars</Link>
      </div>
    </div>
  );
};

export default SeminarBtns;
