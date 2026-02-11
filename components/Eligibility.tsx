import { ShieldCheck } from "lucide-react";

export default function Eligibility() {
    return (
        <section className="py-24 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <div className="bg-accent/5 p-8 md:p-12 rounded-lg">
                    <div className="flex justify-center mb-4">
                        <ShieldCheck className="h-12 w-12 text-accent" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl font-semibold mb-4 text-accent uppercase tracking-wide">
                        Eligibility Requirement
                    </h2>
                    <p className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Minimum trading capital of <span className="text-accent">₹10,00,000</span>
                    </p>
                    <p className="text-lg text-muted/90 max-w-2xl mx-auto leading-relaxed">
                        This ensures meaningful discussion around risk, position sizing, and capital protection. This is a qualification requirement, not a profit claim.
                    </p>
                </div>
            </div>
        </section>
    );
}
