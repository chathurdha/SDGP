import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../navbar/Navbar";
import SearchButton from "./PastE-Sections/SearchButton";
import OrganizationSelect from "./PastE-Sections/OrganizationSelect";
import LocationSelect from "./PastE-Sections/LocationSelect";
import YearSelect from "./PastE-Sections/YearSelect";
import MatchingSeminars from "./PastE-Sections/MatchingSeminars";
import Footer from "../Footer/Footer";

const PastEvents = () => {
  const [organizations, setOrganizations] = useState([]);
  const [seminars, setSeminars] = useState([]);

  // Function to extract year from a date string
  const extractYear = (dateString) => {
    console.log(dateString);
    // Split the date string by whitespace, assuming the format is "Month Day(th), Year"
    const datePart = dateString.split('T')[0];
    // const parts = dateString.split(" ");
    const parts = datePart.split("-");
    if (parts.length !== 3) {
      console.error(`Invalid date format: ${dateString}`);
      return null; // Handle invalid date format
    }
    // return parts[2]; // Return the year part
    return parts[0]; // Return the year part
  };

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
  console.log(locationOptions);

  // const uniqueYears = new Set(seminars.map((seminar) => seminar?.year));
  const uniqueYears = new Set(
    seminars.map((seminar) => extractYear(seminar.expDate))
  );
  const yearOptions = Array.from(uniqueYears).map((year) => ({
    value: year,
    label: year,
  }));
  console.log(yearOptions);

  const [selectedOrganization, setSelectedOrganization] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedYear, setSelectedYear] = useState([]);

  const [selectedOrganizationObject, setSelectedOrganizationObject] =
    useState(null);
  const [selectedLocationObject, setSelectedLocationObject] = useState(null);
  const [selectedYearObject, setSelectedYearObject] = useState(null);

  const [matchingObjects, setMatchingObjects] = useState(seminars);

  const handleClick = () => {
    console.log("Button clicked!");
    const matchingObjects = [];
    const filters = [
      selectedOrganizationObject,
      selectedLocationObject,
      selectedYearObject,
    ];
    console.log(filters);
    const nonEmptyFilters = filters.filter((filter) => {
      if (filter !== null && filter.length > 0) {
        return filter;
      }
    });

    if (nonEmptyFilters.length === 3) {
      console.log("3 filters");
      for (let i = 0; i < nonEmptyFilters[0].length; i++) {
        for (let j = 0; j < nonEmptyFilters[1].length; j++) {
          for (let k = 0; k < nonEmptyFilters[2].length; k++) {
            if (
              nonEmptyFilters[0][i]._id === nonEmptyFilters[1][j]._id &&
              nonEmptyFilters[1][j]._id === nonEmptyFilters[2][k]._id
            ) {
              matchingObjects.push(nonEmptyFilters[0][i]);
            }
          }
        }
      }
    } else if (nonEmptyFilters.length === 2) {
      for (let i = 0; i < nonEmptyFilters[0].length; i++) {
        for (let j = 0; j < nonEmptyFilters[1].length; j++) {
          if (nonEmptyFilters[0][i]._id === nonEmptyFilters[1][j]._id) {
            matchingObjects.push(nonEmptyFilters[0][i]);
          }
        }
      }
    } else if (nonEmptyFilters.length === 1) {
      for (let i = 0; i < nonEmptyFilters[0].length; i++) {
        matchingObjects.push(nonEmptyFilters[0][i]);
      }
    } else if (nonEmptyFilters.length === 0) {
      seminars.forEach((seminar) => {
        matchingObjects.push(seminar);
      });
    }
    setMatchingObjects(matchingObjects);
  };

  const handleOrganizationChange = (selectedOrganization) => {
    setSelectedOrganization(selectedOrganization);

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
      console.error(
        "Error occurred while fetching organization data. Please try again."
      );
    }
  };

  const handleLocationChange = (selectedLocation) => {
    setSelectedLocation(selectedLocation);

    try {
      const matchingPairs = seminars.filter(
        (seminar) => seminar.location === selectedLocation.value
      );
      setSelectedLocationObject(matchingPairs);
    } catch (error) {
      setSelectedLocationObject(null);
      console.error(
        "Error occurred while fetching organization data. Please try again."
      );
    }
  };

  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear);

    try {
      const matchingPairs = seminars.filter((seminar) => {
        console.log(selectedYear.value);
        const integerYear = parseInt(selectedYear.value, 10);
        console.log(integerYear);
        return extractYear(seminar.expDate) === selectedYear.value;
      });
      console.log(matchingPairs);
      setSelectedYearObject(matchingPairs);
    } catch (error) {
      setSelectedYearObject(null);
      console.error(
        "Error occurred while fetching organization data. Please try again."
      );
    }
  };

  useEffect(() => {
    const fetchData = async (apiUrl) => {
      try {
        const response = await axios.get(apiUrl);
        switch (apiUrl) {
          case "http://localhost:4000/api/organizations":
            setOrganizations(response.data);
            console.log(response.data);
            break;
          case "http://localhost:4000/api/seminars":
            setSeminars(response.data);
            setMatchingObjects(response.data);
            console.log(response.data);
            break;
          default:
            console.warn("Unexpected API URL:", apiUrl);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData("http://localhost:4000/api/organizations");
    fetchData("http://localhost:4000/api/seminars");
  }, [selectedOrganizationObject, selectedLocationObject, selectedYearObject]);

  return (
    <>
      <Navbar />
        <div className="container mx-auto px-4 py-8 md:pt-[8%] pt-[25%]">
          <h1 className="text-3xl font-semibold text-center mb-12">
            Past Events
          </h1>
          <div className="flex flex-wrap mb-4 justify-center">
            <h1 className="text-3xl font-semibold text-center mb-12">
                Past Events
            </h1>

            <div className="flex flex-wrap mb-4 justify-center">
                {/* Organization Select */}
                <div className='mr-2 mt-1'>
                    <OrganizationSelect
                    options={organizationOptions}
                    onSelectionChange={handleOrganizationChange}
                    selectedValue={selectedOrganization}
                    normalStyles="shadow-none rounded-md w-52"
                    placeholderValue="Organization"
                    //   className="w-full md:w-1/3 px-2"
                    />
                </div>
        
                {/* Location Select */}
                <div className='mr-2 mt-1'>
                    <LocationSelect
                    options={locationOptions}
                    onSelectionChange={handleLocationChange}
                    selectedValue={selectedLocation}
                    normalStyles="shadow-none rounded-md w-52"
                    placeholderValue="Location"
                    />
                </div>
        
                {/* Year Select */}
                <div className='mr-2 mt-1'>
                    <YearSelect
                    options={yearOptions}
                    onSelectionChange={handleYearChange}
                    selectedValue={selectedYear}
                    normalStyles="shadow-none rounded-md w-52"
                    placeholderValue="Year"
                    />
                </div>

                {/* Search Button */}
                <SearchButton
                buttonName="Search"
                style="w-28 mt-1 md:ml-4 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleClick}
            />
          </div>

          {/* Location Select */}
          <div className="mr-2 mt-1">
            <LocationSelect
              options={locationOptions}
              onSelectionChange={handleLocationChange}
              selectedValue={selectedLocation}
            />
          </div>

          {/* Year Select */}
          <div className="mr-2 mt-1">
            <YearSelect
              options={yearOptions}
              onSelectionChange={handleYearChange}
              selectedValue={selectedYear}
            />
          </div>

          {/* Search Button */}
          <SearchButton
            buttonName="Search"
            style="w-28 mt-1 md:ml-4 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleClick}
          />
        </div>

        <div className="flex justify-center">
          <div className="pt-4 pb-12 md:w-2/3 lg:w-1/2 text-center">
            <p>
              We believe that we can act a major role in the journey of creating
              a better society. During the journey we had gone through so many
              milestones. We believe this investment will impact the future of
              this country.
            </p>
          </div>
        </div>

        {/* Matching Seminars */}
        <MatchingSeminars seminars={matchingObjects} />
      </div>
      <Footer />
    </>
  );
};

export default PastEvents;
