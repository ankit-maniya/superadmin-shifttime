'use client'

import AdminWrapper from "@/components/AdminWrapper";
import DeleteModal from "@/components/DeleteModel";
import UserService from "@/lib/Services/user.service";
import { ACTION } from "@/lib/constant";
import Link from "next/link"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function Admin() {
    const [admins, setAdmins] = useState([]);
    const [isOpen, handleModel] = useState(false);
    const [user, handleUser] = useState({});

    useEffect(() => {
        fetchAdmins();
    }, [])

    const fetchAdmins = async () => {
        const users = await UserService.getAllAdmin();

        setAdmins(users?.response?.docs || [])
    }

    const deleteUserInfo = async (res, id) => {
        if(res == ACTION.FALSE) {
            handleModel(false);
            return;
        }

        const response = await UserService.deleteUser(id);
        handleUser({});
        handleModel(false);
        fetchAdmins();
        toast.success("User Deleted Successfully!");
        console.log("Delete Response -- ", response);
    }

    const getEmployeeBodyData = (employee) => {

        if (employee.length < 0) {
            return (
                <tr className="text-center">
                    <td colSpan={5}>
                        <h1 className="text-red-600">No Details Found!</h1>
                    </td>
                </tr>);
        }

        return employee.map((admin, i) => {
            return (<tr key={admin._id}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {i + 1}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {admin.firstName} {admin.lastName}
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button type="button" className="rounded-md bg-indigo-500 px-1 py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{admin.role}</button>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button type="button" className="rounded-md bg-green-500 px-1 py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">{admin.clientId}</button>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Link
                        href={`/superadmin/admin/${encodeURIComponent(admin._id)}`}
                        className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">Edit</Link>
                    <Link href="#" onClick={() => {
                        handleModel(true)
                        handleUser(admin)
                    }} className="ml-1 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Delete</Link>
                </td>
            </tr>);
        })


    }

    return (
        <AdminWrapper>
            <DeleteModal isOpen={isOpen} handleModel={handleModel} deleteUserInfo={deleteUserInfo} id={user._id} />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl sm:text-3xl font-bold leading-9 tracking-tight text-gray-900">
                    Manager Details
                </h2>
            </div>
            <section className="py-1 bg-blueGray-50">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            {/* <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-blueGray-700">Admin</h3>
                            </div> */}
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                <Link href="/superadmin/admin/add" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Manager</Link>
                            </div>
                        </div>
                    </div>

                    <div className="block w-full overflow-x-auto">
                        <table className="items-center bg-transparent w-full border-collapse ">
                            <thead>
                                <tr>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        No
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Name
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Role
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Client Id
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {getEmployeeBodyData(admins)}
                            </tbody>

                        </table>
                    </div>
                </div>
            </section>
        </AdminWrapper>
    )
}