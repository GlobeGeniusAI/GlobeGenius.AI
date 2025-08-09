import FavoriteCard from "@/components/FavoriteCard";

export default function SaveFavorites() {
  return (
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
            {/* Favorites Card */}
            <div className="w-full max-w-md">
              <FavoriteCard
                title="Paris, France"
                savedOn="2025-05-24"
                // imageUrl={someURL} // leave undefined for the color block placeholder
                tags={[
                  { icon: "❤️", label: "Romantic" },
                  { icon: "🎨", label: "Art & Museums" },
                  { icon: "🛍️", label: "Shopping" },
                ]}
                onPreview={() => console.log("preview")}
                onRemove={() => console.log("remove")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
