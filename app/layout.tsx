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
  title: "Gaurav Khona | Systematic Trading Architecture",
  description: "Institutional-grade technical mentorship for serious capital allocators. Master execution logic, risk frameworks, and systemic design.",
  openGraph: {
    title: "Gaurav Khona | Systems",
    description: "Institutional-grade trading architecture. 1-on-1 private engineering sessions.",
    url: "https://gauravkhona.com",
    siteName: "Gaurav Khona Console",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Khona | Systems",
    description: "Institutional-grade trading architecture.",
  },
  robots: {
    index: true,
    follow: true,
  }
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
