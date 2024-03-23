import {CreateOrganization} from '@clerk/clerk-react'
import './ClerkComponents.css'


export default function OrgSignUP() {
  return (
    <div  className='flex justify-center items-center h-screen'>
        <CreateOrganization
        afterCreateOrganizationUrl={"/Organization/Details-Form"} />
    </div>
  )
}
