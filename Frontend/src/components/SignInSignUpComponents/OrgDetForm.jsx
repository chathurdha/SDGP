 
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser, useOrganization } from '@clerk/clerk-react';
import axios from 'axios';



function OrgDetForm() {
   
    const Navigate = useNavigate();
    const { user } = useUser();
    const {organization} = useOrganization();

    const Name = organization?.name;
    const OrgID = organization?.id;
    const UserID = user?.id;
    
    const [Description, setDescription] = useState("");
    const [phnNbr, setPhnNbr] = useState("");
    const [WebSite, setWebSite] = useState("");

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const showShadow = windowWidth >= 640; // Adjust the breakpoint as needed
    
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);


    function submitForm(){
        console.log("submit");
        console.log(
            
                "   OrgID   " + OrgID  + 
                "   name    "+Name +
                "   description "+Description+
                "   phone   "+phnNbr+
                "   website    "+WebSite+
                "   userID  "+UserID
              )

              //update this
        Navigate("/");
        axios.post("http://localhost:4000/api/Organizations/", {
            "OrgID":OrgID,
            "name":Name, 
            "description":Description,
            "phone":phnNbr,
            "website":WebSite,
            "userID":UserID
          })

    }

  return (
    <div className='w-screen h-screen flex justify-center items-center relative'>
      <div className="absolute top-0 left-0 m-4 mt-4">
          <img
            src="/src/assets/fullLogo.svg"
            alt="Logo"
            className={`h-8 w-auto sm:h-15 sm:w-auto ml-6 ${
              showShadow ? "" : "block"
            }`}
          />
        </div>
        <form className= {`w-full sm:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[50%] h-[90%] sm:h-[80%] md:h-[70%] lg:h-[50%] rounded-lg ${
            showShadow ? "shadow-lg" : ""
          } flex flex-col justify-center items-center relative bg-white`} >
            
            <button
            className="absolute top-0 left-0 m-4 flex items-center text-[#111827] px-4 py-2 rounded text-sm md:mt-5 mt-14"
            onClick={() => window.history.back()}
          >
            <svg
              className="w-4 h-4 mr-2 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5"></path>
              <path d="M12 19l-7-7 7-7"></path>
            </svg>
            Back
          </button>

          <div className="flex flex-col justify-center items-center md:w-[60%] w-[90%]">
            <h1 className="text-xl flex justify-center items-center font-bold text-center my-2 font-roboto">
              Sign Up as {Name}
            </h1>

          
          <input
            className="w-[80%] bg-[#F7F7FA] mb-4 text-[#4B5563] text-sm px-2 py-2 border-b border-[#F7F7FA]"
            type="text" 
            placeholder="Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="w-[80%] bg-[#F7F7FA] mb-4 text-[#4B5563] text-sm px-2 py-2 border-b border-[#F7F7FA]"
            type="text" 
            placeholder="Phone Number"
            value={phnNbr}
            onChange={(e) => setPhnNbr(e.target.value)}
          />
          <input
            className= "w-[80%] bg-[#F7F7FA] mb-4 text-[#4B5563] text-sm px-2 py-2 border-b border-[#F7F7FA] "
            type="text" 
            placeholder="Website"
            value={WebSite}
            onChange={(e) => setWebSite(e.target.value)}
          />

        
          <button 
          onClick={submitForm}
          className= "w-[80%] mt-3 bg-custom-purple hover:bg-white text-white hover:text-custom-purple hover:border border-custom-purple py-2 px-3 rounded font-saira text-sm text-center"
                  >
          Submit
          </button>
        </div>
        </form>
    </div>
  )
}

export default OrgDetForm
//name , description, volunteerId, status, address, volunteerProfileImageAvailable, volunteerProfileColor

 