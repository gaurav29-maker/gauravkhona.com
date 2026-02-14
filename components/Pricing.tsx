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

    const generateMailto = () => {
        const subject = `AUDIT SUBMISSION: ${answers.experience} | ${answers.capital}`;
        const body = `SYSTEM AUDIT REQUEST\n\nEXPERIENCE: ${answers.experience}\nCAPITAL: ${answers.capital}\nSTRUGGLE: ${answers.struggle}\n\n--\nGenerated via Console`;
        return `mailto:contact@gauravkhona.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="pricing" className="py-24 px-4 bg-[#F9F9F9] flex items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-xl overflow-hidden font-sans border border-gray-200">

                {/* Header changes based on View */}
                <div className={`${view === 'quiz' ? 'bg-gray-900' : 'bg-[#4184F3]'} text-white px-6 py-4 flex items-center justify-between transition-colors duration-300`}>
                    <div>
                        <h2 className="text-lg font-semibold tracking-wide">
                            {view === 'order' ? 'Buy GKHONA 26 FEB FUT' : `SYSTEM AUDIT // STEP 0${step + 1}`}
                        </h2>
                        <p className={`text-xs mt-0.5 ${view === 'quiz' ? 'text-gray-400 font-mono' : 'text-blue-100'}`}>
                            {view === 'order' ? 'NSE • ₹ 9,000.00' : 'QUALIFICATION PROTOCOL'}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded ${view === 'quiz' ? 'bg-gray-800 text-gray-300' : 'bg-blue-600 text-white'}`}>
                            {view === 'order' ? 'NFO' : 'REQ'}
                        </span>
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-6 min-h-[400px] flex flex-col relative bg-white">
                    {view === 'order' ? (
                        /* --- ORDER WINDOW VIEW --- */
                        <>
                            {/* Tabs */}
                            <div className="flex items-center gap-6 mb-8 text-sm">
                                <div className="flex items-center gap-2 group cursor-pointer">
                                    <input type="radio" name="product" id="mis" className="w-4 h-4 accent-[#4184F3] cursor-pointer" />
                                    <label htmlFor="mis" className="text-gray-500 group-hover:text-gray-800 cursor-pointer transition-colors">
                                        Intraday <span className="text-[10px] bg-gray-100 text-gray-500 px-1 rounded ml-1">MIS</span>
                                    </label>
                                </div>
                                <div className="flex items-center gap-2 group cursor-pointer">
                                    <input type="radio" name="product" id="cnc" className="w-4 h-4 accent-[#4184F3] cursor-pointer" defaultChecked />
                                    <label htmlFor="cnc" className="text-gray-800 font-bold cursor-pointer">
                                        Longterm <span className="text-[10px] bg-gray-100 text-gray-500 px-1 rounded ml-1">CNC</span>
                                    </label>
                                </div>
                            </div>

                            {/* Inputs */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="text-[11px] text-gray-500 uppercase font-bold tracking-wider mb-2 block">Qty.</label>
                                    <input
                                        type="number"
                                        value={qty}
                                        readOnly
                                        className="w-full border border-gray-300 rounded-sm p-2 text-gray-900 bg-white focus:outline-none focus:border-[#4184F3] focus:ring-1 focus:ring-[#4184F3] transition-all font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="text-[11px] text-gray-500 uppercase font-bold tracking-wider mb-2 block">Price</label>
                                    <input
                                        type="number"
                                        value={price}
                                        readOnly
                                        className="w-full border border-gray-300 rounded-sm p-2 text-gray-900 bg-gray-50 cursor-not-allowed font-medium"
                                    />
                                </div>
                            </div>

                            {/* Order Type Tabs (Visual only) */}
                            <div className="flex items-center gap-6 mb-auto text-sm">
                                <div className="flex items-center gap-2">
                                    <input type="radio" checked readOnly className="w-4 h-4 accent-[#4184F3]" />
                                    <label className="text-gray-800 font-medium">Market</label>
                                </div>
                                <div className="flex items-center gap-2 opacity-50">
                                    <input type="radio" disabled className="w-4 h-4" />
                                    <label className="text-gray-500">Limit</label>
                                </div>
                                <div className="flex items-center gap-2 opacity-50">
                                    <input type="radio" disabled className="w-4 h-4" />
                                    <label className="text-gray-500">SL</label>
                                </div>
                                <div className="flex items-center gap-2 opacity-50">
                                    <input type="radio" disabled className="w-4 h-4" />
                                    <label className="text-gray-500">SL-M</label>
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
                                                className="w-full text-left p-4 rounded border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all text-sm font-medium text-gray-700 flex justify-between items-center group"
                                            >
                                                {option}
                                                <span className="opacity-0 group-hover:opacity-100 text-blue-500">→</span>
                                            </button>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                /* Final Step */
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <RefreshCw className="w-8 h-8 animate-spin-slow" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Audit Complete</h3>
                                    <p className="text-sm text-gray-500 mb-8 max-w-xs mx-auto">
                                        Your profile fits the execution parameters. Proceed to submit your application directly to the desk.
                                    </p>
                                    <Link
                                        href={generateMailto()}
                                        className="inline-block w-full py-4 bg-gray-900 text-white font-bold rounded shadow-lg hover:bg-black transition-colors"
                                    >
                                        SUBMIT APPLICATION
                                    </Link>
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
                                className="bg-gray-900 h-full transition-all duration-300"
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
