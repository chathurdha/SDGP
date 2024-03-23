import { CreateOrganization } from "@clerk/clerk-react";
import "../../components/SignInSignUpComponents/ClerkComponents.css";

export default function OrgSignUP() {
  return (
    <div className="flex justify-center items-center h-screen">
      <CreateOrganization
        afterCreateOrganizationUrl={"/Organization/Details"}
      />
    </div>
  );
}
