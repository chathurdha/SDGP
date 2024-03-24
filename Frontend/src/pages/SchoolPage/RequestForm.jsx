import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { isMobile } from "react-device-detect";
import axios from "axios";
//imp
// import { useUser } from '@clerk/clerk-react';

import OrganizationSelect from "../../components/Common/PastE-Sections/OrganizationSelect";
import CheckboxInput from "../../components/RequestForm/CheckboxInput";
import TextInput from "../../components/RequestForm/TextInput";
import TextAreaInput from "../../components/RequestForm/TextAreaInput";
import DatePickerInput from "../../components/RequestForm/DatePickerInput";
import NumberInput from "../../components/RequestForm/NumberInput";
import SchlNavBar from "../../components/navbar/SchlNavBar";
import SchlHeader from "../../components/Header/SchlHeader";
import Footer from "../../components/Footer/Footer";

const RequestForm = () => {
  //imp
  // const user = useUser().user;

  const [organizations, setOrganizations] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState([]);
  console.log(selectedOrganization);

  const [formData, setFormData] = useState({
    organizationName: "",
    selectedDate: null,
    location: "",
    subject: "",
    grade: "",
    expStudentCount: "",
    expTeacherCount: "",
    additionalRequests: "",
    sendHelpfulEmails: false,
    aggreementAccepted: false,
    errors: {},
  });

  console.log(organizations);
  const uniqueOrganizations = new Set(
    organizations.map((organization) => organization?.name)
  );
  const organizationOptions = Array.from(uniqueOrganizations).map(
    (organization) => {
      return {
        value: organization,
        label: organization,
      };
    }
  );
  console.log(organizationOptions);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    console.log(date);
    if (date && isFutureDate(date)) {
      setFormData((prevData) => ({
        ...prevData,
        selectedDate: date,
        errors: { ...prevData.errors, selectedDate: null },
      })); // Clear previous error
    } else {
      setFormData((prevData) => ({
        ...prevData,
        selectedDate: null,
        errors: {
          ...prevData.errors,
          selectedDate: "Please select a future date",
        },
      }));
    }
  };

  const handleHelpfulEmailsChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      sendHelpfulEmails: event.target.checked,
    }));
  };

  const aggreementAcceptenceChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      aggreementAccepted: event.target.checked,
    }));
  };

  const handleOrganizationChange = (selectedOrganization) => {
    setSelectedOrganization(selectedOrganization);
    setFormData((prevData) => ({
      ...prevData,
      organizationName: selectedOrganization.value,
    }));
  };

  const isFutureDate = (date) => {
    const today = new Date(); //get current date
    today.setHours(0, 0, 0, 0); //set hours to 0

    return date > today; //return true if date is greater than today
  };

  const validateForm = () => {
    const errors = {};
    const regex = /^[a-zA-Z]+$/; // Regular expression for alphabetic letters

    if (!formData.organizationName) {
      errors.organizationName = "Organization name is required";
    }
    if (!formData.selectedDate) {
      errors.selectedDate = "Please select a date";
    }
    if (!formData.location) {
      errors.location = "Location is required";
    }
    if (!formData.subject || !regex.test(formData.subject.trim())) {
      errors.subject = "Subject is required and must contain only letters.";
    }

    if (!formData.grade) {
      errors.grade = "Grade is required and must contain only letters.";
    } else if (formData.grade < 1 || formData.grade > 13) {
      errors.grade = "Grade must be between 1 and 13";
    } else if (!Number.isInteger(Number(formData.grade))) {
      errors.grade = "Grade must be an number";
    }

    if (!formData.expStudentCount) {
      errors.expStudentCount = "Expected student count is required";
    } else if (formData.expStudentCount < 10) {
      errors.expStudentCount = "Expected student count must be at least 10";
    }

    if (!formData.expTeacherCount) {
      errors.expTeacherCount = "Expected teacher count is required";
    } else if (formData.expTeacherCount < 1 || formData.expTeacherCount > 10) {
      errors.expTeacherCount =
        "Expected teacher count must be between 1 and 10";
    }
    // if (!formData.additionalRequests) {
    //   errors.additionalRequests = 'Additional requests are required and must contain only letters.';
    // }
    if (!formData.aggreementAccepted) {
      errors.aggreementAccepted = "Please accept the terms and conditions";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    setFormData((prevData) => ({ ...prevData, errors }));

    if (Object.keys(errors).length === 0) {
      const selectedObject = organizations.find(
        (organization) => organization.name === selectedOrganization.value
      );
      console.log(selectedObject);

      try {
        const response = await axios.post(
          "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/seminars",
          {
            // name: 'Seminar',
            // description: 'Seminar',
            // rating: 0,
            location: formData.location,
            // status: 'Pending',
            subject: formData.subject,
            grade: formData.grade,
            expStudentCount: formData.expStudentCount,
            expTeacherCount: formData.expTeacherCount,
            additionalRequests:
              formData.additionalRequests || "No additional requests",
            expDate: formData.selectedDate,
            schoolId: "65f0a01b5e34ced181cf1ab5",
            //imp
            // schoolId: user?.id,
            organizationId: selectedObject._id,
          }
        );

        console.log("Form submitted successfully:", response.data);
        setSuccessMessage("Form submitted successfully!");

        setFormData({
          organizationName: "",
          selectedDate: null,
          location: "",
          subject: "",
          grade: "",
          expStudentCount: "",
          expTeacherCount: "",
          additionalRequests: "",
          sendHelpfulEmails: false,
          aggreementAccepted: false,
          errors: {},
        });
        setTimeout(() => {
          setSuccessMessage("");
        }, 15000);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sisu-saviya-6510ee9f562c.herokuapp.com/api/organizations"
        );
        console.log("Organizations:", response.data);
        setOrganizations(response.data);
      } catch (error) {
        console.error("Error fetching organization data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <SchlHeader />
      <SchlNavBar />
      <div className="bg-gray-100 shadow rounded px-8 pt-6 pb-8 ">
        <h1 className="text-3xl font-semibold text-center mb-8 mt-4">
          Request Form
        </h1>
        <div className="flex items-center justify-center">
          <div className="lg:w-2/3 w-full">
            <div className="mb-2">
              <div className="input-field md:w-full px-3">
                <OrganizationSelect
                  options={organizationOptions}
                  onSelectionChange={handleOrganizationChange}
                  selectedValue={selectedOrganization}
                  normalStyles="shadow-none rounded-md w-full md:w-1/3"
                  placeholderValue="Select Organization"
                />
                {formData.errors.organizationName && (
                  <span className="text-red-500 px-4 pt-1 text-sm flex items-center justify-start">
                    {formData.errors.organizationName}
                  </span>
                )}
              </div>
            </div>

            {/* <div className="mb-2">
            <div className="input-field md:w-full px-3 flex flex-col justify-start">
              <DatePicker
                selected={formData.selectedDate}
                onChange={handleDateChange}
                placeholderText="Select expected date for the Seminar"
                className='appearance-none w-full block bg-gray-lighter text-gray-darker border border-gray-lighter rounded py-3 px-4'
              />
              {formData.errors.selectedDate && (
                <span className="text-red-500 px-4 pt-1 text-sm flex items-center justify-start">{formData.errors.selectedDate}</span>
              )}
            </div>
          </div> */}
            <DatePickerInput
              selected={formData.selectedDate}
              onChange={handleDateChange}
              placeholderText="Select expected date for the Seminar"
              error={formData.errors.selectedDate}
            />

            {/* <div className="mb-2">
            <div className="input-field md:w-full px-3">
              <input
                className="appearance-none block w-full bg-gray-lighter text-gray-darker border border-gray-lighter rounded py-3 px-4"
                id="location"
                type="text"
                placeholder="Enter location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
              {formData.errors.location && (
                <span className="text-red-500 px-4 pt-1 text-sm flex items-center justify-start">{formData.errors.location}</span>
              )}
            </div>
          </div> */}
            <TextInput
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              error={formData.errors.location}
            />

            {/* <div className="mb-2">
            <div className="input-field md:w-full px-3">
              <input
                className="appearance-none block w-full bg-gray-lighter text-gray-darker border border-gray-lighter rounded py-3 px-4"
                id="subject"
                type="text"
                placeholder="Enter subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {formData.errors.subject && (
                <span className="text-red-500 px-4 pt-1 text-sm flex items-center justify-start">{formData.errors.subject}</span>
              )}
            </div>
          </div> */}

            <TextInput
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              error={formData.errors.subject}
            />

            {/* <div className='mb-2'>
            <div className='input-field md:w-full px-3'>
              <input
                className='appearance-none block w-full bg-gray-lighter text-gray-darker border border-gray-lighter rounded py-3 px-4'
                id='grade'
                type='number'
                min={1}
                max={13}
                placeholder='Enter grade'
                name='grade'
                value={formData.grade}
                onChange={handleChange}
              />
              {formData.errors.grade && (
                <span className='text-red-500 px-4 pt-1 text-sm flex items-center justify-start'>{formData.errors.grade}</span>
              )}
            </div>
          </div> */}

            <TextInput
              label="Grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              error={formData.errors.grade}
            />

            {/* <div className='mb-2'>
            <div className='input-field md:w-full px-3'>
              <input
                className='appearance-none block w-full bg-gray-lighter text-gray-darker border border-gray-lighter rounded py-3 px-4'
                id='expStudentCount'
                type='number'
                min={10}
                placeholder='Enter expected student count'
                name='expStudentCount'
                value={formData.expStudentCount}
                onChange={handleChange}
              />
              {formData.errors.expStudentCount && (
                <span className='text-red-500 px-4 pt-1 text-sm flex items-center justify-start'>{formData.errors.expStudentCount}</span>
              )}
            </div>
          </div> */}

            <NumberInput
              label="Expected Student Count"
              name="expStudentCount"
              value={formData.expStudentCount}
              min={10}
              error={formData.errors.expStudentCount}
              onChange={handleChange}
            />

            {/* <div className='mb-2'>
            <div className='input-field md:w-full px-3'>
              <input
                className='appearance-none block w-full bg-gray-lighter text-gray-darker border border-gray-lighter rounded py-3 px-4'
                id='expTeacherCount'
                type='number'
                min={1}
                max={10}
                placeholder='Enter expected teacher count'
                name='expTeacherCount'
                value={formData.expTeacherCount}
                onChange={handleChange}
              />
              {formData.errors.expTeacherCount && (
                <span className='text-red-500 px-4 pt-1 text-sm flex items-center justify-start'>{formData.errors.expTeacherCount}</span>
              )}
            </div>
          </div> */}

            <NumberInput
              label="Expected Teacher Count"
              name="expTeacherCount"
              value={formData.expTeacherCount}
              min={1}
              max={10}
              error={formData.errors.expTeacherCount}
              onChange={handleChange}
            />

            {/* <div className='mb-2'>
            <div className='input-field md:w-full px-3'>
              <input
                className='appearance-none block w-full bg-gray-lighter text-gray-darker border border-gray-lighter rounded py-3 px-4'
                id='additionalRequests'
                type='text'
                placeholder='Enter additional requests (Optional)'
                name='additionalRequests'
                value={formData.additionalRequests}
                onChange={handleChange}
              />
              {formData.errors.additionalRequests && (
                <span className='text-red-500 px-4 pt-1 text-sm flex items-center justify-start'>{formData.errors.additionalRequests}</span>
              )}
            </div>
          </div> */}

            <TextAreaInput
              label="Additional Requests"
              name="additionalRequests"
              value={formData.additionalRequests}
              onChange={handleChange}
              error={formData.errors.additionalRequests}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="mt-4 text-left">
            {/* <label className="block text-grey-darker text-sm font-semibold mb-2">
            <input 
              className="mr-2 leading-tight" 
              type="checkbox" 
              name="sendHelpfulEmails"
              value={formData.sendHelpfulEmails}
              onChange={handleHelpfulEmailsChange}
              />
            <span className="text-sm">
              Send me helpful emails
            </span>
          </label> */}
            <CheckboxInput
              label="Send me helpful emails"
              name="sendHelpfulEmails"
              value={formData.sendHelpfulEmails}
              onChange={handleHelpfulEmailsChange}
              error={formData.errors.sendHelpfulEmails}
            />
            {/* <label className="block text-grey-darker text-sm font-semibold mb-2">
            <input 
              className="mr-2 leading-tight" 
              type="checkbox" 
              name="aggreementAccepted"
              value={formData.aggreementAccepted}
              onChange={aggreementAcceptenceChange}
              />
            <span className="text-sm">
              Yes, I understand and agree to the Sisu Saviya Terms of Service, including the User Agreement and Privacy Policy.
            </span>
            {formData.errors.aggreementAccepted && (
              <span className="text-red-500 px-4 pt-1 text-sm flex items-center justify-start">{formData.errors.aggreementAccepted}</span>
            )}
          </label> */}
            <CheckboxInput
              label="Yes, I understand and agree to the Sisu Saviya Terms of Service, including the User Agreement and Privacy Policy."
              name="aggreementAccepted"
              value={formData.aggreementAccepted}
              onChange={aggreementAcceptenceChange}
              error={formData.errors.aggreementAccepted}
            />
          </div>
        </div>

        <div className={`md:flex ${isMobile ? "" : "mx-3"} mt-2`}>
          <div className="md:w-full px-3">
            <button
              className="w-36 mt-4 md:ml-4 px-3 py-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="button"
              onClick={handleSubmit}
            >
              Send Request
            </button>
            {successMessage && (
              <p className="my-3 text-custom-purple">{successMessage}</p> // Render success message
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RequestForm;
