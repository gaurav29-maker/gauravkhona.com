import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1-on-1 Trading Session | Premium Education",
  description: "A private, educational trading session designed for serious traders who want clarity in execution, risk management, and decision-making.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-[#F8F9FA] text-[#111111]`}
      >
        {children}
      </body>
    </html>
  );
}
