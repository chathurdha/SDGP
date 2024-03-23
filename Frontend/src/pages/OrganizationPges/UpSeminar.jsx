import SeminarBtns from "../../components/Profiles/SeminarBtns";
import Navbar from "../../components/navbar/ProfNav";
import OrgHeader from "../../components/Header/OrgHeader";
import Footer from "../../components/Footer/Footer";
import OrgUpComingSeminar from "../../components/Organization/OrgUpComingSeminar";

function UpSeminar() {
  return (
    <>
      <OrgHeader />
      <Navbar />
      <SeminarBtns
        upcomingPageUrl="/Organization/Upcoming-Seminar"
        previousPageUrl="/Organization/Previous-Seminar"
      />
      <div>
        <OrgUpComingSeminar />
      </div>
      <Footer />
    </>
  );
}

export default UpSeminar;
