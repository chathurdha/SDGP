import React from "react";
import SeminarBtns from "../../Profiles/SeminarBtns";
import Navbar from "../../navbar/ProfNav";
import OrgPrevSemFilter from "../OrgComponent/OrgPrevSemFilter";
import OrgHeader from "../../Header/OrgHeader";
import Footer from "../../Footer/Footer";

function PrevSeminar() {
  return (
    <>
      <OrgHeader />
      <div className="pt-[7%]">
        <Navbar />
        <SeminarBtns
          upcomingPageUrl="/UpSeminar"
          previousPageUrl="/PrevSeminar"
        />
        <div>
          <OrgPrevSemFilter />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PrevSeminar;
