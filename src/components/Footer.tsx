"use client";
import { Logo } from "@/components/UI components/Logo";
import { auth } from "@/firebase/config";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

export function Footer() {
  const [user] = useAuthState(auth);

  return (
    <>
      <footer className="bg-[#565454] text-[#F7F9FC] font-montserrat w-full py-6 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-2">
            <div
              className={`flex items-center justify-center h-full order-4 sm:order-4 md:order-4 ${
                user ? "md:col-span-3" : "md:col-span-4"
              }`}
            >
              <Link href="/" className="cursor-pointer p-4">
                <Logo />
              </Link>
            </div>
            <div
              className={`text-center order-2 sm:order-1 md:order-1 my-auto ${
                user ? "md:col-span-3" : "md:col-span-4"
              }`}
            >
              <h3 className="font-semibold block text-[#F7F9FC] mb-2 font-montserrat">
                Quick Links
              </h3>
              <Link
                href="/"
                className="hover:underline block text-[#F7F9FC] font-montserrat text-sm"
              >
                Home
              </Link>
              <Link
                className="hover:underline block text-[#F7F9FC] font-montserrat text-sm"
                href="/explore"
              >
                Explore
              </Link>
              <Link
                href="/weather"
                className="hover:underline block text-[#F7F9FC] font-montserrat text-sm"
              >
                RouteBot
              </Link>
            </div>

            <div
              className={`text-center order-3 sm:order-2 md:order-2 my-auto ${
                user ? "md:col-span-3" : "md:col-span-4"
              }`}
            >
              <h3 className="font-semibold block mb-2 text-[#F7F9FC] font-montserrat ">
                About GlobeGenius
              </h3>
              <div className="text-center">
                <Link
                  href="/about-us"
                  className="hover:underline block text-[#F7F9FC] font-montserrat text-sm"
                >
                  About Us
                </Link>
                <Link
                  href="/contact-us"
                  className="hover:underline block text-[#F7F9FC] font-montserrat text-sm"
                >
                  Contact Us
                </Link>
                <Link
                  href="/faq"
                  className="hover:underline block text-[#F7F9FC] font-montserrat text-sm"
                >
                  FAQs
                </Link>
              </div>
            </div>
            {user && (
              <div className="text-center order-3 sm:order-3 md:order-3 md:col-span-3 my-auto">
                <h3 className="font-semibold block mb-2 text-[#F7F9FC] font-montserrat ">
                  Your Journey
                </h3>
                <Link
                  href="/itineraries"
                  className="hover:underline block text-[#F7F9FC] font-montserrat text-sm"
                >
                  Itineraries
                </Link>
                <Link
                  href="/travel-book"
                  className="hover:underline block text-[#F7F9FC] font-montserrat text-sm"
                >
                  Travel Book
                </Link>
                <Link
                  href="/favorites"
                  className="hover:underline block text-[#F7F9FC] font-montserrat text-sm"
                >
                  Favorites
                </Link>
              </div>
            )}
          </div>
        </div>
      </footer>
      <div className="flex justify-between items-center px-20 py-2">
        <div className="flex space-x-10">
          <Link
            href="/privacy-policy"
            className="text-gray-400 text-[10px] hover:text-black/20 font-montserrat"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-conditions"
            className="text-gray-400 text-[10px] hover:text-black/20 font-montserrat"
          >
            Terms & Conditions
          </Link>
        </div>
        <p className="text-gray-400 text-[10px] font-montserrat font-semibold">
          @2025 GlobeGenius
        </p>
      </div>
    </>
  );
}
