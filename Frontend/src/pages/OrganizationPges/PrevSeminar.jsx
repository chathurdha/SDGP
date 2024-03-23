import SeminarBtns from "../../components/Profiles/SeminarBtns";
import Navbar from "../../components/navbar/ProfNav";
import OrgPrevSemFilter from "../../components/Organization/OrgComponent/OrgPrevSemFilter";
import OrgHeader from "../../components/Header/OrgHeader";
import Footer from "../../components/Footer/Footer";

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
