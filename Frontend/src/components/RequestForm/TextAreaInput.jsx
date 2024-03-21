import React from 'react';

const TextAreaInput = ({ 
    label, 
    name, 
    value, 
    onChange, 
    error 
}) => { 
    return (
        <div className='mb-2'>
        <div className='input-field md:w-full px-3'>
            {/* <label className="block text-grey-darker text-sm font-semibold mb-2">{label}</label> */}
            <textarea
            className='appearance-none block w-full bg-gray-lighter text-gray-darker border border-gray-lighter rounded py-3 px-4'
            id={name}
            placeholder={label}
            name={name}
            value={value}
            onChange={onChange}
            />
            {error && (
            <span className='text-red-500 px-4 pt-1 text-sm flex items-center justify-start'>{error}</span>
            )}
        </div>
        </div>
    );
}

export default TextAreaInput;