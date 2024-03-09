import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import './ClerkComponents.css'

export default function Login() {

  
  return (
    <div className='flex justify-center items-center h-screen'>
      <SignIn 
      redirectUrl	={"/next"}
      signUpUrl="/Select-Profile"/>
      
    </div>
  )
}
