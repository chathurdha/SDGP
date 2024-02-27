import React from "react";
import SeminarBtns from "../../Profiles/SeminarBtns";

function PrevSeminar() {
  return (
    <>
      <SeminarBtns
        upcomingPageUrl="/UpSeminar"
        previousPageUrl="/PrevSeminar"
      />
      <div className="w-screen h-screen">preeeee</div>
    </>
  );
}

export default PrevSeminar;
