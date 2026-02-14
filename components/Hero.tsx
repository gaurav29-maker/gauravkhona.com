"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-white">

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text & Context */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-left"
                >
                    <div className="border-l-4 border-blue-500 pl-6 py-2 mb-8">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                            Console &gt; Portfolio &gt; Executive
                        </p>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tight leading-tight">
                            Direct Market <br /> Intelligence
                        </h1>
                    </div>

                    <div className="pl-7 max-w-2xl">
                        <div className="flex gap-12 mb-8 text-sm text-gray-600">
                            <div>
                                <p className="text-xs text-gray-400 uppercase">Instrument</p>
                                <p className="font-bold text-gray-800 text-lg">SYSTEM.ARCH</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase">LTP</p>
                                <p className="font-bold text-green-600 text-lg">1:1.00</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase">Change</p>
                                <p className="font-bold text-gray-800 text-lg">0.00%</p>
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 font-medium leading-relaxed mb-8">
                            Institutional-grade execution logic. <br />
                            <span className="text-gray-500 font-normal">Private technical build for serious capital allocators.</span>
                        </p>

                        <div className="flex items-center gap-4">
                            <Link
                                href="#pricing"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-sm text-sm transition-colors shadow-sm uppercase tracking-wide"
                            >
                                Place Order
                            </Link>
                            <Link
                                href="#what-we-cover"
                                className="text-blue-600 font-bold text-sm hover:underline px-4 uppercase tracking-wide"
                            >
                                View Analytics
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Market Depth (Level 2) Widget */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden lg:block"
                >
                    <div className="bg-white rounded shadow-lg border border-gray-200 overflow-hidden max-w-md mx-auto font-mono text-xs">
                        {/* Header */}
                        <div className="bg-blue-50 px-4 py-2 border-b border-blue-100 flex justify-between items-center">
                            <span className="font-bold text-blue-800">Market Depth</span>
                            <span className="text-[#10B981] animate-pulse">● Live</span>
                        </div>

                        {/* Depth Table */}
                        <div className="grid grid-cols-2">
                            {/* BIDS (Buy Orders) */}
                            <div className="border-r border-gray-100">
                                <div className="grid grid-cols-3 bg-gray-50 text-gray-500 px-2 py-1 text-[10px] uppercase font-bold">
                                    <span>Bid</span>
                                    <span className="text-center">Orders</span>
                                    <span className="text-right">Qty</span>
                                </div>
                                <div className="text-blue-600">
                                    <div className="grid grid-cols-3 px-2 py-1 hover:bg-blue-50 cursor-pointer">
                                        <span>9000.00</span>
                                        <span className="text-center">2</span>
                                        <span className="text-right font-bold">1</span>
                                    </div>
                                    <div className="grid grid-cols-3 px-2 py-1 hover:bg-blue-50 cursor-pointer">
                                        <span>8995.00</span>
                                        <span className="text-center">1</span>
                                        <span className="text-right">5</span>
                                    </div>
                                    <div className="grid grid-cols-3 px-2 py-1 hover:bg-blue-50 cursor-pointer">
                                        <span>8990.00</span>
                                        <span className="text-center">4</span>
                                        <span className="text-right">10</span>
                                    </div>
                                    <div className="grid grid-cols-3 px-2 py-1 hover:bg-blue-50 cursor-pointer">
                                        <span>8980.00</span>
                                        <span className="text-center">1</span>
                                        <span className="text-right">25</span>
                                    </div>
                                    <div className="grid grid-cols-3 px-2 py-1 hover:bg-blue-50 cursor-pointer text-gray-400">
                                        <span>Total</span>
                                        <span className="text-center"></span>
                                        <span className="text-right">41</span>
                                    </div>
                                </div>
                            </div>

                            {/* OFFERS (Sell Orders) */}
                            <div>
                                <div className="grid grid-cols-3 bg-gray-50 text-gray-500 px-2 py-1 text-[10px] uppercase font-bold">
                                    <span>Offer</span>
                                    <span className="text-center">Orders</span>
                                    <span className="text-right">Qty</span>
                                </div>
                                <div className="text-red-500">
                                    <div className="grid grid-cols-3 px-2 py-1 hover:bg-red-50 cursor-pointer">
                                        <span>0.00</span>
                                        <span className="text-center">0</span>
                                        <span className="text-right font-bold">0</span>
                                    </div>
                                    <div className="grid grid-cols-3 px-2 py-1 hover:bg-red-50 cursor-pointer text-gray-300">
                                        <span>-</span>
                                        <span className="text-center">-</span>
                                        <span className="text-right">-</span>
                                    </div>
                                    <div className="grid grid-cols-3 px-2 py-1 hover:bg-red-50 cursor-pointer text-gray-300">
                                        <span>-</span>
                                        <span className="text-center">-</span>
                                        <span className="text-right">-</span>
                                    </div>
                                    <div className="grid grid-cols-3 px-2 py-1 hover:bg-red-50 cursor-pointer text-gray-300">
                                        <span>-</span>
                                        <span className="text-center">-</span>
                                        <span className="text-right">-</span>
                                    </div>
                                    <div className="grid grid-cols-3 px-2 py-1 hover:bg-red-50 cursor-pointer text-gray-400">
                                        <span>Total</span>
                                        <span className="text-center"></span>
                                        <span className="text-right">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer / Context */}
                        <div className="bg-gray-50 px-4 py-3 text-[10px] text-gray-500 border-t border-gray-200 text-center">
                            <span className="block font-bold mb-1">SESSION STATUS: OPEN</span>
                            <span className="block opacity-75">Limited Supply. Demand High.</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Clean, friendly illustration placeholder or simple geometric shape could go here */}
            {/* For now, just whitespace */}
        </section>
    );
}
