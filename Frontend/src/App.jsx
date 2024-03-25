import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout";
import DashboardLayout from "./DashBoardLayout";
import Loading from "./pages/SignInSignUpPages/Loading";
import Login from "./pages/SignInSignUpPages/login";
import SignUp from "./components/SignInSignUpComponents/ProfSelect";
import VolSignUP from "./pages/SignInSignUpPages/VolSignUP";
import SclSignUP from "./pages/SignInSignUpPages/SclSignUP";
import OrgSignUP from "./pages/SignInSignUpPages/OrgSignUP";

//common pages
import Home from "./pages/CommanPages/Homepage";
import PastEvents from "./pages/CommanPages/PastEvents";
import ContactUs from "./pages/CommanPages/ContactUs";
import AboutUs from "./pages/CommanPages/AboutUs";

//Volunteer Pages
import VolOverView from "./pages/VolunteerPages/VolunteerOverview";
import AcceptSeminarRequests from "./pages/VolunteerPages/AcceptSeminarRequests";
import VolDetForm from "./components/SignInSignUpComponents/VolDetForm";

//Organization Pages
import OrgOwnerCreate from "./components/SignInSignUpComponents/OrgOwner-Create";
import PrevSeminar from "./pages/OrganizationPges/PrevSeminar";
import UpSeminar from "./pages/OrganizationPges/UpSeminar";
import OrgSeminar from "./components/Organization/section/OrgSeminar";
// import Seminar from "./components/Profiles/SeminarBtns";
// import OrgOverviewPg from "./pages/OrganizationPges/OrgOverviewPg";
import OrgReceivedSeminarRequests from "./pages/OrganizationPges/ReceivedSeminarRequests";
import OrgReceivedVolunteerRequests from "./pages/OrganizationPges/ReceivedVolunteerRequests";
import OrgDetForm from "./components/SignInSignUpComponents/OrgDetForm";
import OrgOwinerCreate from "./components/SignInSignUpComponents/OrgOwner-Create";

//School pages
import SchlOverview from "./pages/SchoolPage/SchoolOverview";
import RequestForm from "./pages/SchoolPage/RequestForm";
import SchoolsUpcomingSeminars from "./pages/SchoolPage/SchoolsUpcomingSeminars.jsx";
// import SendReview from "./pages/SchoolPage/AddReview"
import SclDetForm from "./components/SignInSignUpComponents/SclDetForm"
import ReviewBackground from "./pages/SchoolPage/ReviewBackground.jsx";

const App = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/Sign-In" element={<Login />} />
          <Route path="/Sign-Up" element={<SignUp />} />
          <Route path="/School/Sign-up" element={<SclSignUP />} />
          <Route path="/Organization/Sign-up" element={<OrgSignUP />} />
          <Route path="/Volunteer/Sign-up" element={<VolSignUP />} />
          <Route path="/Volunteer/Sign-In" element={<Login />} />
          <Route path="/Organization/Sign-In" element={<Login />} />
          <Route path="/School/Sign-In" element={<Login />} />
          <Route path="/next" element={<Loading />} />

          <Route index element={<Home />} />

          <Route path="/past-events" element={<PastEvents />} />

          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/Organization/Create-Owner"
            element={<OrgOwnerCreate />}
          />
          <Route element={<DashboardLayout />}>
            <Route path="/Orgnization/Seminar" element={<OrgSeminar />} />
            <Route
              path="/Organization/Previous-Seminar"
              element={<PrevSeminar />}
            />
            <Route
              path="/Organization/Upcoming-Seminar"
              element={<UpSeminar />}
            />
            {/* <Route path="/Organization/Overview" element={<OrgOverviewPg />} /> */}
            <Route path="/Organization/Overview" element={<div></div>} />
            <Route
              path="/Orgnization/Received-Seminar-Requests"
              element={<OrgReceivedSeminarRequests />}
            />
            <Route path="/Organization/Details" element={<OrgDetForm />} />
            <Route
              path="/Organization/Owner-Create"
              element={<OrgOwinerCreate />}
            />

            <Route
              path="/Orgnization/Received-Volunteer-Requests"
              element={<OrgReceivedVolunteerRequests />}
            />
            <Route path="/Volunteer/Overview" element={<VolOverView />} />
            <Route path="/Volunteer/Details" element={<VolDetForm />} />
            <Route
              path="/Volunteer/Seminar-Request"
              element={<AcceptSeminarRequests />}
            />
            <Route
              path="/Volunteer/Upcoming-Seminar"
              element={<div>vol up sem</div>}
            />

            <Route path="/School/Overview" element={<SchlOverview />} />
            <Route path="/School/Seminar-Request" element={<RequestForm />} />
            <Route
              path="/School/Upcoming-Seminar"
              element={<SchoolsUpcomingSeminars />}
            />
            <Route path="/School/Add-Review" element={<ReviewBackground />} />
            <Route path="/School/Details" element={<SclDetForm />} />
          </Route>
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default App;