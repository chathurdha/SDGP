 

import { useState, useEffect } from "react";
import axios from "axios";
import AboutUs from "/src/assets/aboutUs pic.svg";

function OverviewP1() {
    const [orgName, setOrgName] = useState("");
    const [orgDescription, setOrgDescription] = useState("");

    useEffect(() => {
        const fetchOrgData = async () => {
            try {
                const id = "65f0b4ea09f477d188a48fab";
                const response = await axios.get(`https://sisu-saviya-6510ee9f562c.herokuapp.com/api/organizations/${id}`);
                const { name, description } = response.data; // Assuming API response contains name and description fields
                setOrgName(name);
                setOrgDescription(description);
                console.log(name, description);
            } catch (error) {
                console.error("Error fetching organization data:", error);
            }
        }
        fetchOrgData();
    }, []);

    return (
        <>
            <div className="pt-[4%] relative">
                <div className="mt-[15%] flex justify-center items-center relative">
                    <img
                        className="w-full lg:w-[80%] h-auto absolute"
                        src={AboutUs}
                        alt=""
                    />
                    <div className="absolute flex flex-col justify-center items-center w-full lg:w-[60%]">
                        <h1 className="w-[20%] lg:w-[40%] h-auto mb-4 text-3xl font-medium text-center text-[#FFFFFF]">
                            {orgName}
                        </h1>
                        <p className="w-[80%] lg:w-[60%] text-sm text-center text-[#FFFFFF]">
                            {orgDescription}
                        </p>
                    </div>
                </div>
            </div>
            <div className="pt-[20%] pl-[12%] relative"></div>
        </>
    );
}

export default OverviewP1;



 
