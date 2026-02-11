export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-muted/10">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm text-muted/60 leading-relaxed">
                    This session is strictly educational. No investment advice, tips, or guaranteed returns are provided. Trading involves risk. All decisions remain the responsibility of the participant. I am not a SEBI-registered investment advisor.
                </p>
                <p className="mt-8 text-xs text-muted/40">
                    © {new Date().getFullYear()} Gaurav Khona. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
