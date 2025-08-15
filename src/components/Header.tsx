"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { Logo } from "@/components/UI components/Logo";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user] = useAuthState(auth);

  const pathname = usePathname();

  const isFavoritesPage = pathname === "/favorites";
  const heartIcon = isFavoritesPage ? faHeart : faHeartRegular;

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <>
      <nav className="sm:px-2 md:px-10 lg:px-14 flex w-full bg-[#565454] h-16 items-center justify-between">
        <Link href="/" className="cursor-pointer mt-14 md:mt-14 p-4">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center ">
          <div className="flex space-x-8 md:space-x-12 lg:space-x-26 mr-16">
            <Link
              href="/"
              className="font-montserrat text-[#F7F9FC] text-lg hover:underline font-semibold"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="font-montserrat text-[#F7F9FC] text-lg hover:underline font-semibold"
            >
              Explore
            </Link>
            <Link
              href="/about-us"
              className="font-montserrat text-[#F7F9FC] text-lg hover:underline font-semibold"
            >
              About us
            </Link>
          </div>
          {user && (
            <Link
              href="/favorites"
              className="p-2 rounded-full transition-colors"
              title="Favorites"
            >
              <FontAwesomeIcon
                icon={heartIcon}
                className="text-[#F7F9FC] ml-6 md:ml-8 lg:ml-12"
                size="lg"
              />
            </Link>
          )}
          <button
            className="p-2 rounded-full ml-2 flex items-center space-x-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <FontAwesomeIcon
              icon={faUser}
              className="text-[#F7F9FC] ml-2 md:ml-4 lg:ml-6 cursor-pointer"
              size="lg"
            />
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          {user && (
            <Link
              href="/favorites"
              className="p-2 rounded-full transition-colors"
              title="Favorites"
            >
              <FontAwesomeIcon
                icon={heartIcon}
                className="text-[#F7F9FC] h-8 w-8"
              />
            </Link>
          )}
          <button
            className="p-2 rounded-full"
            onClick={() => setIsMenuOpen(true)}
          >
            <FontAwesomeIcon
              icon={faUser}
              className="cursor-pointer text-[#F7F9FC] h-6 w-6"
            />
          </button>
          <button
            className="p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              className="h-6 w-6 text-[#F7F9FC]"
            />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-500/20 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-20 right-2 sm:right-2 bg-[#565454] rounded-lg shadow-lg p-4 z-50 w-32 md:hidden">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className="font-montserrat text-sm text-[#F7F9FC] font-bold hover:bg-zinc-500 p-3 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="font-montserrat text-sm text-[#F7F9FC] font-bold hover:bg-zinc-500 p-3 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              href="/about-us"
              className="font-montserrat text-sm text-[#F7F9FC] font-bold hover:bg-zinc-500 p-3 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </Link>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-500/20 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {isMenuOpen && (
        <div className="fixed top-18 right-4 bg-[#565454] rounded-lg shadow-lg p-4 z-50 w-32">
          <div className="flex flex-col space-y-2">
            {user ? (
              <div className="flex flex-col">
                <span className="text-left font-montserrat text-sm font-bold text-gray-200 mb-1 p-2">
                  {user.displayName || "User"}
                </span>
                <button
                  onClick={handleSignOut}
                  className="text-left text-white p-2 hover:bg-zinc-500 rounded font-medium transition-colors"
                >
                  <span className="font-montserrat text-sm">Sign Out</span>
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="text-left text-[#F7F9FC] p-2 hover:bg-zinc-500 rounded font-medium block transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-montserrat text-sm">Sign In</span>
                </Link>
                <Link
                  href="/sign-up"
                  className="text-left text-[#F7F9FC] p-2 hover:bg-zinc-500 rounded font-medium block transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-montserrat text-sm">Sign Up</span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
