"use client"

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { BUSINESS_PLAN } from '@/lib/constant'
import Utils from '@/lib/Utils'

import AdminWrapper from '@/components/AdminWrapper'
import Subscription from '@/components/Subscription'

import StripeService from '@/lib/Services/stripe.service'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SubscriptionPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

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

    const handlePlanSelection = async (plan) => {
        const currUser = Utils.getCurrentUser();

        if (!currUser) {
            router.push("/signin");
            toast.warning("Please login to subscribe to a plan.")
            return;
        }

        if (activePlan) {
            toast.warning("You are already subscribed to a plan. Please unsubscribe to subscribe to a new plan.");
            return;
        }


        const checkOutInfo = {
            priceId: plan.default_price.id,
            quantity: 1,
            customerId: currUser?.user?._id,
        }

        console.log(checkOutInfo);
        const toastLoadingId = toast.loading("We are generating checkout link for you. Please wait...")

        try {
            const stripeUri = await StripeService.addProductToCart(checkOutInfo);
            toast.update(toastLoadingId, { render: "Please fillup the payment details!", type: "success", isLoading: false });
            // console.log(stripeUri?.response?.uri);
            router.replace(stripeUri?.response?.uri);

        } catch (error) {
            console.log(error);
            toast.update(toastLoadingId, { render: "Service is not available. Please try again later!", type: "error", isLoading: false });
        }
    }

    const updateCurrUserDetails = async () => {
        const currUser = Utils.getCurrentUser();
        if (!currUser) return;
        const latestUserInfo = await StripeService.getCurrentActivePlanOfCustomer(currUser?.user?._id);

        if (latestUserInfo?.response)
            Utils.setLocalStorage('currUser', JSON.stringify(latestUserInfo?.response));
    }

    useEffect(() => {
        if (searchParams.get('success') == 'true') {
            toast.success("Order placed! You will receive an email confirmation.")
            updateCurrUserDetails();
        }

        if (searchParams.get('success') == 'false') {
            toast.error("Order not placed! Please try again later!")
        }

        if (searchParams.get('canceled') == 'true') {
            toast.error("You have\'t placed your order!")
            updateCurrUserDetails();
        }
    }, [searchParams])

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
            <Subscription plans={plans} activePlan={activePlan} handlePlanSelection={handlePlanSelection} />
        </AdminWrapper>
    )
}
