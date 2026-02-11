export default function WhatYouWillLearn() {
    const items = [
        "Trade selection logic",
        "Entry & exit structuring",
        "Risk management frameworks",
        "Position sizing concepts",
        "Drawdown handling",
        "Emotional discipline",
    ];

    return (
        <section className="py-24 px-6 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-foreground">
                    What we will cover
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center justify-center group cursor-default p-2 rounded-lg transition-colors hover:bg-accent/5">
                            {/* Minimal bullet or icon could be here, but spec says "minimal or none". 
                   Using a simple dash or just text. */}
                            <span className="text-accent mr-4 h-1.5 w-1.5 rounded-full bg-accent shrink-0 block transition-transform duration-300 group-hover:scale-150" />
                            <h3 className="text-xl text-foreground/90 font-medium group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 text-left">
                                {item}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
