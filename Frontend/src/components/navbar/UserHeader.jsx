import React from 'react'
import { UserButton, SignOutButton } from '@clerk/clerk-react';
import Notif_Icon from '../../assets/Notif_Icon.png'


export default function UserHeader() {
  return (
    <div>
        <img src={Notif_Icon} alt="Notification Icon" />
    </div>
  )
}
