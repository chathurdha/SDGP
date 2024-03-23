import { useState, useEffect } from "react";
import axios from "axios";

import SearchButton from "../../Common/PastE-Sections/SearchButton";
// import OrganizationSelect from "../../Common/PastE-Sections/OrganizationSelect";
import LocationSelect from "../../Common/PastE-Sections/LocationSelect";
import YearSelect from "../../Common/PastE-Sections/YearSelect";
import MatchingSeminars from "../../Common/PastE-Sections/MatchingSeminars";

const PrevSeminar = () => {

  const [organizations, setOrganizations] = useState([]);
  const [allSeminars, setAllSeminars] = useState([]);
  // const [pastSeminarList, setPastSeminarList] = useState([]);
  const [seminars, setSeminars] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedYear, setSelectedYear] = useState([]);
  const [selectedLocationObject, setSelectedLocationObject] = useState(null);
  const [selectedYearObject, setSelectedYearObject] = useState(null);
  const [matchingObjects, setMatchingObjects] = useState([]);
  const [specificOrganizations, setSpecificOrganizations] = useState([]);
  const [specificSeminars, setSpecificSeminars] = useState([]);

  console.log(specificSeminars);
  console.log(matchingObjects);
  console.log(seminars);
  console.log(selectedYear);

  // Function to extract year from a date string
  const extractYear = (dateString) => {
    console.log(dateString);
    // Split the date string by whitespace, assuming the format is "Month Day(th), Year"
    const datePart = dateString.split("T")[0];
    // const parts = dateString.split(" ");
    const parts = datePart.split("-");
    if (parts.length !== 3) {
      console.error(`Invalid date format: ${dateString}`);
      return null; // Handle invalid date format
    }
    // return parts[2]; // Return the year part
    return parts[0]; // Return the year part
  };

  // const uniqueLocations = new Set(seminars.map((seminar) => seminar?.location));
  const uniqueLocations = new Set(specificSeminars.map((seminar) => seminar?.location));
  const locationOptions = Array.from(uniqueLocations).map((location) => ({
    value: location,
    label: location,
  }));
  console.log(locationOptions);

  const uniqueYears = new Set(specificSeminars.map((seminar) => extractYear(seminar.expDate)));
  const yearOptions = Array.from(uniqueYears).map((year) => ({
    value: year,
    label: year,
  }));
  console.log(yearOptions);

  const handleClick = () => {
    console.log("Button clicked!");
    const matchingObjects = [];
    const filters = [
      selectedLocationObject,
      selectedYearObject,
    ];
    console.log(filters);
    const nonEmptyFilters = filters.filter((filter) => {
      if (filter !== null && filter.length > 0) {
        return filter;
      }
    });

    if (nonEmptyFilters.length === 2) {
      for (let i = 0; i < nonEmptyFilters[0].length; i++) {
        for (let j = 0; j < nonEmptyFilters[1].length; j++) {
          if (nonEmptyFilters[0][i]._id === nonEmptyFilters[1][j]._id) {
            matchingObjects.push(nonEmptyFilters[0][i]);
          }
        }
      }
    } else if (nonEmptyFilters.length === 1) {
      if (nonEmptyFilters[0] === "err") {
        setMatchingObjects([]);
      } else {
        for (let i = 0; i < nonEmptyFilters[0].length; i++) {
          matchingObjects.push(nonEmptyFilters[0][i]);
        }
      }
    } else if (nonEmptyFilters.length === 0) {
      seminars.forEach((seminar) => {
        matchingObjects.push(seminar);
      });
    }
    setMatchingObjects(matchingObjects);
  };

  const handleLocationChange = (selectedLocation) => {
    setSelectedLocation(selectedLocation);

    try {
      const matchingPairs = specificSeminars.filter(
        (seminar) => seminar.location === selectedLocation.value
      );
      if (matchingPairs.length > 0) {
        setSelectedLocationObject(matchingPairs);
      } else {
        const err = "err";
        setSelectedLocationObject(err);
      }
    } catch (error) {
      setSelectedLocationObject(null);
      console.error(
        "Error occurred while fetching organization data. Please try again."
      );
    }
  };

  const handleYearChange = (selectedYear) => {
    console.log("h2");
    setSelectedYear(selectedYear);

    try {
      const matchingPairs = specificSeminars.filter((seminar) => {
        console.log(selectedYear.value);
        const integerYear = parseInt(selectedYear.value, 10);
        console.log(integerYear);
        return extractYear(seminar.expDate) === selectedYear.value;
      });
      console.log(matchingPairs);
      if (matchingPairs.length > 0) {
        setSelectedYearObject(matchingPairs);
      } else {
        const err = "err";
        setSelectedYearObject(err);
      }
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
            console.log("h1");
            setOrganizations(response.data);
            console.log(response.data);
            break;
          case "http://localhost:4000/api/seminars":
            // setSeminars(response.data);
            setAllSeminars(response.data);
            // setMatchingObjects(response.data);
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

    fetchData("http://localhost:4000/api/seminars");
    fetchData("http://localhost:4000/api/organizations");

  // }, [selectedLocationObject, selectedYearObject]);
}, []);

  useEffect(() => {
    if (specificOrganizations.length > 0) {
      const filterSeminars = seminars.filter((seminar) => seminar.organizationId === specificOrganizations[0]._id);
      console.log(filterSeminars);
      setSpecificSeminars(filterSeminars);
      setMatchingObjects(filterSeminars);
    }
  }, [specificOrganizations, selectedLocationObject, selectedYearObject]);

  useEffect(() => {
    if (allSeminars.length > 0) {
      const seminars = allSeminars.filter((seminar) => {
        return new Date(seminar.expDate) < new Date();
      });
      setSeminars(seminars);
      // setMatchingObjects(seminars);
    }
  }, [allSeminars]);

  useEffect(() => {
    if (seminars.length > 0) {
      const filterOrganization = organizations.filter((organization) => organization._id === "65f0b4ea09f477d188a48fab");
      setSpecificOrganizations(filterOrganization);
      console.log(filterOrganization);
    }
  }, [organizations]);

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:pt-[8%] pt-[25%]">
        <div className="flex flex-wrap mb-4 justify-center">

          {/* Location Select */}
          <div className="mr-2 mt-1">
            <LocationSelect
              options={locationOptions}
              onSelectionChange={handleLocationChange}
              selectedValue={selectedLocation}
              normalStyles="shadow-none rounded-md w-52"
              placeholderValue="Location"
            />
          </div>

          {/* Year Select */}
          <div className="mr-2 mt-1">
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

export default PrevSeminar;
