"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Success() {
    return (
        <main className="min-h-screen bg-[#F9F9F9] flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-lg w-full border border-gray-200">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-[#10B981]" />
                </div>

                <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">ORDER EXECUTED</h1>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    Your seat for the <strong>System Architecture Session</strong> has been confirmed.
                    <br />
                    We have sent a calendar invite to your email.
                </p>

                <div className="bg-gray-50 p-6 rounded border border-gray-100 mb-8 text-left text-sm font-mono text-gray-600 space-y-3">
                    <div className="flex justify-between">
                        <span>Status</span>
                        <span className="text-[#10B981] font-bold">FILLED</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Instrument</span>
                        <span className="font-bold">GKHONA.EXEC</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Quantity</span>
                        <span className="font-bold">1 SESSION</span>
                    </div>
                </div>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
                >
                    <ArrowRight className="w-4 h-4" />
                    Return to Console
                </Link>
            </div>
        </main>
    );
}
