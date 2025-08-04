import { Logo } from "@/app/UI components/Logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-600 text-white font-montserrat w-full py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-white mb-4 font-montserrat text-lg">
              Quick Links
            </h3>
            <Link href="/" className="text-white font-montserrat text-base">
              Home
            </Link>
            <Link
              className="text-white font-montserrat text-base"
              href="/explore"
            >
              Explore
            </Link>
            <Link
              href="/weather"
              className="text-white font-montserrat text-base"
            >
              Weather
            </Link>
          </div>

          <div className="text-center">
            <h3 className="mb-4 text-white font-montserrat text-lg">
              About GlobeGenius
            </h3>
            <div className="text-center">
              <Link
                href="/about-us"
                className="text-white font-montserrat text-base"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="text-white font-montserrat text-base"
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="text-white font-montserrat text-base"
              >
                FAQs
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h3 className="mb-4 text-white font-montserrat text-lg">
              Your Journey
            </h3>
            <Link
              href="/itineraries"
              className="text-white font-montserrat text-base"
            >
              Itineraries
            </Link>
            <Link
              href="/travel-book"
              className="text-white font-montserrat text-base"
            >
              Travel Book
            </Link>
            <Link
              href="/favorites"
              className="text-white font-montserrat text-base"
            >
              Favorites
            </Link>
          </div>
          <div className="text-center">
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
}
