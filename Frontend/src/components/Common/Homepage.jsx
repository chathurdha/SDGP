import React from "react";
import Navbar from "../navbar/Navbar";
import AboutUs from "./Home-Sections/AboutUs";
import ChooseUs from "./Home-Sections/ChooseUs";
import Organizations from "./Home-Sections/Organizations";
import PastEvent from "./Home-Sections/PastEvent";
import Hero from "./Home-Sections/Hero";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className=""></div>
      <Hero />
      <AboutUs />
      <ChooseUs />
      <Organizations />
      <PastEvent />
    </>
  );
}

export default Homepage;
