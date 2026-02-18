"use client";

import { ArrowUpRight } from "lucide-react";

export default function Holdings() {
    const holdings = [
        { id: "01", instrument: "TRADE.SELECTION", qty: "100%", avg: "Analysis", ltp: "High Prob.", pl: "+82.5%" },
        { id: "02", instrument: "EXECUTION.ARCH", qty: "100%", avg: "Precision", ltp: "Zero Slip", pl: "+41.2%" },
        { id: "03", instrument: "RISK.FRAMEWORK", qty: "100%", avg: "Protection", ltp: "Capital Safe", pl: "+12.4%" },
        { id: "04", instrument: "ALLOCATION.SYS", qty: "100%", avg: "Sizing", ltp: "Dynamic", pl: "+33.8%" },
        { id: "05", instrument: "DRAWDOWN.PROTO", qty: "100%", avg: "Safety", ltp: "Stability", pl: "+15.0%" },
        { id: "06", instrument: "PSYCHOLOGY.NEU", qty: "100%", avg: "Mindset", ltp: "Clarity", pl: "+99.9%" },
    ];

    return (
        <section id="holdings" className="py-24 px-4 bg-white flex flex-col items-center">
            <div className="max-w-5xl w-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xl font-medium text-gray-800">Holdings <span className="text-gray-400 text-sm font-normal">({holdings.length})</span></h2>
                </div>

                {/* Table Layout */}
                <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden text-sm">
                    {/* Mobile View (List) */}
                    <div className="md:hidden">
                        {holdings.map((stock) => (
                            <div key={stock.id} className="flex justify-between items-center py-4 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <div>
                                    <span className="font-bold text-gray-800 block text-sm">{stock.instrument}</span>
                                    <span className="text-xs text-gray-500 mt-1 block">{stock.ltp}</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-[#10B981] font-bold text-sm">{stock.pl}</div>
                                    <span className="text-[10px] text-gray-400 uppercase">Return</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop View (Grid) */}
                    <div className="hidden md:grid grid-cols-6 bg-gray-50 text-gray-500 py-3 px-4 font-medium text-xs uppercase border-b border-gray-200">
                        <div className="col-span-1">Instrument</div>
                        <div className="text-right">Qty.</div>
                        <div className="text-right">Avg. Cost</div>
                        <div className="text-right">LTP</div>
                        <div className="text-right">Cur. Val</div>
                        <div className="text-right">P&L</div>
                    </div>

                    <div className="hidden md:block">
                        {holdings.map((stock) => (
                            <div key={stock.id} className="grid grid-cols-6 py-4 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors items-center">
                                <div className="col-span-1">
                                    <span className="font-semibold text-gray-700 block text-base cursor-pointer hover:text-blue-600 transition-colors">{stock.instrument}</span>
                                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Invested</span>
                                </div>
                                <div className="text-right text-gray-600">{stock.qty}</div>
                                <div className="text-right text-gray-600">{stock.avg}</div>
                                <div className="text-right text-gray-800 font-medium">{stock.ltp}</div>
                                <div className="text-right text-gray-800 font-medium">--</div>
                                <div className="text-right text-[#10B981] font-medium flex items-center justify-end gap-1">
                                    {stock.pl}
                                    <span className="text-[10px]">▲</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total Row */}
                    <div className="bg-gray-50 grid grid-cols-4 md:grid-cols-6 py-4 px-4 border-t border-gray-200">
                        <div className="col-span-2 md:col-span-1 font-bold text-gray-600">Total</div>
                        <div className="hidden md:block text-right"></div>
                        <div className="hidden md:block text-right"></div>
                        <div className="hidden md:block text-right"></div>
                        <div className="col-span-1 md:col-span-1 text-right col-start-4 md:col-start-6 font-bold text-[#10B981] text-lg flex items-center justify-end">
                            +285.8% <ArrowUpRight className="w-5 h-5 ml-1" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-400">
                        * P&L represents the potential Return on Investment from mastering these systems.
                    </p>
                </div>
            </div>
        </section>
    );
}
