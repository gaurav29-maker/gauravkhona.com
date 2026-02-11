export default function WhatYouWillLearn() {
    const systems = [
        { id: "01", title: "Trade Selection Logic", desc: "Technical filtering and high-conviction pattern identification." },
        { id: "02", title: "Execution Architecture", desc: "Structuring entries and exits with precision logic." },
        { id: "03", title: "Risk Frameworks", desc: "Non-negotiable distribution paths and capital protection." },
        { id: "04", title: "Allocation Systems", desc: "Data-driven position sizing and dynamic scaling." },
        { id: "05", title: "Drawdown Protocol", desc: "Systemic handling of volatility and equity preservation." },
        { id: "06", title: "Cognitive Neutrality", desc: "Eliminating subjective bias from technical execution." },
    ];

    return (
        <section id="what-we-cover" className="py-32 px-6 border-technical">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <p className="text-technical mb-4">Module Overview</p>
                        <h2 className="heading-lg">System Components</h2>
                    </div>
                    <p className="text-muted max-w-md text-sm md:text-base tracking-tight">
                        Deep-dive technical sessions covering the core architecture of high-performance trading systems. No theory. Pure implementation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {systems.map((system) => (
                        <div key={system.id} className="group flex flex-col">
                            <div className="text-technical text-white mb-6 border-b border-border pb-2 inline-block w-fit">
                                // {system.id}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tighter uppercase group-hover:text-muted transition-colors">
                                {system.title}
                            </h3>
                            <p className="text-muted text-sm leading-relaxed border-l-2 border-border pl-4">
                                {system.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
