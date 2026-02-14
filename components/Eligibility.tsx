import { ShieldCheck } from "lucide-react";

export default function Eligibility() {
    return (
        <section id="funds" className="py-32 px-6 border-technical bg-[#050505]">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 mb-8">
                    <ShieldCheck className="h-8 w-8 text-white" strokeWidth={1} />
                </div>

                <p className="text-technical mb-6">Validation Protocol</p>

                <h2 className="heading-lg mb-8">Intake Criteria</h2>

                <div className="bg-[#0A0A0A] border border-border p-12 relative overflow-hidden group">
                    {/* Subtle aesthetic lines like xAI */}
                    <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-muted opacity-20 hidden md:block">
                        SEC_LOCK // 0101
                    </div>

                    <p className="text-xl md:text-2xl font-light text-muted mb-4 uppercase tracking-widest">
                        Minimum Capital
                    </p>

                    <p className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        ₹1,000,000+
                    </p>

                    <p className="text-sm md:text-base text-muted max-w-2xl mx-auto leading-relaxed italic">
                        "Qualification ensures meaningful discussion around risk frameworks, allocation efficiency, and systemic capital protection."
                    </p>
                </div>

                <p className="mt-12 text-technical opacity-50">
                    Non-Negotiable Qualification Requirement
                </p>
            </div>
        </section>
    );
}
