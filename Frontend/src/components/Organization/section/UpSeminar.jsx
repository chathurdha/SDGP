import React from "react";
import SeminarBtns from "../../Profiles/SeminarBtns";
import TableComponent from "../../OrgUPCSeminarTable";

function UpSeminar() {
  return (
    <>
      <SeminarBtns
        upcomingPageUrl="/UpSeminar"
        previousPageUrl="/PrevSeminar"
      />
      <div className="w-[80%] flex flex-row justify-center">
        <TableComponent />
      </div>
    </>
  );
}

export default UpSeminar;
