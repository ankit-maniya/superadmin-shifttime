"use client"

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

import UserService from '@/lib/Services/user.service';
import { ROLES } from '@/lib/constant';
import Utils from '@/lib/Utils';
import AdminWrapper from '@/components/AdminWrapper';

export default function AddAdminPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: 'Select Gender',
        email: '',
        userName: '',
        password: 'ShiftTime',
        defaultPassword: 'ShiftTime',
        emergencyContactName: '',
        emergencyContactNumber: '',
        loginWith: 0,
        role: ROLES.ADMIN,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            // Submit form data

            try {
                const data = await UserService.signup(formData);
                if (data?.response) {
                    router.push('/superadmin/admin');
                    toast.success("Register successfully!");
                } else {
                    toast.error("Something went wrong!");
                }

            } catch (error) {
                console.log("error ----> ", error.message);
                toast.error(error?.message || "Something went wrong!");
            }
        } else {
            toast.error("Please enter valid & required value!");
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        let errors = {};

        if (!data.firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        if (!data.lastName.trim()) {
            errors.lastName = 'Last name is required';
        }

        if (data.gender === 'Select Gender') {
            errors.gender = 'Gender is required';
        }

        if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (!data.userName.trim()) {
            errors.userName = 'Username is required';
        }

        if (!data.defaultPassword.trim()) {
            errors.defaultPassword = 'Default password is required';
        }

        if (!data.emergencyContactName.trim()) {
            errors.emergencyContactName = 'Emergency contact name is required';
        }

        if (!data.emergencyContactNumber.trim()) {
            errors.emergencyContactNumber = 'Emergency contact number is required';
        } else if (!/^\d{10}$/.test(data.emergencyContactNumber.trim())) {
            errors.emergencyContactNumber = 'Emergency contact number must be 10 digits';
        }

        return errors;
    };

    return (
        <AdminWrapper>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl sm:text-3xl font-bold leading-9 tracking-tight text-gray-900">
                    Add New Account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-3xl">
                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" onSubmit={handleSubmit}>

                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                            First Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-550 sm:text-sm sm:leading-6 ${errors.firstName ? 'border-red-500' : ''}`}
                            />
                            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                        </div>
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                            Last Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-550 sm:text-sm sm:leading-6 ${errors.lastName ? 'border-red-500' : ''}`}
                            />
                            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                        </div>
                    </div>

                    {/* Gender */}
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                            Gender
                        </label>
                        <div className="mt-2">
                            <select
                                id="gender"
                                name="gender"
                                className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-550 sm:text-sm sm:leading-6 ${errors.gender ? 'border-red-500' : ''}`}
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                        </div>
                    </div>

                    {/* Email address */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-550 sm:text-sm sm:leading-6 ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="text"
                                autoComplete="current-password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-550 sm:text-sm sm:leading-6 ${errors.password ? 'border-red-500' : ''}`}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                    </div>

                    {/* Username */}
                    <div>
                        <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="userName"
                                name="userName"
                                type="text"
                                autoComplete="username"
                                required
                                value={formData.userName}
                                onChange={handleChange}
                                className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-550 sm:text-sm sm:leading-6 ${errors.userName ? 'border-red-500' : ''}`}
                            />
                            {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName}</p>}
                        </div>
                    </div>

                    {/* Default Password */}
                    <div>
                        <label htmlFor="defaultPassword" className="block text-sm font-medium leading-6 text-gray-900">
                            Default Password For Employee
                        </label>
                        <div className="mt-2">
                            <input
                                id="defaultPassword"
                                name="defaultPassword"
                                type="text"
                                autoComplete="new-password"
                                required
                                value={formData.defaultPassword}
                                onChange={handleChange}
                                className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-550 sm:text-sm sm:leading-6 ${errors.defaultPassword ? 'border-red-500' : ''}`}
                            />
                            {errors.defaultPassword && <p className="text-red-500 text-sm mt-1">{errors.defaultPassword}</p>}
                        </div>
                    </div>

                    {/* Emergency Contact Name */}
                    <div>
                        <label htmlFor="emergencyContactName" className="block text-sm font-medium leading-6 text-gray-900">
                            Emergency Contact Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="emergencyContactName"
                                name="emergencyContactName"
                                type="text"
                                autoComplete="emergency-contact-name"
                                required
                                value={formData.emergencyContactName}
                                onChange={handleChange}
                                className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-550 sm:text-sm sm:leading-6 ${errors.emergencyContactName ? 'border-red-500' : ''}`}
                            />
                            {errors.emergencyContactName && <p className="text-red-500 text-sm mt-1">{errors.emergencyContactName}</p>}
                        </div>
                    </div>

                    {/* Emergency Contact Number */}
                    <div>
                        <label htmlFor="emergencyContactNumber" className="block text-sm font-medium leading-6 text-gray-900">
                            Emergency Contact Number
                        </label>
                        <div className="mt-2">
                            <input
                                id="emergencyContactNumber"
                                name="emergencyContactNumber"
                                type="tel"
                                autoComplete="emergency-contact-number"
                                required
                                value={formData.emergencyContactNumber}
                                onChange={handleChange}
                                className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-550 sm:text-sm sm:leading-6 ${errors.emergencyContactNumber ? 'border-red-500' : ''}`}
                            />
                            {errors.emergencyContactNumber && <p className="text-red-500 text-sm mt-1">{errors.emergencyContactNumber}</p>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-green-550 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>

        </AdminWrapper>
    );
}
