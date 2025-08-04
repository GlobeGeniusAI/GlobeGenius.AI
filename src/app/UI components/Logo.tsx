import Image from "next/image";

export function Logo() {
  return (
    <div className="bg-white rounded-full overflow-hidden w-32 h-16 md:w-44 md:h-20 mt-14">
      <Image
        src="/Logo.png"
        width={150}
        height={100}
        alt="Globe Genius Logo"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
