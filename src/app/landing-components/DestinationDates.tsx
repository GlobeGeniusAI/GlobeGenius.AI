import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function DestinationDates() {
    return (
        <div className="flex justify-center">
             {/* search bar */}

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-12 flex flex-wrap items-end gap-6 font-montserrat"
            >
              {/* destination input*/}

              <div className="flex flex-col">
                <label className="mb-1 ml-2 mr-3 text-gray-700 font-montserrat text-med font-medium">
                  Search Destination:
                </label>
                <div className="relative">
                  <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-112 rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 font-montserrat text-black text-base placeholder-gray-500 focus:border-blue-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* from date input */}

              <div className="flex flex-col">
                <label className="mb-1 ml-2 text-gray-700 font-montserrat text-med font-medium">
                  From:
                </label>
                <input
                  type="date"
                  className="w-44 rounded-xl border border-gray-300 bg-white py-3 px-4 font-montserrat text-base text-gray-700 focus:border-blue-900 focus:outline-none hover:cursor-pointer"
                />
              </div>

              {/* to date input*/}

              <div className="flex flex-col">
                <label className="mb-1 ml-2 text-gray-700 font-montserrat text-med font-medium ">
                  To:
                </label>
                <input
                  type="date"
                  className="w-44 rounded-xl border border-gray-300 bg-white py-3 px-4 font-montserrat text-base text-gray-700 focus:border-blue-900 focus:outline-none hover:cursor-pointer"
                />
              </div>

              {/* submit button */}

              <div className="flex pl-12">
                <button
                  type="submit"
                  className="h-[48px] rounded-4xl bg-[#010a46] px-12 font-montserrat text-xl font-medium text-white shadow-md transition transform hover:-translate-y-1 hover:bg-[#0048a4] active:translate-y-0 hover:cursor-pointer"
                >
                  Let’s go!
                </button>
              </div>
            </form>
        </div>
    )
}