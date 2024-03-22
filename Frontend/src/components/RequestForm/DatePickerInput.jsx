import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput = ({ selected, onChange, placeholderText, error }) => {
  return (
    <div className="mb-2">
      <div className="input-field md:w-full px-3 flex flex-col justify-start">
        <DatePicker
          selected={selected}
          onChange={onChange}
          placeholderText={placeholderText}
          className="appearance-none w-full block bg-gray-lighter text-gray-darker border border-gray-lighter rounded py-3 px-4"
        />
        {error && (
          <span className="text-red-500 px-4 pt-1 text-sm flex items-center justify-start">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default DatePickerInput;
