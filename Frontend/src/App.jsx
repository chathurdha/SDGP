// // Common pages
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Homepage from "./components/Home/homepage";
// import Login from "./components/Login";
// import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
// const VITE_CLERK_PUBLISHABLE_KEY = import.meta.env;

// const Home = () => <div>Home Page</div>;
// const PastEvents = () => <div>Past Events Page</div>;
// const ContactUs = () => <div>Contact Us Page</div>;
// const AboutUs = () => <div>About Us Page</div>;
// const SignIn = () => <div>Sign In Page</div>;
// const SignUp = () => <div>Sign Up Page</div>;

// const App = () => {
//   return (
// <Router>
//   <Navbar />
//   <Homepage />
//   <Routes>
//     <Route exact path="./components/Home/homepage" component={Home} />
//     <Route path="/past-events" component={PastEvents} />
//     <Route path="/contact-us" component={ContactUs} />
//     <Route path="/about-us" component={AboutUs} />
//     <Route path="/sign-in" component={Login} />
//     <Route path="/sign-up" component={SignUp} />
//   </Routes>
// </Router>
//   );
// };

// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Header from './components/Profiles/Header'
// // import Homepage from './components/Home/homepage';
// // import OrgProfile from './pages/OrgProfilePage';
// // import Logo from './assets/Rated.png';
// // import SeminarNav from './components/navbar/SeminarNav';

// // // const OrgProfilePage = () => <Homepage />;
// // // const PastEvents = () => <div>PastEvents</div>;
// // // const RecievedSeminarsReq = () => <div>RecievedSeminarsReq</div>;
// // // const RecievedVolunteerReq = () => <div>RecievedVolunteerReq</div>;
// // // const Seminars = () => <div>Seminars</div>;
// // // const Statistics = () => <div>Statistics</div>;

// // const App =() => {
// //   let Array = [
// //     {id: "home"},
// //     {id: "orgProfile"},
// //     {id: "pastEvents"},
// //     {id: "recievedSeminarsReq"},
// //     {id: "recievedVolunteerReq"},
// //     {id: "seminars"}]

// //   return (
// //     <SeminarNav
// //     NavBarArray={Array}
// //     />
// //   );
// // };

//  export default App;

// // {/*<Router>
// //         <Header OLogo={Logo}/>
// //         <OrgProfile />
// //         <Routes>
// //             <Route exact path="./pages/OrgProfilePage" component={OrgProfilePage} />
// //             <Route path="./components/Home/homepage" component={PastEvents} />
// //             <Route path="/" component={RecievedSeminarsReq} />
// //             <Route path="/" component={RecievedVolunteerReq} />
// //             <Route path="/" component={Seminars} />
// //             <Route path="/" component={Statistics} />
// //         </Routes>
// //     </Router>   */}

// // import React from "react";
// // import TableComponent from "./components/TableComponent";

// // const App = () => {
// //   return (
// //     <TableComponent />
// //   );
// // };

// // export default App;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/homepage";
import Login from "./components/login";
import Next from './components/SignUP';
import SignUp from "./components/Profiles/ProfSelect";
import OrgOwnerCreate from "./components/OrgOwner-Create";
import VolSignUP from "./components/VolSignUP";
import SclSignUP from "./components/SclSignUP";
import OrgSignUP from "./components/OrgSignUP";
// import Organization from "./components/Organization/organization";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />

      <Route path="/past-events" element={<div>Past Events</div>} />

      <Route path="/contact-us" element={<div>Contact Us</div>} />

      <Route path="/about-us" element={<div>About Us</div>} />

      <Route path="/sign-in" element={<Login />} />


      <Route path="/Select-Profile" element={<SignUp />} />
      

      <Route path="/School/Sign-up" element={<SclSignUP />} />
      <Route path="/Volunteer/Sign-up" element={<VolSignUP />} />
      <Route path="/Organization/Sign-up" element={<OrgSignUP />} />
      <Route path="/Organization/Create-Owner" element={<OrgOwnerCreate />} />
      {/* <Route path="Organization/:id" element={<Organization />} /> */}



      <Route path="/next" element={<Next />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
