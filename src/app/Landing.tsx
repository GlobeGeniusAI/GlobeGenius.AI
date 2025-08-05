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

      <h1 className="flex justify-center mt-40 text-5xl font-bold text-[#ff6f61] font-montserrat tracking-tight">
        Here&apos;s what we have to offer
      </h1>
    </div>
  );
}
