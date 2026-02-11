export default function SessionDetails() {
    const details = [
        { label: "Format", value: "1-on-1 Private Session" },
        { label: "Mode", value: "Online (Zoom/Meet)" },
        { label: "Duration", value: "Market-focused full session" },
        { label: "Availability", value: "Limited slots per week" },
    ];

    return (
        <section className="py-24 px-6 bg-white/50 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-foreground">
                    Session Details
                </h2>

                <div className="space-y-8">
                    {details.map((detail, index) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:items-baseline justify-center border-b border-muted/10 pb-6 last:border-0 text-lg">
                            <span className="font-semibold text-foreground w-32 shrink-0 mb-1 sm:mb-0 text-center sm:text-right sm:mr-4">
                                {detail.label}
                            </span>
                            <span className="text-muted text-center sm:text-left">
                                {detail.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
