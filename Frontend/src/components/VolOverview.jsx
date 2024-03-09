import React from 'react'
import { useUser } from '@clerk/clerk-react';

export default function TestPage() {
    const { user } = useUser();
  return (
    <div>
        Hello {user.fullName}! 
        <br /> 
        Hello {user.organizationMemberships}! 
        {/* {user.unsafeMetadata.Type} */}
    </div>
  )
}
