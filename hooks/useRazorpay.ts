import { useState, useEffect } from 'react';

const RAZORPAY_SCRIPT = 'https://checkout.razorpay.com/v1/checkout.js';

export default function useRazorpay() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = RAZORPAY_SCRIPT;
        script.onload = () => setIsLoaded(true);
        script.onerror = () => setIsLoaded(false);
        document.body.appendChild(script);

        return () => {
            // Optional: Cleanup script if needed, but usually we want it to persist
            document.body.removeChild(script);
        };
    }, []);

    return isLoaded;
}
