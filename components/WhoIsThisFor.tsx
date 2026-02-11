import { Check, X } from "lucide-react";

export default function WhoIsThisFor() {
    const targets = [
        "Seeking technical structure, not signals",
        "Prioritize process over outcome metrics",
        "Requirement for high-resolution clarity",
        "Committed to long-term systemic discipline"
    ];

    const antiTargets = [
        "Signal or tip seeker",
        "Expectation of guaranteed ROI",
        "Short-term experimental mindset",
        "Casual market participation"
    ];

    return (
        <section className="py-32 px-6 border-technical bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-border/30">
                    {/* For traders who... */}
                    <div className="bg-black p-12 md:p-20">
                        <p className="text-technical mb-8 text-white">Target Profiles</p>
                        <h3 className="heading-lg mb-12 text-3xl md:text-4xl text-white">Optimal Fit</h3>
                        <ul className="space-y-8">
                            {targets.map((item, i) => (
                                <li key={i} className="flex items-start group">
                                    <div className="h-5 w-5 rounded-none border border-white flex items-center justify-center mt-1 mr-6 shrink-0 group-hover:bg-white transition-colors">
                                        <Check className="h-3 w-3 text-transparent group-hover:text-black" strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-muted group-hover:text-white transition-colors tracking-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* This is not for... */}
                    <div className="bg-black p-12 md:p-20">
                        <p className="text-technical mb-8">Exclusion Zones</p>
                        <h3 className="heading-lg mb-12 text-3xl md:text-4xl">System Misalignment</h3>
                        <ul className="space-y-8">
                            {antiTargets.map((item, i) => (
                                <li key={i} className="flex items-start group">
                                    <div className="h-5 w-5 rounded-none border border-muted/30 flex items-center justify-center mt-1 mr-6 shrink-0">
                                        <X className="h-3 w-3 text-muted/50" strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-muted/60 tracking-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
