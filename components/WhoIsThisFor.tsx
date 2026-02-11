import { Check, X } from "lucide-react";

export default function WhoIsThisFor() {
    return (
        <section className="py-24 px-6 bg-white/50 text-center">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    {/* Left: Who it is for */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-foreground">
                            For traders who
                        </h3>
                        <ul className="space-y-6 inline-block text-left">
                            {[
                                "Want structure, not signals",
                                "Are serious about consistency",
                                "Care about process over outcomes"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <Check className="h-6 w-6 text-accent-green mr-4 shrink-0" strokeWidth={1.5} />
                                    <span className="text-lg text-muted">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Who it is NOT for */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-muted">
                            This is <span className="text-red-800/80">not</span> for
                        </h3>
                        <ul className="space-y-6 inline-block text-left">
                            {[
                                "Tip seekers",
                                "Guaranteed return expectations",
                                "Casual or experimental traders"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start opacity-70">
                                    <X className="h-6 w-6 text-red-500 mr-4 shrink-0" strokeWidth={1.5} />
                                    <span className="text-lg text-muted">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
