import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DestinationCard from "../../components/DestinationCard";

export default function SearchDestinations() {
  return (
    <div className="bg-[#f9f9f9] mt-4 py-4">
      <div className="mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-semibold font-montserrat text-[#000746] mb-4">
              Search Destinations
            </h2>
            <p className="text-lg text-gray-700">
              Start your journey by searching for any destination around the
              world. Whether you have a dream spot in mind or you&apos;re
              exploring new ideas, we&apos;ll help you discover the perfect
              places to visit.
            </p>

            {/* Mobile-only image */}
            <div className="mt-6 block lg:hidden">
              <img
                src="/mobile-version/search.png"
                alt="Search Destinations"
                className="w-full rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* Right Column Content - Desktop */}
          <div className="flex-1 flex justify-center font-montserrat hidden lg:flex">
            <div className="relative flex items-center justify-center w-full min-h-[600px]">
              {/* Center magnifying glass icon */}
              <MagnifyingGlassIcon className="w-40 text-[#918e8e]" />

              {/* Top Left Tag - Romantic*/}
              <div className="absolute top-34 left-18">
                <span className="px-6 py-2 border border-gray-400 text-[#ff6f61] rounded-full text-md font-medium shadow-md">
                  Romantic
                </span>
              </div>

              {/* Top Right Image - Lisbon */}
              <div className="absolute top-0 right-10">
                <DestinationCard
                  src="/trending-cards/lisbon.jpg"
                  alt="Lisbon"
                  className="w-38 h-58 rounded-3xl border border-gray-800"
                />
              </div>

              {/* Middle Right Tag - Adventure */}
              <div className="absolute top-76 -right-4">
                <span className="px-6 py-2 border border-gray-400 text-[#ff6f61] rounded-full text-md font-medium shadow-md">
                  Adventure
                </span>
              </div>

              {/* Bottom Left Image - Rome */}
              <div className="absolute bottom-30 -left-2 ">
                <DestinationCard
                  src="/trending-cards/rome.jpg"
                  alt="Rome"
                  className="w-38 h-58 rounded-3xl border border-gray-800"
                />
              </div>

              {/* Bottom Center Tag - Beaches */}
              <div className="absolute bottom-22 flex justify-center">
                <span className="px-6 py-2 border border-gray-400 text-[#ff6f61] rounded-full text-md font-medium shadow-md">
                  Beaches
                </span>
              </div>

              {/* Bottom Right Image - Bali*/}
              <div className="absolute -bottom-4 right-4 ">
                <DestinationCard
                  src="/trending-cards/bali.jpg"
                  alt="Bali"
                  className="w-38 h-58 rounded-3xl border border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
