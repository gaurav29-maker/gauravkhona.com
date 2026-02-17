"use client";

import Link from "next/link";
import { Info, RefreshCw } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Pricing() {
    const [price] = useState("9000.00");
    const [qty] = useState("1");

    // Quiz State
    const [view, setView] = useState<'order' | 'quiz'>('order');
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({
        experience: '',
        capital: '',
        struggle: ''
    });

    const handleAnswer = (key: string, value: string) => {
        setAnswers(prev => ({ ...prev, [key]: value }));
        // Auto-advance for single choice
        if (step < 3) {
            setTimeout(() => setStep(s => s + 1), 250);
        }
    };

    // Quiz Steps Configuration
    const steps = [
        {
            id: 'experience',
            question: 'Years Active in Markets?',
            options: ['< 1 Year', '1 - 3 Years', '3 - 5 Years', '5+ Years']
        },
        {
            id: 'capital',
            question: 'Current Capital Base?',
            options: ['< 5L', '5L - 20L', '20L - 50L', '50L+ (HNI)']
        },
        {
            id: 'struggle',
            question: 'Primary Execution Bottleneck?',
            options: ['Strategy / Edge', 'Risk Management', 'Psychology / Discipline', 'Scaling Up']
        }
    ];

    // CONFIGURATION: Replace this with your actual Stripe/Razorpay Payment Link
    const PAYMENT_LINK = "https://buy.stripe.com/test_placeholder";

    // If you want to keep the mailto as a fallback or pre-step, you can. 
    // But for direct payments, we switch to the link.
    const handlePayment = () => {
        window.location.href = PAYMENT_LINK;
    };

    return (
    return (
        <section id="pricing" className="py-12 md:py-24 px-4 bg-[#F9F9F9] flex items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-xl overflow-hidden font-sans border border-gray-200">

                {/* Header changes based on View */}
                <div className={`${view === 'quiz' ? 'bg-[#10B981]' : 'bg-[#4184F3]'} text-white px-6 py-4 flex items-center justify-between transition-colors duration-300`}>
                    <div>
                        <h2 className="text-lg font-semibold tracking-wide">
                            {view === 'order' ? 'Buy GKHONA 26 FEB FUT' : `SYSTEM AUDIT // STEP 0${step + 1}`}
                        </h2>
                        <p className={`text-xs mt-0.5 ${view === 'quiz' ? 'text-green-50 font-mono' : 'text-blue-100'}`}>
                            {view === 'order' ? 'NSE • ₹ 9,000.00' : 'QUALIFICATION PROTOCOL'}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded ${view === 'quiz' ? 'bg-[#065f46] text-green-100' : 'bg-blue-600 text-white'}`}>
                            {view === 'order' ? 'NFO' : 'REQ'}
                        </span>
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-4 md:p-6 flex flex-col relative bg-white">
                    {view === 'order' ? (
                        /* --- ORDER WINDOW VIEW --- */
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
                    ) : (
                        /* --- QUIZ VIEW --- */
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full"
                        >
                            {step < 3 ? (
                                <>
                                    <h3 className="text-xl font-bold text-gray-800 mb-6">{steps[step].question}</h3>
                                    <div className="space-y-3">
                                        {steps[step].options.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleAnswer(steps[step].id, option)}
                                                className="w-full text-left p-4 rounded border border-gray-200 hover:border-[#10B981] hover:bg-green-50 transition-all text-sm font-medium text-gray-700 flex justify-between items-center group"
                                            >
                                                {option}
                                                <span className="opacity-0 group-hover:opacity-100 text-[#10B981]">→</span>
                                            </button>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                /* Final Step */
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 text-[#10B981] rounded-full flex items-center justify-center mx-auto mb-6">
                                        <RefreshCw className="w-8 h-8 animate-spin-slow" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Audit Complete</h3>
                                    <p className="text-sm text-gray-500 mb-8 max-w-xs mx-auto">
                                        Your profile fits the execution parameters. Proceed to submit your application directly to the desk.
                                    </p>
                                    <button
                                        onClick={handlePayment}
                                        className="inline-block w-full py-4 bg-[#10B981] text-white font-bold rounded shadow-lg hover:bg-[#059669] transition-colors uppercase tracking-wide"
                                    >
                                        Proceed to Payment
                                    </button>
                                    <button
                                        onClick={() => { setView('order'); setStep(0); }}
                                        className="mt-4 text-xs text-gray-400 hover:text-gray-600 underline"
                                    >
                                        Restart Audit
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </div>

                {/* Footer Actions */}
                {view === 'order' && (
                    <div className="bg-[#FAFAFA] px-6 py-4 flex items-center justify-between border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs text-blue-500">
                            <span>Margin required: ₹9,000.00</span>
                            <Info className="w-3 h-3" />
                            <RefreshCw className="w-3 h-3" />
                        </div>

                        <div className="flex gap-3">
                            <button className="px-6 py-2 text-sm font-semibold text-gray-500 hover:text-gray-700">Cancel</button>
                            <button
                                onClick={() => setView('quiz')}
                                className="px-8 py-2 bg-[#4184F3] text-white text-sm font-semibold rounded hover:bg-blue-600 transition-colors shadow-sm"
                            >
                                Buy
                            </button>
                        </div>
                    </div>
                )}
                {/* Quiz Footer (Progress) */}
                {view === 'quiz' && step < 3 && (
                    <div className="bg-[#FAFAFA] px-6 py-4 border-t border-gray-100">
                        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                            <div
                                className="bg-[#10B981] h-full transition-all duration-300"
                                style={{ width: `${((step + 1) / 3) * 100}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between mt-2 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                            <span>Progress</span>
                            <span>{step + 1} / 3</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
