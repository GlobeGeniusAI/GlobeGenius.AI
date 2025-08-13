import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-center bg-gray-50">
      <div className="mx-auto md:px-4 pt-18">
        <div className="relative">
          <Image
            src="/Plane.png"
            width={1800}
            height={750}
            alt="plane with dashes to destination"
            className="hidden md:block"
            priority
          />
          <Image 
           src="/Mobile-Hero-img.svg"
            width={1800}
            height={750}
            alt="plane with dashes to destination"
            className="sm:block md:hidden "
            priority
          />

          <div className="absolute top-14 md:top-46 md:left-16 left-2">
            <h1 className="md:text-6xl text-lg font-montserrat font-bold tracking-tight text-[#000746] ">
              From destination to details
            </h1>
            <p className="md:mt-2 font-montserrat md:text-4xl text-md font-semibold text-[#000746]">
              Let your trip build itself
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
