import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import Navbar from './navbar/Navbar';

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-full'>
        <div className='content-around'>
          <SignIn />
        </div>
      </div> 
    </div> )}