"use client";

import Link from "next/link";
import { Info, RefreshCw } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
    const [price] = useState("9000.00");
    const [qty] = useState("1");

    return (
        <section id="pricing" className="py-24 px-4 bg-[#F9F9F9] flex items-center justify-center min-h-[80vh]">
            {/* Kite Order Window Container */}
            <div className="w-full max-w-lg bg-white rounded-lg shadow-xl overflow-hidden font-sans border border-gray-200">

                {/* Header: Buy Blue */}
                <div className="bg-[#4184F3] text-white px-6 py-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold tracking-wide">Buy GKHONA 26 FEB FUT</h2>
                        <p className="text-xs text-blue-100 mt-0.5">NSE &bull; ₹ 9,000.00</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs bg-blue-600 px-2 py-1 rounded">NFO</span>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6">
                    {/* Tabs */}
                    <div className="flex items-center gap-4 mb-8 text-sm">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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
                    <div className="flex items-center gap-4 mb-8 text-sm opacity-50 pointer-events-none">
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
                        <Link
                            href="mailto:contact@gauravkhona.com?subject=BUY GKHONA 26 FEB FUT - Order Request"
                            className="px-8 py-2 bg-[#4184F3] text-white text-sm font-semibold rounded hover:bg-blue-600 transition-colors shadow-sm"
                        >
                            Buy
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
