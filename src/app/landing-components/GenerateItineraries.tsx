export default function GenerateItineraries() {
  return (
    <div className="bg-[#f9f9f9] py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col lg:flex-row-reverse items-center gap-10">
          {/* Right Text Content */}
          <div className="flex-1">
            <h2 className="font-montserrat text-[#000746] font-semibold text-4xl mb-4">
              AI Generated Itineraries
            </h2>
            <p className="text-lg text-gray-700">
              Tell us where and when, and our AI will build the perfect trip
              plan for you — instantly.
            </p>
          </div>

          {/* Left Image Content */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md">
              <img
                src="/temp-itinerary.png"
                alt="temp itinerary of Paris"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
