import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import SearchButton from "./PastE-Sections/SearchButton";
import OrganizationSelect from "./PastE-Sections/OrganizationSelect";
import LocationSelect from "./PastE-Sections/LocationSelect";
import YearSelect from "./PastE-Sections/YearSelect";
import MatchingSeminars from "./PastE-Sections/MatchingSeminars";

const PastEvents = () => {
  const organizations = [
    {
      _id: 1,
      name: "organization 1",
      description: "This is the first organization",
    },
    {
      _id: 2,
      name: "organization 2",
      description: "This is the second organization",
    },
    {
      _id: 3,
      name: "organization 3",
      description: "This is the third organization",
    },
  ];

  const seminars = [
    {
      _id: 1,
      name: "Seminar 1",
      description: "This is the first seminar",
      rating: 4.0,
      organizationId: 1,
      year: 2021,
      location: "location 1",
    },
    {
      _id: 2,
      name: "Seminar 2",
      description: "This is the second seminar",
      rating: 3.0,
      organizationId: 2,
      year: 2022,
      location: "location 2",
    },
    {
      _id: 3,
      name: "Seminar 3",
      description: "This is the third seminar",
      rating: 3.5,
      organizationId: 3,
      year: 2023,
      location: "location 3",
    },
    {
      _id: 4,
      name: "Seminar 4",
      description: "This is the fourth seminar",
      rating: 4.5,
      organizationId: 1,
      year: 2021,
      location: "location 1",
    },
    {
      _id: 5,
      name: "Seminar 5",
      description: "This is the fifth seminar",
      rating: 5.0,
      organizationId: 2,
      year: 2022,
      location: "location 2",
    },
    {
      _id: 6,
      name: "Seminar 6",
      description: "This is the sixth seminar",
      rating: 3.5,
      organizationId: 3,
      year: 2023,
      location: "location 3",
    },
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
  console.log(locationOptions);

  const uniqueYears = new Set(seminars.map((seminar) => seminar?.year));
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
        const integerYear = parseInt(selectedYear.value, 10);
        return seminar.year === integerYear;
      });
      setSelectedYearObject(matchingPairs);
    } catch (error) {
      setSelectedYearObject(null);
      console.error(
        "Error occurred while fetching organization data. Please try again."
      );
    }
  };

  useEffect(() => {
    console.log(selectedOrganizationObject);
    console.log(selectedLocationObject);
    console.log(selectedYearObject);
    console.log(matchingObjects);

    if (
      selectedOrganizationObject ||
      selectedLocationObject ||
      selectedYearObject
    ) {
      return;
    }
    setMatchingObjects(seminars);
  }, [selectedOrganizationObject, selectedLocationObject, selectedYearObject]);

  // return (
  //     <div>
  //         <OrganizationSelect
  //             options={organizationOptions}
  //             onSelectionChange={handleOrganizationChange}
  //             selectedValue={selectedOrganization}
  //         />
  //         <LocationSelect
  //             options={locationOptions}
  //             onSelectionChange={handleLocationChange}
  //             selectedValue={selectedLocation}
  //         />
  //         <YearSelect
  //             options={yearOptions}
  //             onSelectionChange={handleYearChange}
  //             selectedValue={selectedYear}
  //         />
  //         <SearchButton
  //             buttonName="Search"
  //             style="w-28 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  //             onClick={handleClick}
  //         />
  //         <MatchingSeminars seminars={matchingObjects} />
  //     </div>
  // );

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-semibold text-center mb-12 mt-20">
          Past Events
        </h1>

        <div className="flex flex-wrap mb-4 justify-center">
          {/* Organization Select */}
          <div className="mr-2 mt-1">
            <OrganizationSelect
              options={organizationOptions}
              onSelectionChange={handleOrganizationChange}
              selectedValue={selectedOrganization}
              //   className="w-full md:w-1/3 px-2"
            />
          </div>

          {/* Location Select */}
          <div className="mr-2 mt-1">
            <LocationSelect
              options={locationOptions}
              onSelectionChange={handleLocationChange}
              selectedValue={selectedLocation}
              //   className="w-full md:w-1/3 px-2"
            />
          </div>

          {/* Year Select */}
          <div className="mr-2 mt-1">
            <YearSelect
              options={yearOptions}
              onSelectionChange={handleYearChange}
              selectedValue={selectedYear}
              //   className="w-full md:w-1/3 px-2"
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
    </>
  );
};

export default PastEvents;
