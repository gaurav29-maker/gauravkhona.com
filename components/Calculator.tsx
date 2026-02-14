"use client";

import { useState, useEffect } from "react";
import { Calculator as CalcIcon, RefreshCw } from "lucide-react";

export default function RiskCalculator() {
    const [accountSize, setAccountSize] = useState<number>(1000000);
    const [riskPerTrade, setRiskPerTrade] = useState<number>(1);
    const [stopLoss, setStopLoss] = useState<number>(50);

    // Outputs
    const [riskAmount, setRiskAmount] = useState<number>(0);
    const [positionQty, setPositionQty] = useState<number>(0);
    const [leverage, setLeverage] = useState<number>(1);

    useEffect(() => {
        const risk = (accountSize * riskPerTrade) / 100;
        setRiskAmount(risk);
        // Position Size = Risk / Stop Loss
        const qty = Math.floor(risk / stopLoss);
        setPositionQty(qty > 0 ? qty : 0);
    }, [accountSize, riskPerTrade, stopLoss]);

    return (
        <section className="py-24 px-6 bg-white border-b border-gray-100">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-8 justify-center">
                    <CalcIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Risk Protocol</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight text-center mb-12">
                    Position Sizing Calculator
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* INPUTS */}
                    <div className="space-y-6 md:space-y-8 bg-[#F9F9F9] p-6 md:p-8 rounded border border-gray-200">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Account Capital (₹)</label>
                            <input
                                type="number"
                                value={accountSize}
                                onChange={(e) => setAccountSize(Number(e.target.value))}
                                className="w-full text-2xl font-mono p-2 bg-white border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Risk Per Trade (%)</label>
                                <span className="text-xs font-mono font-bold text-blue-600">{riskPerTrade}%</span>
                            </div>
                            <input
                                type="range"
                                min="0.1"
                                max="5"
                                step="0.1"
                                value={riskPerTrade}
                                onChange={(e) => setRiskPerTrade(Number(e.target.value))}
                                className="w-full accent-blue-600 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Stop Loss (Points)</label>
                            <input
                                type="number"
                                value={stopLoss}
                                onChange={(e) => setStopLoss(Number(e.target.value))}
                                className="w-full text-2xl font-mono p-2 bg-white border-b-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors"
                            />
                        </div>
                    </div>

                    {/* OUTPUTS */}
                    <div className="bg-gray-900 text-white p-8 rounded shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <RefreshCw className="w-24 h-24 text-white" />
                        </div>

                        <div className="relative z-10 space-y-8">
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Max Risk Amount</p>
                                <p className="text-3xl font-mono text-red-400">₹{riskAmount.toLocaleString()}</p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Position Size (Qty)</p>
                                <p className="text-5xl font-mono font-bold text-[#10B981]">{positionQty}</p>
                            </div>

                            <div className="pt-8 border-t border-gray-800">
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                                    Logic: Risk ({riskPerTrade}%) ÷ Stop ({stopLoss}) = Size.
                                    <br />
                                    Always prioritize capital preservation over potential returns.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
