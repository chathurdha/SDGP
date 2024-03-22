import { SignUp } from '@clerk/clerk-react'
import './ClerkComponents.css'

export default function VolSignUP() {
  return (
    <div  className='flex justify-center items-center h-screen'>
        <SignUp 
            unsafeMetadata={
                {
                    "Type" : "Volunteer"
                }
            }
            deleteSelfEnabled = {false}
            redirectUrl	={"/Get-Volunteer-Details"}
            signInUrl={"/sign-in"}
          />
    </div>
  )
}