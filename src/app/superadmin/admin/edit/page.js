'use client'

import AdminWrapper from "@/components/AdminWrapper"
import { useRouter, useParams, usePathname } from "next/navigation";


export default function EditAdminPage() {
    const router = usePathname();

    console.log(router);
    return (
        <AdminWrapper>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl sm:text-3xl font-bold leading-9 tracking-tight text-gray-900">
                    Admin Edit
                </h2>
            </div>
        </AdminWrapper>
    )
}