import Navbar from "../../components/navbar/Navbar";
import AboutUs from "../../components/Common/Home-Sections/AboutUs";
import ChooseUs from "../../components/Common/Home-Sections/ChooseUs";
import Organizations from "../../components/Common/Home-Sections/Organizations";
import PastEvent from "../../components/Common/Home-Sections/PastEvent";
import Hero from "../../components/Common/Home-Sections/Hero";
import Footer from "../../components/Footer/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <ChooseUs />
      <Organizations />
      <PastEvent />
      <Footer />
    </>
  );
}

export default Homepage;
