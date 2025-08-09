import Insights from "@/components/Insights";

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
            <div className="w-full max-w-full">
         

 <div className="max-w-5xl mx-auto py-10">
      <Insights
        title="Paris, France"
        bestTime={{
          range: 'March to May',
          summary: 'Pleasant weather and cherry blossoms in spring',
        }}
        weather={{
          series: [
            { month: 'Jan', value: 3 },
            { month: 'Feb', value: 5 },
            { month: 'Mar', value: 9 },
            { month: 'Apr', value: 12 },
            { month: 'May', value: 16 },
            { month: 'Jun', value: 19 },
            { month: 'Nov-Dec', value: 7 },
          ],
          label: 'Weather',
        }}
        budget={{
          summary: 'The trip may range from x USD to y USD.',
        }}
        currency={{
          defaultAmount: 1,
          base: 'USD',
          target: 'JPY',
          rate: 134.5, // set null if you want the field to show "—" until Update
          onUpdateRequest: async (from, to) => {
            // TODO: plug your API call here (OpenAI function calling, fixer.io, etc.)
            // You can lift state to parent if you want to control `rate` from above.
            console.log('Update rates clicked for', { from, to });
          },
        }}
      />
    </div>
  );




            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
