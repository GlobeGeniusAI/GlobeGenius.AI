"use client";

import DestinationDates from "./landing-components/DestinationDates";
import GenerateItineraries from "./landing-components/GenerateItineraries";
import Hero from "./landing-components/Hero";
import SaveFavorites from "./landing-components/SaveFavorites";
import SearchDestinations from "./landing-components/SearchDestinations";
import TripInsights from "./landing-components/TripInsights";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* FAKE NAVBAR DELETE THIS BEFORE PR */}
      <div className="bg-gray-500 h-20"></div>

      <Hero />
      <DestinationDates />

      <h1 className="flex justify-center mt-40 text-5xl font-semibold text-[#ff6f61] font-montserrat tracking-tight">
        Here&apos;s what we have to offer
      </h1>

      <SearchDestinations />
      <GenerateItineraries />
      <SaveFavorites />
      <TripInsights />
      
    </div>
  );
}
