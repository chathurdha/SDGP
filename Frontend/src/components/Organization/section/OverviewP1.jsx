 

import { useState, useEffect } from "react";
import axios from "axios";
import AboutUs from "/src/assets/aboutUs pic.svg";
import { useUser } from "@clerk/clerk-react";

function OverviewP1() {

    const [organizations, setOrganizations] = useState([])



    
    const user = useUser().user;
    console.log(user?.id)

    const clarkId = organizations.find((org) => org.userID === user?.id);
    // const clarkId = schools.find((sch) => sch.userID === "user_2e6jirQ66OfqhiVRk3qMygDQ5cx");
    console.log(clarkId);
    console.log(organizations)
    useEffect(() => {
        const fetchOrganizations = async () => {
            try {
                const response = await axios.get("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/organizations");
                setOrganizations(response.data);
            } catch (error) {
                console.error("Error fetching organizations:", error);
            }
        };

        fetchOrganizations();
    }, []);



    return (
        <>
            <div className="pt-[4%] relative ">
                <div className="mt-[15%] flex justify-center items-center relative">
                    <img
                        className="w-full lg:w-[80%] h-auto absolute"
                        src={AboutUs}
                        alt=""
                    />
                    <div className="absolute flex flex-col justify-center items-center w-full lg:w-[60%]">
                        <h1 className="w-[20%] lg:w-[40%] h-auto mb-4 text-3xl font-medium text-center text-[#FFFFFF]">
                            {clarkId?.name}
                        </h1>
                        <p className="w-[80%] lg:w-[60%] text-sm text-center text-[#FFFFFF]">
                            {clarkId?.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="pt-[20%] pl-[12%] relative "></div>

        </>
    );
}

export default OverviewP1;



 
