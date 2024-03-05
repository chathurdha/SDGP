import React from 'react'
import { OrganizationList, SignUp } from '@clerk/clerk-react'
import './ClerkComponents.css'


export default function SclSignUP() {
  return (
    <div  className='flex justify-center items-center h-screen'>
        <SignUp 
        unsafeMetadata = {{
             "Organization" : "School"   
        }}
        afterSignUpUrl={{
            pathname: '/dashboard',
            state: {
                organization: 'School'
            }
        }}/>
    </div>
  )
}
