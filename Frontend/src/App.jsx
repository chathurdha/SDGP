import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ClerkProvider, SignedIn } from "@clerk/clerk-react";

import Home from "./components/Common/homepage";
import Login from "./components/Login";
import Next from "./components/SignUP";
import PastEvents from "./components/Common/PastEvents";
import OrgOwnerCreate from "./components/OrgOwner-Create";
import VolSignUP from "./components/VolSignUP";
import SclSignUP from "./components/SclSignUP";
import OrgSignUP from "./components/OrgSignUP";

import Loading from './components/Loading';
import SignUp from "./components/Profiles/ProfSelectSignUp";
import UserHeader from "./components/navbar/UserHeader";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />

      <Route path="/past-events" element={<div>Past Events</div>} />

      <Route path="/contact-us" element={<div>Contact Us</div>} />

      <Route path="/about-us" element={<div>About Us</div>} />

      {/* <Route path="/Sign-In" element={<Login />} /> */}
      <Route path="/Sign-In" element={<UserHeader />} />

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


