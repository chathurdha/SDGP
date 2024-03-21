import React from 'react';

const CheckboxInput = ({ 
    label, 
    name, 
    value, 
    onChange, 
    error 
}) => {
    return (
        <label className="block text-grey-darker text-sm font-semibold mb-2">
            <input 
              className="mr-2 leading-tight" 
              type="checkbox" 
              name={name}
              value={value}
              onChange={onChange}
              />
            <span className="text-sm">
                {label}
            </span>
            {name === 'aggreementAccepted' && error && (
                <span className='text-red-500 px-4 pt-1 text-sm flex items-center justify-start'>{error}</span>
            )}
        </label>
    );
}

export default CheckboxInput;