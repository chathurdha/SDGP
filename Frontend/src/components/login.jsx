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

//user_2dS2WNcI5p3LVFnyhEHYBOL1ZXd
//user_2dS2WNcI5p3LVFnyhEHYBOL1ZXd