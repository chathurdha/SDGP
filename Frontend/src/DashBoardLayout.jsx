// DashboardLayout.jsx

import React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import LoadingSVG from "./assets/Loading.svg";

const DashboardLayout = () => {
  const { isLoaded } = useAuth();

  // React.useEffect(() => {
  //   if (!userId) {
  //     navigate("/sign-Up");
  //   }
  // }, []);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={LoadingSVG} alt="Loading" className="w-2/6 h-2/6" />
      </div>
    );
  }

  return <Outlet />;
};

export default DashboardLayout;
