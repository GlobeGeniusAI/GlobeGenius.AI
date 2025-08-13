import Image from "next/image";

export function Logo() {
  return (
    <div className="bg-[#F7F9FC] rounded-full overflow-hidden w-32 h-16 md:w-64 md:h-24">
      <Image
        src="/Logo.png"
        width={650}
        height={600}
        alt="Globe Genius Logo"
        className="object-cover mx-auto w-[90%] h-[90%] md:m-2"
      />
    </div>
  );
}
