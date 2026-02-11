import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
            {/* Minimal background detail like SpaceX */}
            <div className="absolute inset-0 bg-[#000000]" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <p className="text-technical mb-8 animate-fade-in">
                    System Architecture // Phase 01
                </p>

                <h1 className="heading-xl mb-8">
                    Direct Market <br /> Intelligence
                </h1>

                <p className="text-xl md:text-2xl text-muted font-light max-w-2xl mx-auto leading-relaxed mb-12 tracking-tight">
                    High-Resolution 1-on-1 private trading engineering. <br className="hidden md:block" />
                    Focus on execution logic and systemic risk.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#pricing"
                        className="button-primary group"
                    >
                        Initiate Session
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="#what-we-cover"
                        className="button-secondary"
                    >
                        View Framework
                    </Link>
                </div>
            </div>

            {/* Subtle scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-technical opacity-30">
                Scroll to Explore
            </div>
        </section>
    );
}
