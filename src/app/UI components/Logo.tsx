import Image from "next/image";
import { JSX } from "react";

export function Logo({
  size = "default",
}: {
  size?: "default" | "footer";
}): JSX.Element {
  const sizeClasses = {
    default: "w-28 h-12 md:w-32 md:h-14", // your current sizes
    footer: "w-36 h-16 md:w-40 md:h-18", // bigger footer sizes
  };
  return (
    <div
      className={`bg-white rounded-full overflow-hidden ${sizeClasses[size]}`}
    >
      <Image
        src="/Logo.png"
        width={250}
        height={200}
        alt="Globe Genius Logo"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
