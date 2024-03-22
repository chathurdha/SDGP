<<<<<<< Updated upstream
import React from "react";
import SeminarBtns from "../../components/Profiles/SeminarBtns";
=======
import SeminarBtns from "../../components/Profiles/SeminarBtns";
import Navbar from "../../components/navbar/ProfNav";
import OrgHeader from "../../components/Header/OrgHeader";
import Footer from "../../components/Footer/Footer";
import OrgUpComingSeminar from "../../components/Organization/OrgUpComingSeminar"

>>>>>>> Stashed changes

function UpSeminar() {
  return (
    <>
<<<<<<< Updated upstream
      <SeminarBtns
        upcomingPageUrl="/UpSeminar"
        previousPageUrl="/PrevSeminar"
      />
      <div className="w-screen h-screen">upppp</div>
=======
    <OrgHeader />
      <div className="pt-[7%]">
        <Navbar />
        <SeminarBtns
          upcomingPageUrl="/UpSeminar"
          previousPageUrl="/PrevSeminar"
        />
        <div>
          {/* <OrgPrevSemFilter /> */} 
          {/* add your component here. */}
          <OrgUpComingSeminar />
        </div>
        <Footer />
      </div>
>>>>>>> Stashed changes
    </>
  );
}

<<<<<<< Updated upstream
export default UpSeminar;
=======
export default UpSeminar;
>>>>>>> Stashed changes
