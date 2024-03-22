// import React, {useState, useEffect} from 'react'
import { SignUp } from '@clerk/clerk-react'
import './ClerkComponents.css'


export default function SclSignUP() {
    // const [message, setMessage] = useState("");

    // useEffect(() => {
    //   fetch("http://localhost:4000/message")
    //     .then((res) => res.json())
    //     .then((data) => setMessage(data.message));
    // }, []);
  return (
    <div  className='flex justify-center items-center h-screen'>
        <SignUp 
        unsafeMetadata={
            {"Type":"School"}
        }
        afterSignUpUrl={'/next'}
        signInUrl={"/sign-in"}/>
    </div>
  )
}




