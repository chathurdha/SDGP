// RootLayout.jsx
/* eslint-disable react/prop-types */
import {  useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = ({ children }) => {
  const { user } = useUser();
  const userType = user?.unsafeMetadata.Type;

  // Render different content based on user type
  const renderContentBasedOnUserType = () => {
    if (user) {
      if (userType == "Organization") {
        return (
          <div>
            <Link to="/Orgnization/Overview"></Link>
          </div>
        );
      } else if (userType == "Volunteer") {
        return (
          <div>
            <Link to="/Volunteer/Overview"></Link>
          </div>
        );
      } else if (userType == "School") {
        return (
          <div>
            <Link to="/School/Overview"></Link>
          </div>
        );
      }
    }

    // Default content if user is not identified
    return (
      <div>
        <Link to="/"></Link>
      </div>
    );
  };

  return (
    <main>
      {renderContentBasedOnUserType()}
      {children}
    </main>
  );
};

export default RootLayout;


/* eslint-enable react/prop-types */
