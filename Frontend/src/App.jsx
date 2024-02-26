// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Profiles/Header'
// import Homepage from './components/Home/homepage';
// import OrgProfile from './pages/OrgProfilePage';
// import Logo from './assets/Rated.png';

// const OrgProfilePage = () => <Homepage />;
// const PastEvents = () => <div>PastEvents</div>;
// const RecievedSeminarsReq = () => <div>RecievedSeminarsReq</div>;
// const RecievedVolunteerReq = () => <div>RecievedVolunteerReq</div>;
// const Seminars = () => <div>Seminars</div>;
// const Statistics = () => <div>Statistics</div>;

// const App =() => {
//   return (
//     <Router>
//         <Header OLogo={Logo}/>
//         <OrgProfile />
//         <Routes>

//             <Route exact path="./pages/OrgProfilePage" component={OrgProfilePage} />
//             <Route path="./components/Home/homepage" component={PastEvents} />
//             <Route path="/" component={RecievedSeminarsReq} />
//             <Route path="/" component={RecievedVolunteerReq} />
//             <Route path="/" component={Seminars} />
//             <Route path="/" component={Statistics} />
//         </Routes>
//     </Router>

//   )
// }

// export default App
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



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/ProfNav";
import PrevEvents from "./components/Organization/section/PrevEvents";
import Overview from "./components/Organization/section/overview";
import Seminar from "./components/Organization/section/Seminar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/PrevEvents" element={<PrevEvents />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/Seminar" element={<Seminar />} />
      </Routes>
    </Router>
  );
};

export default App;