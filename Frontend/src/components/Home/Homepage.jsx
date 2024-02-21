import React from "react";
import AboutUs from "./Sections/AboutUs";
import ChooseUs from "./Sections/ChooseUs";
import Organizations from "./Sections/Organizations";
import PastEventsx from "./Sections/PastEvents";
import Testimonials from "./Sections/Testimonials";
import Hero from "./Sections/Hero";

function Homepage() {
  return (
    <>
      <div className=""></div>
      <Hero />
      <AboutUs />
      <ChooseUs />
      <Organizations />
      <PastEventsx />
      <Testimonials />
    </>
  );
}

export default Homepage;
