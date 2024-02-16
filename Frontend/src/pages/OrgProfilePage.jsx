import React from 'react'
import Header from '../components/OrgProfile/Header'
import OrgNav from '../components/OrgProfile/OrgNav'
import Profile from '../components/OrgProf'
import Logo from '../assets/Rated.png';

function OrgProfilePage() {
  return (
    <>
        <Header OLogo={Logo}/>
        <OrgNav />
        <Profile OrgName={"Sasnaka Sansadaya"} OrgLogo={Logo} OrgDesc={"Hello World"} OrgRate={"4"} OrgReviewCount={"100"} OrgDet={["105", "300", "9", "100%"]}/>
    </>
  )
}

export default OrgProfilePage