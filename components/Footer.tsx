export default function Footer() {
    return (
        <footer className="py-24 px-6 border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6">
                        <p className="text-gray-900 uppercase font-black text-lg tracking-tight">
                            Gaurav Khona <span className="text-gray-300 mx-2">|</span> Console
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-medium">
                            Systemic architecture for capital markets. <br />
                            Private engineering for high-conviction execution.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Compliance & Risk</p>
                            <p className="text-[11px] text-gray-400 leading-relaxed text-justify">
                                <strong>DISCLAIMER:</strong> This platform and the educational sessions provided herein are for informational and improved execution logic purposes only.
                                They do not constitute financial advice, investment recommendations, or an offer to buy/sell any securities.
                                Trading in derivatives and equities involves a substantial risk of loss and is not suitable for all investors.
                                Gaurav Khona is not a SEBI-registered Research Analyst or Investment Advisor.
                                All systems discussed are theoretical frameworks for risk management.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-gray-100 gap-4">
                            <p className="text-[10px] text-gray-400 font-mono">
                                © {new Date().getFullYear()} GAURAV KHONA SYSTEMS // V 2.4.0
                            </p>
                            <div className="flex gap-6 text-[10px] text-gray-400 font-mono">
                                <span className="text-[#10B981] font-bold">● SYSTEM: OPERATIONAL</span>
                                <span>BUILD: KITE_ARCH_24</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
