import FavoriteCard from "@/components/FavoriteCard";

export default function SaveFavorites() {
  return (
    <div className="bg-[#f9f9f9] py-4">
      <div className="mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-semibold font-montserrat text-[#000746] mb-4">
              Save to Favorites
            </h2>
            <p className="text-lg text-gray-700">
              Found a place you love? Save it to your Favorites so you can
              easily build your bucket list and come back when you&apos;re ready
              to plan.
            </p>

            {/* Mobile-only image */}
            <div className="mt-6 block lg:hidden">
              <img
                src="/mobile-version/favorites.png"
                alt="Save to Favorites"
                className="w-full rounded-3xl object-cover shadow-md"
              />
            </div>
          </div>

          {/* Right Content - Desktop */}
          <div className="flex-1 flex justify-center mt-4 mb-14 hidden lg:flex">
            {/* Favorites Card */}
            <div
              className="
                relative mx-auto 
                w-[315px] sm:w-[360px] lg:w-[420px]
                group
              "
            >
              {/* Back card */}
              <div
                className="
                  absolute pointer-events-none
                  -rotate-[-14deg] translate-x-38 translate-y-4  
                  shadow-[0_30px_70px_rgba(0,0,0,0.18)] ring-1 ring-black/10 rounded-[28px]
                "
              >
                <FavoriteCard
                  title="Tokyo, Japan"
                  savedOn="2025-02-08"
                  imageUrl="/trending-cards/tokyo.jpg"
                  tags={[
                    { icon: "❤️", label: "Romantic" },
                    { icon: "🍽️", label: "Foodie" },
                    { icon: "🛍️", label: "Shopping" },
                  ]}
                  className="w-full"
                  onPreview={() => {}}
                  onRemove={() => {}}
                />
              </div>

              {/* Front card */}
              <div className="rotate-[-6deg] -translate-x-4 translate-y-2 rounded-[28px]">
                <FavoriteCard
                  title="Paris, France"
                  savedOn="2025-05-24"
                  imageUrl="/trending-cards/paris.jpg"
                  tags={[
                    { icon: "❤️", label: "Romantic" },
                    { icon: "🖼️", label: "Art & Museums" },
                    { icon: "🛍️", label: "Shopping" },
                  ]}
                  className="overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.18)] ring-1 ring-black/10"
                  onPreview={() => console.log("preview")}
                  onRemove={() => console.log("remove")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
