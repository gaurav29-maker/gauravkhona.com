export default function Footer() {
    return (
        <footer className="py-24 px-6 border-technical bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6">
                        <p className="text-technical text-white uppercase font-bold text-lg tracking-widest">
                            Gaurav Khona // Systems
                        </p>
                        <p className="text-muted text-sm leading-relaxed max-w-sm">
                            Engineering market edges through objective risk frameworks. Private institutional education for high-conviction traders.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <p className="text-technical mb-4 opacity-50">Technical Disclaimer</p>
                            <p className="text-xs text-muted/60 leading-relaxed uppercase tracking-tighter">
                                This session is strictly educational. Zero investment advice, tips, or guaranteed outcomes. Trading involves total risk. I am not a SEBI-registered advisor.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-border gap-4">
                            <p className="text-[10px] text-technical">
                                © {new Date().getFullYear()} GAURAV KHONA // V 1.0.0
                            </p>
                            <div className="flex gap-6 text-[10px] text-technical">
                                <span className="text-white">STATUS: ACTIVE</span>
                                <span>BUILD: MARKET_ENGINE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
