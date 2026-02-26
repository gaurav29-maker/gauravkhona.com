"use client";

import { Info, RefreshCw } from "lucide-react";
import { useState } from "react";
import useRazorpay from "@/hooks/useRazorpay";
import { useRouter } from "next/navigation";
import Booking from "@/components/Booking";

export default function Pricing() {
    const [price] = useState("9000.00");
    const [qty] = useState("1");
    const [showBooking, setShowBooking] = useState(false);
    const isRazorpayLoaded = useRazorpay();
    const router = useRouter();

    const handleBookingSuccess = () => {
        setShowBooking(false);
        // Delay slightly to allow modal close animation
        setTimeout(() => {
            handlePayment();
        }, 500);
    };

    const handlePayment = async () => {
        if (!isRazorpayLoaded) {
            alert("Payment gateway is loading. Please try again in a moment.");
            return;
        }

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
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // We need to expose this safe key
                amount: order.amount,
                currency: order.currency,
                name: "Gaurav Khona",
                description: "System Audit / Strategy Session",
                order_id: order.id,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                handler: function (response: any) {
                    // 3. Handle Success
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
        <section id="pricing" className="py-12 md:py-24 px-4 bg-[#F9F9F9] flex items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-xl overflow-hidden font-sans border border-gray-200">

                {/* Header */}
                <div className="bg-[#4184F3] text-white px-6 py-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold tracking-wide">
                            Buy GKHONA 26 FEB FUT
                        </h2>
                        <p className="text-xs mt-0.5 text-blue-100">
                            NSE • ₹ 9,000.00
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded bg-blue-600 text-white">
                            NFO
                        </span>
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-4 md:p-6 flex flex-col relative bg-white">
                    {/* --- ORDER WINDOW VIEW --- */}
                    <>
                        {/* Tabs */}
                        <div className="flex items-center gap-4 mb-6 text-sm">
                            <div className="flex items-center gap-2">
                                <input type="radio" name="product" id="mis" className="accent-[#4184F3]" />
                                <label htmlFor="mis" className="text-gray-500 cursor-pointer">Intraday <span>MIS</span></label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="product" id="cnc" className="accent-[#4184F3]" defaultChecked />
                                <label htmlFor="cnc" className="text-gray-800 font-medium cursor-pointer">Longterm <span>CNC</span></label>
                            </div>
                        </div>

                        {/* Inputs */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="text-xs text-gray-400 block mb-1">Qty.</label>
                                <input
                                    type="text"
                                    value={qty}
                                    readOnly
                                    className="w-full border border-gray-300 rounded p-2 text-right text-gray-700 bg-gray-50 focus:outline-none focus:border-[#4184F3]"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400 block mb-1">Price</label>
                                <input
                                    type="text"
                                    value={price}
                                    readOnly
                                    className="w-full border border-gray-300 rounded p-2 text-right text-gray-700 bg-gray-50 focus:outline-none focus:border-[#4184F3]"
                                />
                            </div>
                        </div>

                        {/* Order Type Tabs (Visual only) */}
                        <div className="flex items-center gap-4 text-sm opacity-50 pointer-events-none mb-2">
                            <div className="flex items-center gap-2">
                                <input type="radio" checked readOnly className="accent-[#4184F3]" />
                                <label>Market</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" disabled />
                                <label>Limit</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" disabled />
                                <label>SL</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" disabled />
                                <label>SL-M</label>
                            </div>
                        </div>
                    </>
                </div>

                {/* Footer Actions */}
                <div className="bg-[#FAFAFA] px-6 py-4 flex items-center justify-between border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-blue-500">
                        <span>Margin required: ₹9,000.00</span>
                        <Info className="w-3 h-3" />
                        <RefreshCw className="w-3 h-3" />
                    </div>

                    <div className="flex gap-3">
                        <button className="px-6 py-2 text-sm font-semibold text-gray-500 hover:text-gray-700">Cancel</button>
                        <button
                            onClick={() => setShowBooking(true)}
                            className="px-8 py-2 bg-[#4184F3] text-white text-sm font-semibold rounded hover:bg-blue-600 transition-colors shadow-sm"
                        >
                            Book Session
                        </button>
                    </div>
                </div>

                {/* Booking Modal */}
                {showBooking && (
                    <Booking
                        onClose={() => setShowBooking(false)}
                        onBookingSuccess={handleBookingSuccess}
                    />
                )}
            </div>
        </section>
    );
}
