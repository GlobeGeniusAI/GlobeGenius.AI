import Image from "next/image";

type DestinationCardProps = {
  src: string;
  alt: string;
  className?: string;
  showOverlay?: boolean;
  overlayText?: string;
};

export default function DestinationCard({
  src,
  alt,
  className = "",
  showOverlay = false,
  overlayText = "",
}: DestinationCardProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />

      {showOverlay && overlayText && (
        <div className="absolute bottom-4 w-full text-center bg-[#0000005c] text-white font-montserrat text-[10px] md:text-2xl font-semibold drop-shadow-md">
          {overlayText}
        </div>
      )}
    </div>
  );
}
