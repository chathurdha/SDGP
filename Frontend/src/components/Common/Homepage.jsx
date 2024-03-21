import React from "react";
import Navbar from "../navbar/Navbar";
import AboutUs from "./Home-Sections/AboutUs";
import ChooseUs from "./Home-Sections/ChooseUs";
import Organizations from "./Home-Sections/Organizations";
import PastEvent from "./Home-Sections/PastEvent";
import Hero from "./Home-Sections/Hero";
import Footer from "../Footer/Footer";

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
