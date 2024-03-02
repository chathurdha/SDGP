import React from "react";
import SeminarBtns from "../../Profiles/SeminarBtns";

const OrgSeminar = () => {
  // Define URLs for the organization's upcoming and previous seminar pages
  const organizationUpcomingPageUrl = "/UpSeminar";
  const organizationPreviousPageUrl = "/PrevSeminar";

  return (
    <SeminarBtns
      upcomingPageUrl={organizationUpcomingPageUrl}
      previousPageUrl={organizationPreviousPageUrl}
    />
  );
};

export default OrgSeminar;
