"use client";

import TrendingTags from "@/components/TrendingTags";
import DestinationDates from "./landing-components/DestinationDates";
import GenerateItineraries from "./landing-components/GenerateItineraries";
import Hero from "./landing-components/Hero";
import SaveFavorites from "./landing-components/SaveFavorites";
import SearchDestinations from "./landing-components/SearchDestinations";
import TripInsights from "./landing-components/TripInsights";
import TrendingCards from "@/components/TrendingCards";

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

      <h2 className="mt-30 ml-20 text-3xl font-semibold text-[#ff6f61] font-montserrat tracking-tight">
        Trending Destinations
      </h2>

      {/* <TrendingCards
        destinations={[
          { name: "Paris", image: "/placeholder.jpg" },
          { name: "Tokyo", image: "/placeholder.jpg" },
          { name: "Bali", image: "/placeholder.jpg" },
          { name: "London", image: "/placeholder.jpg" },
          { name: "New York", image: "/placeholder.jpg" },
          // Add more later...
        ]}
      /> */}

      <TrendingCards
        destinations={[
          { name: "Paris" },
          { name: "Tokyo" },
          { name: "Bali" },
          { name: "London" },
          { name: "New York" },
          { name: "Rome" },
          { name: "Barcelona" },
          { name: "Sydney" },
        ]}
      />

      <TrendingTags
        tags={[
          "Beaches",
          "Mountains",
          "Adventure",
          "Solo Travel",
          "Romantic",
          "Luxury",
        ]}
      />

      <div className="flex flex-wrap justify-center pb-24 pt-4">
        <button className="rounded-full border border-gray-400 px-60 py-3 text-[#000744] text-2xl font-montserrat font-medium hover:bg-gray-200 shadow-md transition transform hover:-translate-y-1 active:translate-y-0 hover:cursor-pointer">
          Surprise Me
        </button>
      </div>

    </div>
  );
}
