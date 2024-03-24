import OrgProfileCard from './OrgProfileCard';
import axios from "axios";
import { useState, useEffect } from "react";

export default function OrganizationList() {
    const [organizations, setOrganizations] = useState([]);
    const [allSeminars, setAllSeminars] = useState([]);
    const [allVolunteers, setAllVolunteers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    console.log(organizations);
    console.log(allSeminars);
    console.log(allVolunteers);

    // useEffect(() => {
    //     const fetchOrganizations = async () => {
    //         const response = await axios.get('https://sisu-saviya-6510ee9f562c.herokuapp.com/api/organizations');
    //         setOrganizations(response.data);
    //     };
    //     fetchOrganizations();
    // }, []);
    useEffect(() => {
        const fetchData = async (apiUrl) => {
          try {
            const response = await axios.get(apiUrl);
            switch (apiUrl) {
                case "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/organizations":
                    setOrganizations(response.data);
                    break;
                case "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/volunteers":
                    setAllVolunteers(response.data);
                    break;
                case "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars":
                    setAllSeminars(response.data);
                    break;
                default:
                    console.warn("Unexpected API URL:", apiUrl);
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            console.log("Data fetched successfully");
          }
        };
    
        fetchData("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/organizations");
        fetchData("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/volunteers");
        fetchData("https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars");
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter organizations based on search term
    const filteredOrganizations = organizations.filter(organization => {
        return organization.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <div className="flex items-center justify-between px-4 py-2 mb-2 border-b">
                <input
                    type="text"
                    placeholder="Search Organization..."
                    className="px-4 py-2 bg-gray-100 rounded-md outline-none"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            {/* Show all organizations when search term is empty */}
            {searchTerm === '' ? (
                // organizations.map((organization) => (
                //     <OrgProfileCard 
                //     key={organization._id} 
                //     organization={organization}
                //     allSeminars={allSeminars}
                //     allVolunteers={allVolunteers}
                //     />
                // ))
                <div></div>
            ) : (
                // Show filtered organizations when search term is not empty
                filteredOrganizations.slice(0, 3).map((organization) => (
                    <OrgProfileCard                    
                    key={organization._id} 
                    organization={organization}
                    allSeminars={allSeminars}
                    allVolunteers={allVolunteers}
                    />
                ))
            )}
        </div>
    );
}
