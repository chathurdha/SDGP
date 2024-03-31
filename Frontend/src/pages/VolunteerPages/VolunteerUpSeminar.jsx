import Navbar from "../../components/navbar/VolNavBar";
import OrgHeader from "../../components/Header/VolHeader";
import Footer from "../../components/Footer/Footer";
import VolUPCSeminarTable from "../../components/VolUPCSeminarTable";

function UpSeminar() {
  return (
    <>
      <OrgHeader />
      <Navbar />
      <div className=" my-8 mx-[10%]">
        <VolUPCSeminarTable />
      </div>
      <Footer />
    </>
  );
}

export default UpSeminar;