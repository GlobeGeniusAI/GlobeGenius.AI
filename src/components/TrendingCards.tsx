'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type Destination = {
  name: string;
  image: string;
};

export default function TrendingCards({ destinations }: { destinations: Destination[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [step, setStep] = useState(250); 

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const measure = () => {
      const firstCard = el.querySelector<HTMLElement>(':scope > div');
      if (!firstCard) return;
      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(el).columnGap || '0');
      setStep(cardWidth + gap);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  // Auto-scroll (paused on hover)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!isHovering) {
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
        if (atEnd) {
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          el.scrollBy({ left: step, behavior: 'smooth' });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovering, step]);

  return (
    <div className="relative mt-6 w-full mx-auto overflow-hidden cursor-pointer">

      {/* Carousel Track */}
      <div
        ref={scrollRef}
        className="
          flex gap-4 overflow-x-auto no-scrollbar px-4 scroll-smooth
          snap-x snap-mandatory
        "
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="
              relative h-[350px] rounded-[30px] overflow-hidden flex-shrink-0 group
              snap-start
            "
            style={{
              // Exactly 5 cards visible: (100% width minus 4 gaps) / 5
              flex: '0 0 calc((100% - 4rem) / 5)',
            }}
          >
            {/* Image */}
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />

            {/* Text Overlay */}
            <div className="absolute bottom-4 w-full text-center text-white font-montserrat text-2xl font-semibold drop-shadow-md">
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
