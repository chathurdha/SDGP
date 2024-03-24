import SeminarBtns from "../../components/Profiles/SeminarBtns";
import Navbar from "../../components/navbar/ProfNav";
import OrgHeader from "../../components/Header/OrgHeader";
import Footer from "../../components/Footer/Footer";
import UpcomingSeminars from "../../components/Organization/OrgComponent/UpcomingSeminars.jsx";

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
        <UpcomingSeminars />
      </div>
      <Footer />
    </>
  );
}

export default UpSeminar;
