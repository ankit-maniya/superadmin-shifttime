"use client"

import AdminWrapper from '@/components/AdminWrapper'
import Subscription from '@/components/Subscription'
import Link from 'next/link'

export default function SubscriptionPage() {
    const plans = [
        {
            id: 0,
            name: 'Gold',
            price: 'Free',
            features: ["Shift swapping", "Employee self-service portal", "Time off requests", "Team messaging and notifications"],
            desc: "A cost-effective solution for basic shift management needs.",
            buttonText: "Start With 6 months Free",
            class: "bg-gray-900 hover:bg-green-550"
        },
        {
            id: 1,
            name: 'Silver',
            price: '$38',
            features: ["Every Gold Features", "Manager logbook", "Labor optimization and alerts", "SSL Certificates"],
            desc: "Enhanced features for more comprehensive employee management.",
            buttonText: "Buy Pro",
            class: "bg-green-550 hover:bg-gray-900"
        },
        {
            id: 2,
            name: 'Platinum',
            price: 'Check',
            features: ["Every Silver Features", "POS integration", "Real-time sales reporting", "Multi-location staffing"],
            desc: "Premium features tailored for businesses with high-volume scheduling and management needs.",
            buttonText: "Buy Business",
            class: "bg-gray-900 hover:bg-green-550"
        },
    ]


    return (
        <AdminWrapper>
            {/* <div className='mx-auto mt-5'>
                <Link href="/updateplan" className="font-medium rounded-md bg-green-550 text-white hover:text-gray-900 px-5 py-3 items-center transition duration-150 ease-in-out">Update Plan</Link>
            </div> */}
            <h2 className="mt-4 text-center text-2xl sm:text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Subscription
            </h2>
            <Subscription plans={plans} />
        </AdminWrapper>
    )
}
