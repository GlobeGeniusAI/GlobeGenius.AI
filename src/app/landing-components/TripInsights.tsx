import Insights from "@/components/Insights";

export default function TripInsights() {
  return (
    <div className="bg-[#f9f9f9] py-4">
      <div className="mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col lg:flex-row-reverse items-center gap-10">
          {/* Right Text Content */}
          <div className="flex-1">
            <h2 className="font-montserrat text-[#000746] font-semibold text-4xl mb-4">
              Essential Trip Insights
            </h2>
            <p className="text-lg text-gray-700">
              We take the guesswork out of trip planning with real-time insights
              on weather, budgets, and the best times to explore your
              destination.
            </p>

            {/* Mobile-only image */}
            <div className="mt-6 block lg:hidden">
              <img
                src="/mobile-version/insights.png"
                alt="Trip Insights"
                className="w-full rounded-3xl object-cover shadow-md"
              />
            </div>
          </div>

          {/* Left Content - Desktop */}
          <div className="flex-1 flex justify-center hidden lg:flex">
            <div className="w-full max-w-full">
              <div className="max-w-5xl mx-auto py-10">
                <Insights
                  title="Paris, France"
                  bestTime={{
                    range: "March to May",
                    summary:
                      "Pleasant weather and cherry blossoms in spring",
                  }}
                  weather={{
                    series: [
                      { month: "Jan", value: 3 },
                      { month: "Feb", value: 5 },
                      { month: "Mar", value: 9 },
                      { month: "Apr", value: 12 },
                      { month: "May", value: 16 },
                      { month: "Jun", value: 19 },
                      { month: "Nov-Dec", value: 7 },
                    ],
                    label: "Weather",
                  }}
                  budget={{
                    summary: "The trip may range from x USD to y USD.",
                  }}
                  currency={{
                    defaultAmount: 1,
                    base: "USD",
                    target: "JPY",
                    rate: 134.5,
                    onUpdateRequest: async (from, to) => {
                      console.log("Update rates clicked for", { from, to });
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
