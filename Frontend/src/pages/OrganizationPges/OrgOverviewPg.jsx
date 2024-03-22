import React from "react";
import ProfNav from "../../components/navbar/ProfNav";
import OrgHeader from "../../components/Header/OrgHeader";
import OrgOverview from "../../components/Organization/section/OverviewP1";
import Footer from "../../components/Footer/Footer";

function OrgOverviewPg() {
  return (
    <>
      <OrgHeader />
      <div className="pt-[7%]">
        <ProfNav />
        <OrgOverview />
      </div>
      <Footer />
    </>
  );
}

export default OrgOverviewPg;
