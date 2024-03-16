import React from 'react';

const RequestForm = () => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="school-name">
            School Name
          </label>          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="school-name" type="text" placeholder="Enter school name" />
        </div>
      </div>

      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="date" type="date" />
        </div>
      </div>

      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="location" type="text" placeholder="Enter location" />
        </div>
      </div>

      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="subject" type="text" placeholder="Enter subject" />
        </div>
      </div>

      <div className="-mx-3 md:flex mt-2">
        <div className="md:w-full px-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
            Confirm Request
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <label className="block text-grey-darker text-sm font-bold mb-2">
          <input className="mr-2 leading-tight" type="checkbox" />
          <span className="text-sm">
            Send me helpful emails
          </span>
        </label>
        <label className="block text-grey-darker text-sm font-bold mb-2">
          <input className="mr-2 leading-tight" type="checkbox" />
          <span className="text-sm">
            Yes, I understand and agree to the Sisu Saviya Terms of Service, including the User Agreement and Privacy Policy.
          </span>
        </label>
      </div>

      <div className="flex items-center justify-between mt-4">
        <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
          Back
        </a>
        <div className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
          Step 02 of 03
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
