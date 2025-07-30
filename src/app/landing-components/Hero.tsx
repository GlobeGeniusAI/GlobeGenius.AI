import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-50">
      {/* Decorative plane & dashed path — totally ignore for a11y */}
      
      <Image
        src="/Plane.png"
        width={1500}
        height={600}
        alt=""
        priority
        className="pointer-events-none absolute -top-10 left-0 w-[180%] max-w-none select-none lg:w-auto lg:max-w-none"
      />

      {/* Content container */}
      <div className="mx-auto max-w-7xl px-4 py-24 lg:py-32">

        {/* Headline */}
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">
          From destination&nbsp;to&nbsp;details
        </h1>
        <p className="mt-2 text-lg font-medium text-blue-800">
          Let your trip build itself
        </p>

        {/* search bar */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid gap-3 sm:grid-cols-[1fr_repeat(3,_auto)]"
        >
          {/* destination */}
          <label className="relative flex w-full">
            <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Destination"
              className="w-full rounded-md border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm placeholder-gray-400 focus:border-blue-900 focus:outline-none"
            />
          </label>

          {/* from date */}
          <input
            type="date"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm focus:border-blue-900 focus:outline-none"
            aria-label="From date"
          />

          {/* to date */}
          <input
            type="date"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm focus:border-blue-900 focus:outline-none"
            aria-label="To date"
          />

          {/* submit button */}
          <button
            type="submit"
            className="whitespace-nowrap rounded-md bg-blue-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 active:bg-blue-700"
          >
            Let’s go!
          </button>
        </form>
      </div>
    </section>
  );
}
