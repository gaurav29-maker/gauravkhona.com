import Hero from "@/components/Hero";
import WhatThisIs from "@/components/WhatThisIs";
import Holdings from "@/components/Holdings";
import Calculator from "@/components/Calculator";
import Eligibility from "@/components/Eligibility";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Holdings />
      <Calculator />
      <WhatThisIs />
      <Eligibility />
      <Pricing />
      <Footer />
    </main>
  );
}
