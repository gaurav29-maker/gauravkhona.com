import { CheckCircle2, XCircle, Lock, Server, Video, Activity, ShieldCheck } from "lucide-react";

export default function Eligibility() {
    const targets = [
        "You want a repeatable process, not a lottery ticket",
        "You have capital but lack execution consistency",
        "You are tired of 'guessing' trend direction",
        "You treat trading as a business, not a hobby"
    ];

    const exclusions = [
        "Looking for 'Hot Tips' or Calls",
        "Expect to double money in 30 days",
        "Can't follow simple rules",
        "Gambling mindset / 'Action' Junkie"
    ];

    return (
        <section className="py-16 md:py-24 px-6 bg-[#F9F9F9]">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
                        <ShieldCheck className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Validation Protocol</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Target Profiles</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Operational alignment is the primary determinant of long-term survival.
                    </p>
                </div>

                {/* Profiles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {/* Optimal Fit */}
                    <div className="bg-white p-6 md:p-8 rounded border border-gray-200 shadow-sm border-t-4 border-t-[#10B981]">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                            Optimal Fit
                        </h3>
                        <ul className="space-y-4">
                            {targets.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Exclusion Zones */}
                    <div className="bg-white p-6 md:p-8 rounded border border-gray-200 shadow-sm border-t-4 border-t-red-500">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            Exclusion Zones
                        </h3>
                        <ul className="space-y-4">
                            {exclusions.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span className="text-gray-600 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Intake Criteria (Minimum Capital) */}
                <div id="intake" className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden mb-20 relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Lock className="w-24 h-24 text-gray-900" />
                    </div>

                    <div className="p-12 text-center relative z-10">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                            Intake Criteria
                        </p>
                        <p className="font-mono text-[10px] text-gray-300 mb-8">SEC_LOCK // 0101</p>

                        <div className="mb-2">
                            <p className="text-lg text-gray-500 font-medium">Minimum Capital</p>
                            <p className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter my-2">
                                ₹1,000,000+
                            </p>
                        </div>

                        <p className="text-sm text-gray-500 italic max-w-2xl mx-auto mt-8 bg-gray-50 p-4 rounded border border-gray-100">
                            &quot;Qualification ensures meaningful discussion around risk frameworks, allocation efficiency, and systemic capital protection.&quot;
                        </p>
                        <p className="mt-4 text-[10px] font-bold text-red-500 uppercase tracking-wide">
                            Non-Negotiable Qualification Requirement
                        </p>
                    </div>
                </div>

                {/* Operational Data Footer */}
                <div id="operations" className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                    <div className="md:col-span-1">
                        <p className="font-bold text-gray-900 mb-2">Operational Data</p>
                        <p className="text-xs text-gray-500">System Specifications</p>
                    </div>

                    <div className="bg-white p-4 rounded border border-gray-200">
                        <div className="flex items-center gap-2 mb-2 text-blue-600">
                            <Server className="w-4 h-4" />
                            <span className="font-bold text-xs uppercase">Architecture</span>
                        </div>
                        <p className="text-gray-600 font-medium">1-on-1 Private Technical Build</p>
                    </div>

                    <div className="bg-white p-4 rounded border border-gray-200">
                        <div className="flex items-center gap-2 mb-2 text-blue-600">
                            <Video className="w-4 h-4" />
                            <span className="font-bold text-xs uppercase">Deployment</span>
                        </div>
                        <p className="text-gray-600 font-medium">Digital Matrix (Zoom/Meet)</p>
                    </div>

                    <div className="bg-white p-4 rounded border border-gray-200">
                        <div className="flex items-center gap-2 mb-2 text-blue-600">
                            <Activity className="w-4 h-4" />
                            <span className="font-bold text-xs uppercase">Runtime</span>
                        </div>
                        <p className="text-gray-600 font-medium">Market-Focused Full Session</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
