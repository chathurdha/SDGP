import React, { useState, useEffect } from 'react';
import Select from 'react-select';
// import _ from 'lodash';
import Card from './card';

import SearchButton from './SearchButton';

const FilterOption = () => {

    const organizations = [
        {_id: 1, name: "organization 1", description: "This is the first organization"}, 
        {_id: 2, name: "organization 2", description: "This is the second organization"}, 
        {_id: 3, name: "organization 3", description: "This is the third organization"}
    ];

    const seminars = [
        { _id: 1, name: "Seminar 1", description: "This is the first seminar", rating: 4.0, organizationId: 1, year: 2021, location: "location 1", status: "completed"},
        { _id: 2, name: "Seminar 2", description: "This is the second seminar", rating: 3.0, organizationId: 2, year: 2022, location: "location 2", status: "completed"},
        { _id: 3, name: "Seminar 3", description: "This is the third seminar", rating: 3.5, organizationId: 3, year: 2023, location: "location 3", status: "completed"},
        { _id: 4, name: "Seminar 4", description: "This is the fourth seminar", rating: 4.5, organizationId: 1, year: 2021, location: "location 1", status: "completed"},
        { _id: 5, name: "Seminar 5", description: "This is the fifth seminar", rating: 5.0, organizationId: 2, year: 2022, location: "location 2", status: "completed"},
        { _id: 6, name: "Seminar 6", description: "This is the sixth seminar", rating: 3.5, organizationId: 3, year: 2023, location: "location 3", status: "completed"}
    ];

    const organizationOptions = organizations.map((organization) => {
        return {
          value: organization?.name,
          label: organization?.name,
        };
    });
    console.log(organizationOptions);
    const uniqueLocations = new Set(seminars.map((seminar) => seminar?.location));
    const locationOptions = Array.from(uniqueLocations).map((location) => ({
        value: location,
        label: location,
    }));
    // const locationOptions = _.uniq(seminars.map((seminar) => seminar?.location)).map(
    //     (location) => ({
    //         value: location,
    //         label: location,
    //     })
    // );
    console.log(locationOptions);
    const uniqueYears = new Set(seminars.map((seminar) => seminar?.year));
    const yearOptions = Array.from(uniqueYears).map((year) => ({
        value: year,
        label: year,
    }));
    // const yearOptions = _.uniq(seminars.map((seminar) => seminar?.year)).map(
    //     (year) => ({
    //         value: year,
    //         label: year,
    //     })
    // );
    console.log(yearOptions);

    const [selectedOrganization,setSlectedOrganization] = useState([]);
    const [selectedLocation,setSlectedLocation] = useState([]);
    const [selectedYear,setSlectedYear] = useState([]);

    const [selectedOrganizationObject, setSelectedOrganizationObject] = useState(null);
    const [selectedLocationObject, setSelectedLocationObject] = useState(null);
    const [selectedYearObject, setSelectedYearObject] = useState(null);

    // const [matchingObjects, setMatchingObjects] = useState([]);
    const [matchingObjects, setMatchingObjects] = useState(seminars);

    const handleClick = () => {
        console.log('Button clicked!');
        const matchingObjects = [];
        const filters = [selectedOrganizationObject, selectedLocationObject, selectedYearObject];
        console.log(filters);
        const nonEmptyFilters = filters.filter((filter) => {
            if (filter !== null && filter.length > 0) {
                return filter;
            }
        });

        if (nonEmptyFilters.length === 3) {
            console.log('3 filters');
            for (let i = 0; i < nonEmptyFilters[0].length; i++) {
                for (let j = 0; j < nonEmptyFilters[1].length; j++) {
                    for (let k = 0; k < nonEmptyFilters[2].length; k++) {
                        if (nonEmptyFilters[0][i]._id === nonEmptyFilters[1][j]._id && nonEmptyFilters[1][j]._id === nonEmptyFilters[2][k]._id) {
                            matchingObjects.push(nonEmptyFilters[0][i]);
                        }
                    }
                }
            }
        }
        else if (nonEmptyFilters.length === 2) {
            for (let i = 0; i < nonEmptyFilters[0].length; i++) {
                for (let j = 0; j < nonEmptyFilters[1].length; j++) {
                    if (nonEmptyFilters[0][i]._id === nonEmptyFilters[1][j]._id) {
                        matchingObjects.push(nonEmptyFilters[0][i]);
                    }
                }
            }
        }
        else if (nonEmptyFilters.length === 1) {
            for (let i = 0; i < nonEmptyFilters[0].length; i++) {
                matchingObjects.push(nonEmptyFilters[0][i]);
            }
        }
        else if (nonEmptyFilters.length === 0) {
            seminars.forEach((seminar) => {
                matchingObjects.push(seminar);
            });
        }
        setMatchingObjects(matchingObjects);
    };

    const handleEvent1 = (selectedOrganization) => {
        setSlectedOrganization(selectedOrganization);

        try {
            const selectedObject = organizations.find(
                (organization) => organization.name === selectedOrganization.value
            );
            const matchingPairs = seminars.filter(
                (seminar) => seminar.organizationId === selectedObject._id
            );
            setSelectedOrganizationObject(matchingPairs);
        } catch (error) {
            setSelectedOrganizationObject(null);
            console.error('Error occurred while fetching organization data. Please try again.');
        }
    };

    const handleEvent2 = (selectedLocation) => {
        setSlectedLocation(selectedLocation);

        try {
            const matchingPairs = seminars.filter(
                (seminar) => seminar.location === selectedLocation.value
            );
            setSelectedLocationObject(matchingPairs);
        } catch (error) {
            setSelectedLocationObject(null);
            console.error('Error occurred while fetching organization data. Please try again.');
        }
    };

    const handleEvent3 = (selectedYear) => {
        setSlectedYear(selectedYear);

        try {
            const matchingPairs = seminars.filter(
                (seminar) => {
                    const integerYear = parseInt(selectedYear.value, 10);
                    return(
                        seminar.year === integerYear
                    );
                }
            );
            setSelectedYearObject(matchingPairs);
        } catch (error) {
            setSelectedYearObject(null);
            console.error('Error occurred while fetching organization data. Please try again.');
        }
    };

    useEffect(() => {
        console.log(selectedOrganizationObject);
        console.log(selectedLocationObject);
        console.log(selectedYearObject);
        console.log(matchingObjects);

        if (selectedOrganizationObject || selectedLocationObject || selectedYearObject) {
            return;
        }
        setMatchingObjects(seminars);

    }, [selectedOrganizationObject, selectedLocationObject, selectedYearObject, matchingObjects]);

    return (
        <div>
            <Select
                options={organizationOptions}
                placeholder="Organization"
                isSearchable
                isClearable
                noOptionsMessage={() => "Not Available"}
                className='shadow-none rounded-md w-52'
                onChange={handleEvent1}
                value={selectedOrganization}
            />
            <Select
                options={locationOptions}
                placeholder="Location"
                isSearchable
                isClearable
                noOptionsMessage={() => "Not Available"}
                className='shadow-none rounded-md w-52'
                onChange={handleEvent2}
                value={selectedLocation}
            />
            <Select
                options={yearOptions}
                placeholder="Year"
                isSearchable
                isClearable
                noOptionsMessage={() => "Not Available"}
                className='shadow-none rounded-md w-52'
                onChange={handleEvent3}
                value={selectedYear}
            />
            <SearchButton
                buttonName="Search"
                style="w-28 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleClick}
            />
            {/* <p>Selected value: {selectedOrganization?.value}</p>
            {selectedOrganizationObject && (
                <p>Selected organization: {selectedOrganizationObject.name}</p>
            )} */}
            <div>
                {matchingObjects && matchingObjects.map((seminar) => (
                    <Card key={seminar._id} seminar={seminar} />
                ))}
                {/* {matchingObjects && matchingObjects.length > 0 ? (
                    matchingObjects.map((seminar) => (
                        <Card key={seminar._id} seminar={seminar} />
                    ))
                ) : (
                    seminars.map((seminar) => (
                        <Card key={seminar._id} seminar={seminar} />
                    ))
                )}; */}
            </div>
        </div>
    );
}
 
export default FilterOption;