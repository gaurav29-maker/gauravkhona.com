"use client";

import Link from "next/link";
import { User, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-16 flex items-center shadow-sm">
            <div className="container-custom flex items-center justify-between w-full">
                {/* Logo Area */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-sm tracking-tighter group-hover:bg-blue-700 transition-colors">
                            GK
                        </div>
                        <span className="font-bold text-lg tracking-tight text-gray-800">
                            console
                        </span>
                    </Link>
                    <span className="hidden md:inline-block text-gray-300 mx-2">|</span>
                    <span className="hidden md:inline-block text-sm text-gray-500 font-medium">
                        Market Intelligence
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <Link href="#pricing" className="hover:text-blue-600 transition-colors">
                        Orders
                    </Link>
                    <Link href="#holdings" className="hover:text-blue-600 transition-colors">
                        Holdings
                    </Link>
                    <Link href="#positions" className="hover:text-blue-600 transition-colors">
                        Positions
                    </Link>
                    <Link href="#funds" className="hover:text-blue-600 transition-colors">
                        Funds
                    </Link>


                    <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-200">
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                            <span className="text-xs font-bold">GK</span>
                        </div>
                        <span className="text-xs text-gray-400">Y0U123</span>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
                    <div
                        className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-2xl p-6 flex flex-col gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                            <span className="font-bold text-lg text-gray-800">Menu</span>
                            <button onClick={() => setIsMenuOpen(false)} className="text-gray-500 hover:text-red-500 p-2">
                                <span className="text-2xl font-light">&times;</span>
                            </button>
                        </div>

                        <div className="flex flex-col gap-4 text-sm font-medium text-gray-600">
                            <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-blue-600 border-b border-gray-50">Orders</Link>
                            <Link href="#holdings" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-blue-600 border-b border-gray-50">Holdings</Link>
                            <Link href="#positions" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-blue-600 border-b border-gray-50">Positions</Link>
                            <Link href="#funds" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-blue-600 border-b border-gray-50">Funds</Link>

                        </div>

                        <div className="mt-auto pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                                    <span className="font-bold">GK</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-800">Gaurav Khona</p>
                                    <p className="text-xs text-gray-400">Y0U123</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
