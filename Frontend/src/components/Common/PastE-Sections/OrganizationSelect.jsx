import React from "react";
import Select from "react-select";
import { CustomFilterStyles } from "../../CustomFilterStyles";

const OrganizationSelect = ({ options, onSelectionChange, selectedValue, normalStyles, placeholderValue }) => {
  return (
    <Select
      options={options}
      // placeholder="Organization"
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

export default OrganizationSelect;
