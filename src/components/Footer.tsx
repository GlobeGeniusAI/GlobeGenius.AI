import { Logo } from "@/app/UI components/Logo";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="bg-zinc-600 text-white font-montserrat w-full py-4 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center h-full order-1 sm:order-4 md:order-4">
              <Link href="/" className="cursor-pointer">
                <Logo />
              </Link>
            </div>
            <div className="text-center order-2 sm:order-1 md:order-1">
              <h3 className="font-bold block text-white mb-4 font-montserrat text-lg">
                Quick Links
              </h3>
              <Link
                href="/"
                className="hover:underline block text-white font-montserrat text-base"
              >
                Home
              </Link>
              <Link
                className="hover:underline block text-white font-montserrat text-base"
                href="/explore"
              >
                Explore
              </Link>
              <Link
                href="/weather"
                className="hover:underline block text-white font-montserrat text-base"
              >
                Weather
              </Link>
            </div>

            {/* About GlobeGenius - third on mobile */}
            <div className="text-center order-3 sm:order-2 md:order-2">
              <h3 className="font-bold block mb-4 text-white font-montserrat text-lg">
                About GlobeGenius
              </h3>
              <div className="text-center">
                <Link
                  href="/about-us"
                  className="hover:underline block text-white font-montserrat text-base"
                >
                  About Us
                </Link>
                <Link
                  href="/contact-us"
                  className="hover:underline block text-white font-montserrat text-base"
                >
                  Contact Us
                </Link>
                <Link
                  href="/faq"
                  className="hover:underline block text-white font-montserrat text-base"
                >
                  FAQs
                </Link>
              </div>
            </div>

            <div className="text-center order-4 sm:order-3 md:order-3">
              <h3 className="font-bold block mb-4 text-white font-montserrat text-lg">
                Your Journey
              </h3>
              <Link
                href="/itineraries"
                className="hover:underline block text-white font-montserrat text-base"
              >
                Itineraries
              </Link>
              <Link
                href="/travel-book"
                className="hover:underline block text-white font-montserrat text-base"
              >
                Travel Book
              </Link>
              <Link
                href="/favorites"
                className="hover:underline block text-white font-montserrat text-base"
              >
                Favorites
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="align-right">
        <Link
          href="/privacy-policy"
          className="text-gray-400 text-sm hover:text-black/20 px-4"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-conditions"
          className="text-gray-400 text-sm hover:text-black/20 px-4"
        >
          Terms & Conditions
        </Link>
      </div>
    </>
  );
}
