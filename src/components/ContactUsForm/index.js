"use client"

import { useState } from 'react';

const ContactUSForm = (props) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        message: '',
        type: 'ContactPage'
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Validate and remove error
        let formErrors = { ...errors };
        if (name === 'firstName') {
            delete formErrors.firstName;
        }
        if (name === 'lastName') {
            delete formErrors.lastName;
        }
        if (name === 'emailId') {
            delete formErrors.emailId;
        }
        if (name === 'message') {
            delete formErrors.message;
        }
        setErrors(formErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        let formErrors = {};
        if (!formData.firstName) {
            formErrors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
            formErrors.lastName = 'Last name is required';
        }
        if (!formData.emailId) {
            formErrors.emailId = 'Email is required';
        }
        if (!formData.message) {
            formErrors.message = 'Message is required';
        }

        if (Object.keys(formErrors).length === 0) {
            props.submitContactUsForm(formData);
            handleReset();
        } else {
            setErrors(formErrors);
        }
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            emailId: '',
            message: '',
            type: 'ContactPage'
        });
        setErrors({});
    };

    return (
        <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input
                        className={`block w-full bg-gray-200 text-gray-700 border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-none appearance-none`}
                        id="grid-first-name"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Jane"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <input
                        className={`block w-full bg-gray-200 text-gray-700 border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-none appearance-none`}
                        id="grid-last-name"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                        Email Address
                    </label>
                    <input
                        className={`block w-full bg-gray-200 text-gray-700 border ${errors.emailId ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-none appearance-none`}
                        id="grid-email"
                        type="email"
                        name="emailId"
                        value={formData.emailId}
                        onChange={handleChange}
                        placeholder="********@*****.**"
                    />
                    {errors.emailId && <p className="text-red-500 text-xs italic">{errors.emailId}</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                        Your Message
                    </label>
                    <textarea
                        rows="10"
                        className={`block w-full bg-gray-200 text-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:bg-white focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-none appearance-none`}
                        id="grid-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
                </div>
                <div className="flex justify-end w-full px-3">
                    <button
                        className="shadow bg-green-550 hover:bg-green-550 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactUSForm;
