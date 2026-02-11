export default function SessionDetails() {
    const details = [
        { label: "Architecture", value: "1-on-1 Private Technical Build" },
        { label: "Deployment", value: "Digital Matrix (Zoom/Meet)" },
        { label: "Runtime", value: "Market-Focused Full Session" },
        { label: "Access", value: "Strict Entry Criteria Apply" },
    ];

    return (
        <section className="py-32 px-6 border-technical bg-black">
            <div className="max-w-4xl mx-auto">
                <p className="text-technical mb-12 text-center">Operational Data</p>
                <div className="grid grid-cols-1 gap-1">
                    {details.map((detail, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-baseline justify-between p-8 border border-border/50 group hover:bg-[#0A0A0A] transition-colors">
                            <span className="text-technical text-white mb-2 md:mb-0 group-hover:pl-2 transition-all">
                                [ {detail.label} ]
                            </span>
                            <span className="text-xl md:text-2xl font-bold tracking-tight text-muted group-hover:text-white transition-colors">
                                {detail.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
