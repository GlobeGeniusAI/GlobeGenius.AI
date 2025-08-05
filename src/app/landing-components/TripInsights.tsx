export default function TripInsights() {
  return (
    // <div className="font-montserrat text-[#000744] font-semibold text-3xl">
    //     <h1></h1>
    // </div>

    <div className="bg-[#f9f9f9] py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col lg:flex-row-reverse items-center gap-10">
          {/* Right Text Content */}
          <div className="flex-1">
            <h2 className="font-montserrat text-[#000744] font-semibold text-4xl mb-4">
              Essential Trip Insights
            </h2>
            <p className="text-lg text-gray-700">
              We take the guesswork out of trip planning with real-time insights
              on weather, budgets, and the best times to explore your
              destination.
            </p>
          </div>

          {/* Left Image Content */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md">
              <img
                src="/your-image.png"
                alt="Maps and Reviews"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
