import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Gaurav Khona // Market Intelligence",
  description: "High-resolution trading engineering. 1-on-1 private sessions for serious capital allocation and risk framework design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased bg-[#F9F9F9] text-gray-800 font-sans pt-16`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
