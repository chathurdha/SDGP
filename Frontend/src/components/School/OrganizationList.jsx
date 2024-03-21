import OrgProfileCard from './OrgProfileCard';
import axios from "axios";
import { useState, useEffect } from "react";

export default function OrganizationList() {
    const [organizations, setOrganizations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchOrganizations = async () => {
            const response = await axios.get('http://localhost:4000/api/organizations');
            setOrganizations(response.data);
        };
        fetchOrganizations();
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
                    placeholder="Search by organization name..."
                    className="px-4 py-2 bg-gray-100 rounded-md outline-none"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            {/* Show all organizations when search term is empty */}
            {searchTerm === '' ? (
                organizations.map((organization) => (
                    <OrgProfileCard key={organization._id} organization={organization}/>
                ))
            ) : (
                // Show filtered organizations when search term is not empty
                filteredOrganizations.map((organization) => (
                    <OrgProfileCard key={organization._id} organization={organization}/>
                ))
            )}
        </div>
    );
}
