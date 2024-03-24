/* eslint-disable react/jsx-key */
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';



function VolDetForm() {
   
    const Navigate = useNavigate();
    const { user } = useUser();
    const Name = user?.firstName;

    const UserID = user?.id;
    const Status = "pending";
    const VolunteerProfileImageAvailable = user?.hasImage;
    let VolunteerProfileColor = "null";
    if (! VolunteerProfileImageAvailable) { 
      const colours = ["slate", "green", "yellow", "blue", "red", "pink", "orange", "amber", "lime", "emerald", "teal", "cyan", "sky", "indigo", "violet", "purple", "fuchsia"];
      const shade = [200, 300, 400, 500]

      const RandomColour = Math.floor(Math.random() * colours.length)
      const RandomShade = Math.floor(Math.random() * shade.length)

      const randColour = `bg-${colours[RandomColour]}-${shade[RandomShade]}`
      VolunteerProfileColor = randColour.replace(/\s+/g, '');
    }
    
    const [Description, setDescription] = useState("");
    const [VolunteerId, setVolunteerId] = useState(""); 
    const [Address, setAddress] = useState("");


    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOrg, setSelectedOrg] = useState(null);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const showShadow = windowWidth >= 640; // Adjust the breakpoint as needed
    
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    let handleSelectedOrgChange = (e) => {
      setSelectedOrg(e.target.value)
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://sisu-saviya-6510ee9f562c.herokuapp.com/api/Organizations/');
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
      
      fetchData();
      
      
      return () => {
      };
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!data || data.length === 0) {
      return <div>No data available</div>;
    }

    const organizations = data.map(item => ({ _id: item._id, name: item.name }));




    function submitForm(){
        console.log("submit");


        
              //update this
              Navigate("/");
        axios.post("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/Volunteers/", {
            "userID": UserID,
            "name":Name,
            "description":Description,
            "volunteerId":VolunteerId,
            "status":Status,
            "address":Address,
            "volunteerProfileImageAvailable":VolunteerProfileImageAvailable,
            "volunteerProfileColor":VolunteerProfileColor,
            "orgID": selectedOrg,
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
              Sign Up as a volunteer
            </h1>

          <input
            className="w-[80%] bg-[#F7F7FA] mb-4 text-[#4B5563] mt-4 text-sm px-2 py-2 border-b border-[#F7F7FA] rounded-t rounded-b"
            placeholder="Volunteer ID"
            type="text" 
            value={VolunteerId}
            onChange={(e) => setVolunteerId(e.target.value)}
          />
          <input
            className="w-[80%] bg-[#F7F7FA] mb-4 text-[#4B5563] text-sm px-2 py-2 border-b border-[#F7F7FA]"
            type="text" 
            placeholder="Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className= "w-[80%] bg-[#F7F7FA] mb-4 text-[#4B5563] text-sm px-2 py-2 border-b border-[#F7F7FA] "
            type="text" 
            placeholder="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <select onChange={handleSelectedOrgChange} className="w-[80%] border-selectBorder border bg-selectFill mb-3 text-[#4B5563] text-sm px-2 py-2 rounded"> 
            <option value='null'> -- Select an Organization -- </option>
            {organizations.map((selectedOrg) => <option value={selectedOrg._id}>{selectedOrg.name}</option>)}
          </select>

        
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

export default VolDetForm
//name , description, volunteerId, status, address, volunteerProfileImageAvailable, volunteerProfileColor

/* eslint-enable react/jsx-key */
