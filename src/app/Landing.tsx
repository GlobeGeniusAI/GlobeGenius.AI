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
    <div className="max-w-full min-h-screen bg-gray-50">
      {/* FAKE NAVBAR DELETE THIS BEFORE PR */}
      

      {/* Landing page Body */}
      <div className="mx-auto w-full max-w-[90%] px-4 sm:px-6 lg:px-8">
        <Hero />
        <DestinationDates />

        <h1
          className="
            flex justify-center mt-40 font-semibold font-montserrat tracking-tight text-[#ff6f61]
            text-3xl sm:text-5xl md:text-5xl text-center
          "
        >
          Here&apos;s what we have to offer
        </h1>

        <SearchDestinations />
        <GenerateItineraries />
        <SaveFavorites />
        <TripInsights />

        <h2 className="mt-30 ml-20 text-3xl font-semibold text-[#ff6f61] font-montserrat tracking-tight">
          Trending Destinations
        </h2>

        <TrendingCards
          destinations={[
            { name: "Paris", image: "/trending-cards/paris.jpg" },
            { name: "Tokyo", image: "/trending-cards/tokyo.jpg" },
            { name: "Bali", image: "/trending-cards/bali.jpg" },
            { name: "London", image: "/trending-cards/london.jpg" },
            { name: "New York", image: "/trending-cards/new-york2.jpg" },
            { name: "Rome", image: "/trending-cards/rome.jpg" },
            { name: "Lisbon", image: "/trending-cards/lisbon.jpg" },
            { name: "Barcelona", image: "/trending-cards/barcelona.jpg" },
            { name: "Marrakesh", image: "/trending-cards/marrakesh.jpg" },
            { name: "Crete", image: "/trending-cards/crete.jpg" },
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

        {/* Surprise Me button */}
        <div className="flex flex-wrap justify-center pb-24 pt-4">
          <button
            className="
              rounded-full border border-gray-400 
              px-18 sm:px-20 md:px-40 lg:px-60 
              py-2 sm:py-3 
              text-2xl sm:text-2xl md:text-2xl 
              font-montserrat font-medium 
              text-[#000746] 
              hover:bg-gray-200 shadow-md transition transform 
              hover:-translate-y-1 active:translate-y-0 hover:cursor-pointer
            "
          >
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}
