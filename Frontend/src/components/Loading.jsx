import React from 'react';
import { useUser } from "@clerk/clerk-react";
import VolunteerOverview from './VolOverview';
import SchoolOverview from './SclOverview';
import OrganizationOverview from './OrgOverview';

const LoadingScreen = () => {
  const { isSignedIn, user } = useUser();
  let User = user?.unsafeMetadata?.Type;
  let UserType = JSON.stringify(User);
  let nextPageComponent;

  if (isSignedIn) {

    if (UserType === '"Volunteer"') {
      console.log(`UserType: ${UserType}`);
      nextPageComponent = <VolunteerOverview />;
    } else if (UserType === '"School"') {
      nextPageComponent = <SchoolOverview />;
    } else if (UserType === '"Organization"') {
      nextPageComponent = <OrganizationOverview />;
    } else {
      console.error(`Unhandled UserType: ${UserType}`);
    }
  }

  return (
    <div>
      {isSignedIn ? (
        <div>
          <h1>Hello {user.fullName}! <br /> {UserType}</h1>
          {nextPageComponent}
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center h-screen w-screen'>
          <h1 className='font-bold text-8xl subpixel-antialiased text-sky-500'>Loading...</h1>
          <br />
          <h4 className='font-normal text-3xl'>Welcome to SisuSaviya</h4>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
