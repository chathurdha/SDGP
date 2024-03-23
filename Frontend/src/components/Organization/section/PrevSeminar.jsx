import SeminarBtns from "../../Profiles/SeminarBtns";
import Navbar from "../../navbar/ProfNav";
import OrgPrevSemFilter from "../OrgComponent/OrgPrevSemFilter";

function PrevSeminar() {
  return (
    <>
      <Navbar />
      <SeminarBtns
        upcomingPageUrl="/Organization/Upcoming-Seminar"
        previousPageUrl="/Organization/Previous-Seminar"
      />
      <div>
        <OrgPrevSemFilter />
      </div>
    </>
  );
}

export default PrevSeminar;
