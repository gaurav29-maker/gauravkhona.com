"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { X } from "lucide-react";
import { useEffect } from "react";

interface BookingProps {
    onClose: () => void;
    onBookingSuccess: () => void;
}

export default function Booking({ onClose, onBookingSuccess }: BookingProps) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("on", {
                action: "bookingSuccessful",
                callback: (e) => {
                    console.log("Booking successful", e);
                    onBookingSuccess();
                }
            });
        })();
    }, [onBookingSuccess]);

    // Redirect Strategy: We rely on Cal.com to redirect to /checkout
    // Manual Strategy: User clicks "I Have Booked -> Pay Now" if redirect fails

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-4xl h-[80vh] rounded-xl shadow-2xl relative overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50 flex-wrap gap-2">
                    <div>
                        <h3 className="font-bold text-gray-800">Select System Audit Slot</h3>
                        <p className="text-xs text-gray-500">Step 1 of 2: Schedule Time</p>
                    </div>
                    <div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Calendar Embed */}
                <div className="flex-1 w-full overflow-hidden">
                    <Cal
                        calLink="gaurav-khona-o8ctin/systematic-trading-architecture"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{ layout: "month_view" }}
                    />
                </div>
            </div>
        </div>
    );
}
