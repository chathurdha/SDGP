/* eslint-disable react/prop-types */

import Select from "react-select";
import { CustomFilterStyles } from "../../CustomFilterStyles";

const LocationSelect = ({ options, onSelectionChange, selectedValue, normalStyles, placeholderValue }) => {
  return (
    <Select
      options={options}
      // placeholder="Location"
      placeholder={placeholderValue}
      isSearchable
      isClearable
      noOptionsMessage={() => "Not Available"}
      styles={CustomFilterStyles}
      // className="shadow-none rounded-md w-52"
      className={normalStyles}
      onChange={onSelectionChange}
      value={selectedValue}
    />
  );
};

export default LocationSelect;

/* eslint-enable react/prop-types */

