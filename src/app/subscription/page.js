"use client"

import AdminWrapper from '@/components/AdminWrapper'
import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import StripeService from '@/lib/Services/stripe.service';
import { useRouter } from 'next/navigation';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function SubscriptionPage() {
    const router = useRouter();
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.');
        }

        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, []);

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            const stripeUri = await StripeService.addProductToCart();
            console.log(stripeUri?.response?.uri);
            router.replace(stripeUri?.response?.uri);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AdminWrapper>
            <h2 className="mt-4 text-center text-2xl sm:text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Subscription
            </h2>
            <form onSubmit={(e) => submitForm(e)} method="POST">
                <section>
                    <button type="submit" role="link">
                        Checkout
                    </button>
                </section>
                <style jsx>
                    {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
                </style>
            </form>
        </AdminWrapper>
    )
}
