import React from 'react'
import OrgNav from '../components/navbar/ProfNav.jsx'
import Profile from '../components/Profiles/ProfileCard.jsx'
import Logo from '../assets/Rated.png';

function OrgProfilePage() {
    let Details = [{Desc:'Conducted seminars', Val:'100'},{Desc:"Volunteer count", Val:"300"}, {Desc:"No. of branches", Val:"9"}, {Desc:"Req. response rate", Val:"100%"}]
  return (
    <>
        <OrgNav/>
        <Profile AccType={"Org"} Name={"Sasnaka Sansadaya"} Pic={Logo} Desc={"Hello World"} Rate={"4"} ReviewCount={"100"} Details={Details}/>
        
    </>
  )
}

export default OrgProfilePage