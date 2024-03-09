import React from 'react'
import { useUser } from '@clerk/clerk-react';


export default function TestPage2() {
    const { user } = useUser();
  return (
    <div>
        Hello {user.fullName}! 
        {/* <br /> 
        {user.unsafeMetadata.Type}
        <br /> 
        {user.unsafeMetadata.Type}
        <br /> 
        {user.unsafeMetadata.Type} */}
    </div>
  )
}
