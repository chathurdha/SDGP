import SeminarBtns from "../../Profiles/SeminarBtns";
import Navbar from "../../navbar/ProfNav";
import OrgPrevSemFilter from "../OrgComponent/OrgPrevSemFilter";

function PrevSeminar() {
  return (
    <>
      <Navbar />
      <SeminarBtns
        upcomingPageUrl="/UpSeminar"
        previousPageUrl="/PrevSeminar"
      />
      <div>
        <OrgPrevSemFilter />
      </div>
    </>
  );
}

export default PrevSeminar;
