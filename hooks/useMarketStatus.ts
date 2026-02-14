"use client";

import { useState, useEffect } from "react";

export function useMarketStatus() {
    const [isOpen, setIsOpen] = useState(false);
    const [statusText, setStatusText] = useState("SYSTEM STANDBY");
    const [color, setColor] = useState("text-gray-400");

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const istString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
            const istTime = new Date(istString);

            const day = istTime.getDay(); // 0 is Sunday
            const hour = istTime.getHours();
            const minute = istTime.getMinutes();

            const totalMinutes = hour * 60 + minute;
            const marketOpen = 9 * 60 + 15; // 09:15
            const marketClose = 15 * 60 + 30; // 15:30

            const isWeekday = day >= 1 && day <= 5;
            const isActiveTime = totalMinutes >= marketOpen && totalMinutes < marketClose;

            if (isWeekday && isActiveTime) {
                setIsOpen(true);
                setStatusText("MARKET OPEN");
                setColor("text-[#10B981]"); // Emerald
            } else {
                setIsOpen(false);
                setStatusText("MARKET CLOSED");
                setColor("text-orange-500"); // Standard "Closed/Caution" color
            }
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    return { isOpen, statusText, color };
}
