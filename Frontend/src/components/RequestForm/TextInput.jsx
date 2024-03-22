/* eslint-disable react/prop-types */

const TextInput = ({ label, name, value, onChange, error }) => { 
    return (
        <div className="mb-2">
        <div className="input-field md:w-full px-3">
            {/* <label className="block text-grey-darker text-sm font-semibold mb-2">{label}</label> */}
            <input
            className="appearance-none block w-full bg-gray-lighter text-gray-darker border border-gray-lighter rounded py-3 px-4"
            id={name}
            type="text"
            placeholder={label}
            name={name}
            value={value}
            onChange={onChange}
            />
            {error && (
            <span className="text-red-500 px-4 pt-1 text-sm flex items-center justify-start">{error}</span>
            )}
        </div>
        </div>
    );
}
/* eslint-enable react/prop-types */


export default TextInput;