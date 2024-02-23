import React from 'react';
import Select from 'react-select';
import { CustomFilterStyles } from './CustomFilterStyles';

const LocationSelect = ({ options, onSelectionChange, selectedValue }) => {
  return (
    <Select
      options={options}
      placeholder="Location"
      isSearchable
      isClearable
      noOptionsMessage={() => "Not Available"}
      styles={CustomFilterStyles}
      className='shadow-none rounded-md w-52'
      onChange={onSelectionChange}
      value={selectedValue}
    />
  );
};

export default LocationSelect;