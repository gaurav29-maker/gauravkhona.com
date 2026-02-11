import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-48 px-6 bg-black border-technical">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-technical mb-10">Commitment // Access Value</p>

                <div className="mb-16">
                    <h2 className="text-8xl md:text-[12rem] font-bold text-white tracking-tighter leading-none mb-4">
                        ₹9,000
                    </h2>
                    <p className="text-technical text-white tracking-[0.2em]">
                        Single Technical Session
                    </p>
                </div>

                <div className="flex flex-col items-center gap-12">
                    <Link
                        href="https://calendly.com/" // User to update
                        className="button-primary px-16 py-5 text-xl"
                    >
                        Secure Access
                        <ArrowRight className="ml-3 h-6 w-6" />
                    </Link>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl border-technical pt-12">
                        <div>
                            <p className="text-technical mb-2 opacity-50">Availability</p>
                            <p className="text-white font-medium">Extremely Limited</p>
                        </div>
                        <div>
                            <p className="text-technical mb-2 opacity-50">Policy</p>
                            <p className="text-white font-medium">Non-Refundable</p>
                        </div>
                        <div>
                            <p className="text-technical mb-2 opacity-50">Focus</p>
                            <p className="text-white font-medium">100% Technical</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
