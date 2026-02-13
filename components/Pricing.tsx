import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-6 bg-[#F9F9F9] border-t border-gray-200">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="heading-lg mb-4">Transparent Pricing</h2>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        No hidden fees. No recurring subscriptions. Just one intensive session to build your edge.
                    </p>
                </div>

                <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="p-10 text-center border-b border-gray-100">
                        <p className="text-sm uppercase tracking-widest text-muted font-bold mb-4">Single Session</p>
                        <h3 className="text-6xl font-bold text-black tracking-tight mb-2">₹9,000</h3>
                        <p className="text-muted">One-time payment</p>
                    </div>

                    <div className="p-10 bg-gray-50/50">
                        <ul className="space-y-4 mb-10 text-left">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">✔</span>
                                <span className="text-gray-700 font-medium">Full System Audit (60 Minutes)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">✔</span>
                                <span className="text-gray-700 font-medium">Custom Risk Parameter Setup</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">✔</span>
                                <span className="text-gray-700 font-medium">Execution Logic Framework</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3">✔</span>
                                <span className="text-gray-700 font-medium">Post-Session Data Export</span>
                            </li>
                        </ul>

                        <div className="text-center">
                            <Link
                                href="mailto:contact@gauravkhona.com?subject=Direct Market Intelligence Inquiry"
                                className="button-primary w-full text-lg py-4 shadow-blue-500/20"
                            >
                                Secure Your Slot
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <p className="mt-4 text-xs text-muted">
                                Limited availability. Non-refundable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
