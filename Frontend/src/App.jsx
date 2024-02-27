// Common pages
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Homepage from "./components/Home/homepage";

// const Home = () => <div>Home Page</div>;
// const PastEvents = () => <div>Past Events Page</div>;
// const ContactUs = () => <div>Contact Us Page</div>;
// const AboutUs = () => <div>About Us Page</div>;
// const SignIn = () => <div>Sign In Page</div>;
// const SignUp = () => <div>Sign Up Page</div>;

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Homepage />
//       <Routes>
//         <Route exact path="./components/Home/homepage" component={Home} />
//         <Route path="/past-events" component={PastEvents} />
//         <Route path="/contact-us" component={ContactUs} />
//         <Route path="/about-us" component={AboutUs} />
//         <Route path="/sign-in" component={SignIn} />
//         <Route path="/sign-up" component={SignUp} />
//       </Routes>
//     </Router>
//   );
// };


// Organization
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/ProfNav";

import PrevSeminar from "./components/Organization/section/PrevSeminar";
import UpSeminar from "./components/Organization/section/UpSeminar";
import Overview from "./components/Organization/section/overview";
import OrgSeminar from "./components/Organization/section/OrgSeminar";
import Seminar from "./components/Profiles/SeminarBtns";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/SeminarBtns" element={<Seminar />} />
        <Route path="/OrgSeminar" element={<OrgSeminar />} />
        <Route path="/PrevSeminar" element={<PrevSeminar />} />
        <Route path="/UpSeminar" element={<UpSeminar />} />
      </Routes>
    </Router>
  );
};

export default App;
