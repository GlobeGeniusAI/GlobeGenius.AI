import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

//TODO:
//Hook this up to dynamic API image sources.
//Add actual carousel behavior (Swiper.js or custom scroll logic).
//Wire up routing when clicking a card.

export default function TrendingCards({
  destinations,
}: {
  destinations: { name: string }[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 250; // Adjust this scroll amount if needed
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">

      {/* Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 mt-6 overflow-x-auto no-scrollbar px-4 scroll-smooth"
      >
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative min-w-[200px] h-[350px] rounded-[30px] overflow-hidden flex-shrink-0 group"
          >
            {/* Placeholder Color Box */}
            <div className="w-full h-full bg-gray-300 transition-transform duration-300 ease-in-out group-hover:scale-105" />

            {/* Text Overlay */}
            <div className="absolute bottom-6 w-full text-center text-white font-montserrat text-2xl font-semibold drop-shadow-md">
              {destination.name}
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
}
