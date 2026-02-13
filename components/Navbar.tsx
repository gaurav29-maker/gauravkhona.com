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
                    <Link href="#apps" className="hover:text-blue-600 transition-colors">
                        Apps
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

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-xl py-4 px-6 flex flex-col gap-4 text-sm font-medium text-gray-600">
                    <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>Orders</Link>
                    <Link href="#holdings" onClick={() => setIsMenuOpen(false)}>Holdings</Link>
                    <Link href="#positions" onClick={() => setIsMenuOpen(false)}>Positions</Link>
                    <Link href="#funds" onClick={() => setIsMenuOpen(false)}>Funds</Link>
                </div>
            )}
        </nav>
    );
}
