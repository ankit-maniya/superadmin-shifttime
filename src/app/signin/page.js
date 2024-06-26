'use client'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

import Wrapper from '../../components/Wrapper'
import UserService from '@/lib/Services/user.service';
import Utils from '@/lib/Utils';
import Link from 'next/link';

export default function SignIn() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    clientId: '',
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
        const data = await UserService.login(formData);
        if(data?.response)
          Utils.setLocalStorage('currUser', JSON.stringify(data?.response));
          router.push('/');
        
        toast.success("Sign in successfully!");
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

    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (data.password.length < 6) {
      errors.password = 'Password should be at least 6 characters';
    }

    if (data.clientId.length < 3) {
      errors.clientId = 'Client Id Required!';
    }

    return errors;
  };

  return (
    <Wrapper>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl sm:text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
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

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-green-550 hover:text-green-600">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-550 sm:text-sm sm:leading-6 ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="clientId" className="block text-sm font-medium leading-6 text-gray-900">
              clientId
            </label>
            <div className="mt-2">
              <input
                id="clientId"
                name="clientId"
                type="number"
                autoComplete="clientId"
                required
                value={formData.clientId}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-550 sm:text-sm sm:leading-6 ${errors.clientId ? 'border-red-500' : ''}`}
              />
              {errors.clientId && <p className="text-red-500 text-sm mt-1">{errors.clientId}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-550 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="/signup" className="font-semibold leading-6 text-green-550 hover:text-green-600">
            Start a 6 months free trial
          </a>
        </p>
        <p className="mt-3 text-center text-sm text-gray-500">
          <Link href="/superadmin" className="font-semibold leading-6 text-indigo-500 hover:text-indigo-600">
            Login As Admin
          </Link>
        </p>
      </div>
    </Wrapper>
  );
}
