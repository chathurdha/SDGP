import SeminarBtns from "../../components/Profiles/SeminarBtns";
import Navbar from "../../components/navbar/ProfNav";
import OrgPrevSemFilter from "../../components/Organization/OrgComponent/OrgPrevSemFilter";
import OrgHeader from "../../components/Header/OrgHeader";
import Footer from "../../components/Footer/Footer";

function PrevSeminar() {
  return (
    <>
      <OrgHeader />
      <Navbar />
      <SeminarBtns
        upcomingPageUrl="/Organization/Upcoming-Seminar"
        previousPageUrl="/Organization/Previous-Seminar"
      />
      <div>
        <OrgPrevSemFilter />
      </div>
      <Footer />
    </>
  );
}

export default PrevSeminar;
