import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchDestinations() {
  return (
    <div className="bg-[#f9f9f9] mt-4 py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-semibold font-montserrat text-[#000744] mb-4">
              Search Destinations
            </h2>
            <p className="text-lg text-gray-700">
              Start your journey by searching for any destination around the
              world. Whether you have a dream spot in mind or you&apos;re
              exploring new ideas, we&apos;ll help you discover the perfect
              places to visit.
            </p>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 flex justify-center">
            {/* Replace this with your actual image component */}
            <div className="w-full max-w-md flex justify-center">
              <MagnifyingGlassIcon className="w-80" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
