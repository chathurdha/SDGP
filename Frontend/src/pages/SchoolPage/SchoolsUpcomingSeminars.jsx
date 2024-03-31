import Navbar from "../../components/navbar/ProfNav";
import SclHeader from "../../components/Header/SchlHeader.jsx";
import Footer from "../../components/Footer/Footer";
// import UpcomingSeminars from "../../components/Organization/OrgComponent/UpcomingSeminars.jsx";
import SclUPCSeminarTable from "../../components/SclUPCSeminarTable.jsx";

function UpSeminar() {
  return (
    <>
      <SclHeader />
      <Navbar />
        <SclUPCSeminarTable />
        {/* <UpcomingSeminars /> */}
      <Footer />
    </>
  );
}

export default UpSeminar;