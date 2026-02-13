"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-white">

            <div className="relative z-10 max-w-5xl mx-auto text-left w-full">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="border-l-4 border-blue-500 pl-6 py-2"
                >
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Console &gt; Portfolio &gt; Executive
                    </p>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tight leading-tight">
                        Direct Market <br /> Intelligence
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mt-8 pl-7 max-w-2xl"
                >
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
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded text-sm transition-colors shadow-sm"
                        >
                            Place Order
                        </Link>
                        <Link
                            href="#what-we-cover"
                            className="text-blue-600 font-bold text-sm hover:underline"
                        >
                            View Analytics
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Clean, friendly illustration placeholder or simple geometric shape could go here */}
            {/* For now, just whitespace */}
        </section>
    );
}
