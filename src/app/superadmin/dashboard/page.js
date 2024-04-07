"use client"

import DashboardCards from '@/components/DashboardCard'
import AdminWrapper from '@/components/AdminWrapper'

export default function Dashboard() {
    return (
        <AdminWrapper>
            <h2 className="text-center text-2xl sm:text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Hello Super Admin
            </h2>
            <div className='mt-4'>
                <DashboardCards />
            </div>
        </AdminWrapper>

    )
}
