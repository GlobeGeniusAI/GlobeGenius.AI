import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-50">
      {/* Decorative plane & dashed path — totally ignore for a11y */}

      <Image
        src="/Plane.png"
        width={1500}
        height={600}
        alt="plane with dashes to destination"
        priority
        className="pointer-events-none absolute -top-10 left-0 w-[180%] max-w-none select-none lg:w-auto lg:max-w-none"
      />

      {/* Content container */}
      <div className="mx-auto max-w-7xl px-4 py-24 lg:py-32">
        {/* Headline */}
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">
          From destination to details
        </h1>
        <p className="mt-2 text-lg font-medium text-blue-800">
          Let your trip build itself
        </p>

        {/* search bar */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex flex-wrap items-end gap-4 font-sans"
        >
          {/* Destination input group */}
          <div className="flex flex-col">
            <label className="mb-1 mr-3 text-gray-700 text-sm font-medium">
              Search Destination
            </label>
            <div className="relative">
              <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Destination"
                className="w-98 rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-base placeholder-gray-500 focus:border-blue-900 focus:outline-none"
              />
            </div>
          </div>

          {/* from date */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 text-sm font-medium">
              From:
            </label>
            <input
              type="date"
              className="w-40 rounded-xl border border-gray-300 bg-white py-3 px-4 text-base text-gray-700 focus:border-blue-900 focus:outline-none"
            />
          </div>

          {/* To date */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 text-sm font-medium">
              To:
            </label>
            <input
              type="date"
              className="w-40 rounded-xl border border-gray-300 bg-white py-3 px-4 text-base text-gray-700 focus:border-blue-900 focus:outline-none"
            />
          </div>

          {/* Submit button */}
          <div className="flex flex-col">
            <button
              type="submit"
              className="h-[44px] rounded-2xl bg-[#010a46] px-10 text-base font-medium text-white transition hover:cursor-pointer hover:bg-[#0a1464]"
            >
              Let’s go!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
