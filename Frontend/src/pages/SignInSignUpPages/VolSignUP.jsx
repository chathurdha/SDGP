import { SignUp } from "@clerk/clerk-react";
import "../../components/SignInSignUpComponents/ClerkComponents.css";

export default function VolSignUP() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp
        unsafeMetadata={{
          Type: "Volunteer",
        }}
        redirectUrl={"/Volunteer/Details"}
        signInUrl={"/sign-in"}
      />
    </div>
  );
}
