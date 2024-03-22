import SeminarBtns from "../../components/Profiles/SeminarBtns";
import Navbar from "../../components/navbar/ProfNav";
import OrgHeader from "../../components/Header/OrgHeader";
import Footer from "../../components/Footer/Footer";
import OrgUpComingSeminar from "../../components/Organization/OrgUpComingSeminar"


function UpSeminar() {
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
          <OrgUpComingSeminar />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default UpSeminar;
