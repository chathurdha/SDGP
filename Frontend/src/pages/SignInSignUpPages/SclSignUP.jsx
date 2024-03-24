// import React, {useState, useEffect} from 'react'
import { SignUp } from "@clerk/clerk-react";
import "../../components/SignInSignUpComponents/ClerkComponents.css";

export default function SclSignUP() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("https://sisu-saviya-6510ee9f562c.herokuapp.com/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp
        unsafeMetadata={{ Type: "School" }}
        afterSignUpUrl={"/School/Details"}
        signInUrl={"/sign-in"}
      />
    </div>
  );
}
