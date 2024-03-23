import ProfNav from "../../components/navbar/ProfNav";
import OrgHeader from "../../components/Header/OrgHeader";
import OrgOverview from "../../components/Organization/section/OverviewP1";
import Footer from "../../components/Footer/Footer";
import OverviewP2 from "../../components/Organization/section/OverviewP2.jsx";
import OverviewP3 from "../../components/Organization/section/OverviewP3.jsx";
import OverviewP4 from "../../components/Organization/section/OverviewP4.jsx";

function OrgOverviewPg() {
  return (
    <>
      <OrgHeader />
      <div className="pt-[7%]">
        <ProfNav />
        <OrgOverview />
        <OverviewP2 />
        <OverviewP3 />
        <OverviewP4 />
      </div>
      <Footer />
    </>
  );
}

export default OrgOverviewPg;