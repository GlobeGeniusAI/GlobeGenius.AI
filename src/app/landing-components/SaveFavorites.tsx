export default function SaveFavorites() {
  return (
    // <div className="font-montserrat text-[#000744] font-semibold text-3xl">

    // </div>

    <div className="bg-[#f9f9f9] mt-4 py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-semibold font-montserrat text-[#000744] mb-4">
              Save to Favorites
            </h2>
            <p className="text-lg text-gray-700">
              Found a place you love? Save it to your Favorites so you can
              easily build your bucket list and come back when you&apos;re ready
              to plan.
            </p>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 flex justify-center">
            {/* Replace this with your actual image component */}
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
