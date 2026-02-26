"use client";

import { useEffect, useRef } from "react";
import useRazorpay from "@/hooks/useRazorpay";
import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";

export default function Checkout() {
    const isRazorpayLoaded = useRazorpay();
    const router = useRouter();
    const hasTriggered = useRef(false);

    useEffect(() => {
        if (isRazorpayLoaded && !hasTriggered.current) {
            hasTriggered.current = true;
            handlePayment();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRazorpayLoaded]);

    const handlePayment = async () => {
        try {
            // 1. Create Order
            const response = await fetch('/api/create-order', { method: 'POST' });
            const order = await response.json();

            if (!order.id) {
                alert("Server error. Could not create order.");
                return;
            }

            // 2. Initialize Razorpay
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: "Gaurav Khona",
                description: "System Audit / Strategy Session",
                order_id: order.id,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                handler: function (response: any) {
                    console.log("Payment Successful", response);
                    router.push('/success');
                },
                prefill: {
                    name: "",
                    email: "",
                    contact: ""
                },
                theme: {
                    color: "#4184F3"
                },
                modal: {
                    ondismiss: function () {
                        // If they cancel payment, maybe go back to home or stay here?
                        // For now, staying here allows retrying by refreshing.
                        hasTriggered.current = false; // Allow retry if they dismiss
                    }
                }
            };

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const rzp = new (window as any).Razorpay(options);
            rzp.open();

        } catch (error) {
            console.error("Payment Error:", error);
            alert("Payment failed to initialize.");
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
            <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-[#4184F3] rounded-full flex items-center justify-center mx-auto mb-6">
                    <RefreshCw className="w-8 h-8 animate-spin-slow" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Processing Booking...</h2>
                <p className="text-sm text-gray-500 max-w-xs mx-auto mb-8">
                    Please wait while we secure your payment slot. Do not close this window.
                </p>
                <button
                    onClick={() => { hasTriggered.current = false; handlePayment(); }}
                    className="text-xs text-blue-500 underline hover:text-blue-700"
                >
                    Click here if payment doesn&apos;t open
                </button>
            </div>
        </main>
    );
}
