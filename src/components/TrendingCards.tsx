//TODO:
//Hook this up to dynamic API image sources.
//Wire up routing when clicking a card.


'use client';

import { useRef, useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function TrendingDestinations({ destinations }: { destinations: { name: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Auto-scroll (paused on hover)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering && scrollRef.current) {
        const el = scrollRef.current;
        if (el.scrollLeft + el.offsetWidth >= el.scrollWidth) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: 250, behavior: 'smooth' });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="relative mt-6 w-full max-w-6xl mx-auto overflow-hidden cursor-pointer">

      {/* Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-4 scroll-smooth"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative min-w-[200px] h-[350px] rounded-[30px] overflow-hidden flex-shrink-0 group"
          >
            {/* Placeholder box */}
            <div className="w-full h-full bg-gray-300 transition-transform duration-300 ease-in-out group-hover:scale-105" />

           {/* Text Overlay */}
            <div className="absolute bottom-6 w-full text-center text-white font-montserrat text-2xl font-semibold drop-shadow-md">
              {destination.name}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition cursor-pointer"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition cursor-pointer"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
}
