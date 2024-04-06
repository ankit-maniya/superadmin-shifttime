"use client"

import { useEffect, useState } from 'react'

import AdminWrapper from '@/components/AdminWrapper'
import Subscription from '@/components/Subscription'
import StripeService from '@/lib/Services/stripe.service'
import { BUSINESS_PLAN } from '@/lib/constant'
import Utils from '@/lib/Utils'

export default function SubscriptionPage() {
    const [plans, setPlans] = useState([])
    const [activePlan, setActivePlan] = useState("")

    const fetchAllPlans = async () => {
        try {
            const res = await StripeService.getAllProducts();
            const defaultPlans = res?.response?.data || [];

            defaultPlans.reverse().push(BUSINESS_PLAN);

            const currUser = Utils.getCurrentUser();
            setActivePlan(currUser?.activePlan?.plan?.product || "");
            setPlans(defaultPlans);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllPlans()
    }, [])

    return (
        <AdminWrapper>
            {/* <div className='mx-auto mt-5'>
                <Link href="/updateplan" className="font-medium rounded-md bg-green-550 text-white hover:text-gray-900 px-5 py-3 items-center transition duration-150 ease-in-out">Update Plan</Link>
            </div> */}
            <h2 className="mt-4 text-center text-2xl sm:text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Subscription
            </h2>
            <Subscription plans={plans} activePlan={activePlan}/>
        </AdminWrapper>
    )
}
