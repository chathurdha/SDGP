import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import './ClerkComponents.css'

export default function VolSignUP() {
  return (
    <div  className='flex justify-center items-center h-screen'>
        <SignUp />
    </div>
  )
}
