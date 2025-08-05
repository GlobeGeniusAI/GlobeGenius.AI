"use client";

import DestinationDates from "./landing-components/DestinationDates";
import Hero from "./landing-components/Hero";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* FAKE NAVBAR DELETE THIS BEFORE PR */}
      <div className="bg-gray-500 h-20"></div>

      <Hero />
      <DestinationDates />

      <div className="text-4xl font-bold text-[#ff6f61]">
        <h1>Heres what we Have to Offer</h1>
      </div>
    </div>
  );
}
