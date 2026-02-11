import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-6 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                    ₹9,000
                </h2>
                <p className="text-xl text-muted mb-10">
                    Per 1-on-1 session
                </p>

                <div className="flex flex-col items-center gap-4">
                    <Link
                        href="https://calendly.com/" // Placeholder, user can update
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black hover:bg-black/80 transition-all duration-300 rounded-lg w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] group"
                    >
                        Check Availability & Book
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <p className="text-sm text-muted/70">
                        No free calls. No discounts.
                    </p>
                </div>
            </div>
        </section>
    );
}
