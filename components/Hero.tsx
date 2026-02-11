import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6">
                    1-on-1 <br className="hidden md:block" />
                    Trading Session
                </h1>

                <p className="text-xl md:text-2xl text-muted font-medium mb-8">
                    Focused. Structured. Noise-Free.
                </p>

                <p className="text-lg text-muted/80 max-w-xl mx-auto leading-relaxed mb-10">
                    A private, educational trading session designed for serious traders who want clarity in execution, risk management, and decision-making.
                </p>

                <div className="flex flex-col items-center gap-4 mb-6">
                    <Link
                        href="#pricing"
                        className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-black hover:bg-black/80 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Book a Session
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-sm text-muted">
                        ₹9,000 per session <span className="mx-2">|</span> Limited availability
                    </span>
                </div>
            </div>
        </section>
    );
}
