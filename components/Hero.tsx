import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-white">

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className="heading-xl mb-6 text-black tracking-tight">
                        Direct Market <br /> Intelligence
                    </h1>

                    <p className="text-xl md:text-2xl text-muted font-normal max-w-2xl mx-auto leading-relaxed mb-10">
                        Institutional-grade trading engineering for serious individuals. <br className="hidden md:block" />
                        Master execution logic and systemic risk.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link
                        href="#pricing"
                        className="button-primary"
                    >
                        Initiate Session
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                        href="#what-we-cover"
                        className="button-secondary"
                    >
                        Explore the Framework
                    </Link>
                </motion.div>
            </div>

            {/* Clean, friendly illustration placeholder or simple geometric shape could go here */}
            {/* For now, just whitespace */}
        </section>
    );
}
