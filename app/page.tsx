import Hero from "@/components/Hero";
import WhatThisIs from "@/components/WhatThisIs";
import Holdings from "@/components/Holdings";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Eligibility from "@/components/Eligibility";
import SessionDetails from "@/components/SessionDetails";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Holdings />
      <WhatThisIs />
      <WhoIsThisFor />
      <Eligibility />
      <SessionDetails />
      <Pricing />
      <Footer />
    </main>
  );
}
