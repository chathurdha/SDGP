import React from "react";
import Select from "react-select";
import { CustomFilterStyles } from "../../CustomFilterStyles";

const YearSelect = ({ options, onSelectionChange, selectedValue }) => {
  return (
    <Select
      options={options}
      placeholder="Year"
      isSearchable
      isClearable
      noOptionsMessage={() => "Not Available"}
      styles={CustomFilterStyles}
      className="shadow-none rounded-md w-52"
      onChange={onSelectionChange}
      value={selectedValue}
    />
  );
};

export default YearSelect;
