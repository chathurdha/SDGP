import Navbar from "../../components/navbar/SchlNavBar.jsx";
import SclHeader from "../../components/Header/SchlHeader.jsx";
import Footer from "../../components/Footer/Footer";
// import UpcomingSeminars from "../../components/Organization/OrgComponent/UpcomingSeminars.jsx";
import SclUPCSeminarTable from "../../components/SclUPCSeminarTable.jsx";

function UpSeminar() {
  return (
    <>
      <SclHeader />
      <Navbar />
      <div className="my-8 mx-[10%]">
        <SclUPCSeminarTable />
      </div>
        {/* <UpcomingSeminars /> */}
      <Footer />
    </>
  );
}

export default UpSeminar;