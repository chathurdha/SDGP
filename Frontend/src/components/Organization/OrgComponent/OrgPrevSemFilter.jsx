import React, { useState, useEffect } from "react";
import SearchButton from "../../Common/PastE-Sections/SearchButton";
import LocationSelect from "../../Common/PastE-Sections/LocationSelect";
import YearSelect from "../../Common/PastE-Sections/YearSelect";
import MatchingSeminars from "../../Common/PastE-Sections/MatchingSeminars";

const PrevSeminar = () => {
  // Sample organization data
  const organizationId = 1; // User's organization ID

  // Sample seminar data in JSON format
  const seminarsData = [
    {
      _id: 1,
      name: "Seminar 1",
      description: "This is the first seminar",
      rating: 4.0,
      organizationId: 1,
      year: 2021,
      location: "Location 1",
    },
    {
      _id: 2,
      name: "Seminar 2",
      description: "This is the second seminar",
      rating: 3.5,
      organizationId: 1,
      year: 2022,
      location: "Location 2",
    },
    // Add more seminars as needed
  ];

  const [seminars, setSeminars] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [matchingObjects, setMatchingObjects] = useState([]);

  const handleLocationChange = (selectedLocation) => {
    setSelectedLocation(selectedLocation);
  };

  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const handleSearch = () => {
    // Filter seminars based on selected location, year, and organization ID
    let filteredSeminars = seminarsData.filter(function (seminar) {
      return (
        seminar.organizationId === organizationId &&
        (!selectedLocation || seminar.location === selectedLocation.value) &&
        (!selectedYear || seminar.year === parseInt(selectedYear.value))
      );
    });

    setMatchingObjects(filteredSeminars);
  };

  useEffect(() => {
    // Fetch seminars data when component mounts
    setSeminars(seminarsData);
    setMatchingObjects(seminarsData.filter(seminar => seminar.organizationId === organizationId));
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:pt-[5%] pt-[25%]">
        <div className="flex flex-wrap mb-4 justify-center">
          {/* Location Select */}
          <div className="mr-2 mt-1">
            <LocationSelect
              options={[
                { value: "Location 1", label: "Location 1" },
                { value: "Location 2", label: "Location 2" },
              ]}
              onSelectionChange={handleLocationChange}
              selectedValue={selectedLocation}
            />
          </div>

          {/* Year Select */}
          <div className="mr-2 mt-1">
            <YearSelect
              options={[
                { value: "2021", label: "2021" },
                { value: "2022", label: "2022" },
              ]}
              onSelectionChange={handleYearChange}
              selectedValue={selectedYear}
            />
          </div>

          {/* Search Button */}
          <SearchButton
            buttonName="Search"
            style="w-28 mt-1 md:ml-4 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleSearch}
          />
        </div>

        {/* Matching Seminars */}
        <MatchingSeminars seminars={matchingObjects} />
      </div>
    </>
  );
};

export default PrevSeminar;
