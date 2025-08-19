import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function DestinationInput() {
  return (
    <div className="flex flex-col">
      <label className="mb-1 ml-2 mr-3 text-gray-700 font-montserrat text-xl font-medium">
        Search Destination:
      </label>
      <div className="relative">
        <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="City or Country"
          className="w-126 rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 font-montserrat text-black text-lg placeholder-gray-500 focus:border-blue-900 focus:outline-none"
        />
      </div>
    </div>
  );
}
