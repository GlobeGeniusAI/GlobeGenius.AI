import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-center bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 pt-18">
          <div className="relative flex justify-center">
            <Image
              src="/Plane.png"
              width={1800}
              height={750}
              alt="plane with dashes to destination"
              priority
            />
          </div>

          <div className="absolute ml-22 -mt-36">
            <h1 className="text-6xl font-montserrat font-bold tracking-tight text-[#000744] ">
              From destination to details
            </h1>
            <p className="mt-2 font-montserrat text-4xl font-semibold text-[#000744]">
              Let your trip build itself
            </p>
          </div>
        </div>
      </div>
  );
}
