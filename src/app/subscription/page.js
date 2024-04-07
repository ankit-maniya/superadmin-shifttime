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
    const [currUser, setCurrUser] = useState(Utils.getCurrentUser())
    const [activePlan, setActivePlan] = useState(null)

    const fetchAllPlans = async () => {
        try {
            const user = Utils.getCurrentUser();
            const res = await StripeService.getAllProducts();
            const defaultPlans = res?.response?.data || [];

            defaultPlans.reverse().push(BUSINESS_PLAN);
            setPlans(defaultPlans);
            setActivePlan(user?.activePlan?.plan?.product || "");
        } catch (error) {
            console.log(error)
        }
    }

    const updateActivePlan = async (productId) => {
        setActivePlan(productId);
    }

    const handlePlanSelection = async (plan) => {
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

        const toastLoadingId = toast.loading("We are generating checkout link for you. Please wait...")

        try {
            const stripeUri = await StripeService.addProductToCart(checkOutInfo);
            toast.update(toastLoadingId, { render: "Please fillup the payment details!", type: "success", isLoading: false });
            router.replace(stripeUri?.response?.uri);

        } catch (error) {
            console.log(error);
            toast.update(toastLoadingId, { render: "Service is not available. Please try again later!", type: "error", isLoading: false });
        }
    }

    const updateCurrUserDetails = async () => {
        const localCurrUser = Utils.getCurrentUser();
        if (!localCurrUser) return;
        const latestUserInfo = await StripeService.getCurrentActivePlanOfCustomer(localCurrUser?.user?._id);

        if (latestUserInfo?.response) {
            Utils.setLocalStorage('currUser', JSON.stringify(latestUserInfo?.response));
            setCurrUser(latestUserInfo?.response);
            updateActivePlan(latestUserInfo?.response?.activePlan?.plan?.product || "");
        }
    }

    const setActivePlanforUser = async () => {
        await fetchAllPlans();

        if (searchParams.get('success') == 'true') {
            toast.success("Order placed! You will receive an email confirmation.")
            updateCurrUserDetails();
        }

        if (searchParams.get('canceled') == 'true') {
            toast.error("You have\'t placed your order!")
            updateCurrUserDetails();
        }
    }

    useEffect(() => {
        if (searchParams.size < 1) {
            fetchAllPlans();
            return;
        }

        setActivePlanforUser();
    }, [searchParams])

    return (
        <AdminWrapper>
            <h2 className="mt-4 text-center text-2xl sm:text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Subscription
            </h2>
            <Subscription plans={plans} activePlan={activePlan} handlePlanSelection={handlePlanSelection} />
        </AdminWrapper>
    )
}
