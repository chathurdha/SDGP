import { SignUp } from "@clerk/clerk-react";
import "./ClerkComponents.css";

export default function OrgOwinerCreate() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp
        unsafeMetadata={{
          Type: "Organization",
        }}
        redirectUrl={"/Organization/Sign-up"}
        signInUrl={"/Sign-In"}
      />
    </div>
  );
}
