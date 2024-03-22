import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//import { ClerkProvider, SignedIn } from "@clerk/clerk-react";

import Home from "./pages/CommanPages/Homepage";
import Login from "./components/Login";
// import Next from "./components/SignUP";
// import Next from "./components/SignUP";
import PastEvents from "./pages/CommanPages/PastEvents";
import ContactUs from "./pages/CommanPages/ContactUs";
import OrgOwnerCreate from "./components/OrgOwner-Create";
import VolSignUP from "./components/VolSignUP";
import SclSignUP from "./components/SclSignUP";
import OrgSignUP from "./components/OrgSignUP";
//import PrevSem from "./pages/OrganizationPges/PrevSeminar";
import PrevSeminar from "./pages/OrganizationPges/PrevSeminar";
import UpSeminar from "./pages/OrganizationPges/UpSeminar";
import OrgSeminar from "./components/Organization/section/OrgSeminar";
import Seminar from "./components/Profiles/SeminarBtns";
import OrgOverviewPg from "./pages/OrganizationPges/OrgOverviewPg";
import OrgReceivedSeminarRequests from "./pages/OrganizationPges/ReceivedSeminarRequests";
import OrgReceivedVolunteerRequests from "./pages/OrganizationPges/ReceivedVolunteerRequests";
import UserHeader from "./components/Header/OrgHeader";
import UserHeader from "./components/Header/OrgHeader";
import Statistics from "./pages/OrganizationPges/Statistics";

import Loading from "./components/Loading";
import SignUp from "./components/Profiles/ProfSelectSignUp";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />

      <Route path="/past-events" element={<PastEvents />} />

      <Route path="/contact-us" element={<ContactUs />} />

      <Route path="/about-us" element={<div>About Us</div>} />

      {/* <Route path="/Sign-In" element={<Login />} /> */}
      

      <Route path="/Sign-Up" element={<SignUp />} />

      <Route path="/School/Sign-up" element={<SclSignUP />} />
      <Route path="/Volunteer/Sign-up" element={<VolSignUP />} />
      <Route path="/Organization/Sign-up" element={<OrgSignUP />} />
      <Route path="/Organization/Create-Owner" element={<OrgOwnerCreate />} />

      <Route path="/Volunteer/Sign-In" element={<Login />} />
      <Route path="/Organization/Sign-In" element={<Login />} />
      <Route path="/School/Sign-In" element={<Login />} />
      {/* <Route path="Organization/:id" element={<Organization />} /> */}

      <Route path="/next" element={<Loading />} />

      {/* organization */}
      <Route path="/SeminarBtns" element={<Seminar />} />
      <Route path="/OrgSeminar" element={<OrgSeminar />} />
      <Route path="/PrevSeminar" element={<PrevSeminar />} />
      <Route path="/UpSeminar" element={<UpSeminar />} />
      <Route path="/OrgOverview" element={<OrgOverviewPg />} />
      <Route path="/OrgRecSeminar" element={<OrgReceivedSeminarRequests />} />
      <Route path="/Sign-In" element={<UserHeader />} />
      <Route path="/Sign-In" element={<UserHeader />} />
      <Route
        path="/OrgRecVolunteer"
        element={<OrgReceivedVolunteerRequests />}
      />
      <Route path="/OrgStatistics" element={<Statistics />} />
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

// App.js

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ClerkProvider } from "@clerk/clerk-react";
// import RootLayout from "./RootLayout";
// import { useNavigate } from "react-router-dom";

// //common pages
// import Home from "./pages/CommanPages/Homepage";
// import PastEvents from "./pages/CommanPages/PastEvents";
// import ContactUs from "./pages/CommanPages/ContactUs";

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

// function App() {
//   const navigate = useNavigate();
//   return (
//     <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
//       <Router>
//         <RootLayout>
//           <Routes>
//             <Route index element={<Home />} />
//             <Route path="/past-events" element={<PastEvents />} />
//             <Route path="/contact-us" element={<ContactUs />} />
//             <Route path="/about-us" element={<div>About Us</div>} />
//           </Routes>
//         </RootLayout>
//       </Router>
//     </ClerkProvider>
//   );
// }

// export default App;
