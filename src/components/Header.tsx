"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Logo } from "@/app/UI components/Logo";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  return (
    <>
      <nav className="px-4 md:px-10 lg:px-14 flex w-full bg-zinc-600 h-16 items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center ml-14">
          <div className="flex space-x-8 md:space-x-12 lg:space-x-16">
            <Link
              href="/"
              className="font-montserrat text-white text-base hover:underline"
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="font-montserrat text-white text-base hover:underline"
            >
              Explore
            </Link>
            <Link
              href="/about-us"
              className="font-montserrat text-white text-base hover:underline"
            >
              About us
            </Link>
          </div>
          <div className="flex items-center">
            <button
              className="p-2 rounded-full ml-8 lg:ml-16 flex items-center space-x-2"
              onClick={() => setIsMenuOpen(true)}
            >
              <FontAwesomeIcon icon={faUser} className="text-white h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <button
            className="p-2 rounded-full"
            onClick={() => setIsMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faUser} className="text-white h-6 w-6" />
          </button>
          <button
            className="p-2 rounded-full"
            onClick={() => setIsMobileView(!isMobileView)}
          >
            <FontAwesomeIcon
              icon={isMobileView ? faTimes : faBars}
              className="h-6 w-6 text-white"
            />
          </button>
        </div>
      </nav>
      {isMobileView && (
        <div
          className="fixed inset-0 bg-gray-500/20 z-40"
          onClick={() => setIsMobileView(false)}
        />
      )}
      {/* Mobile Navigation Dropdown */}
      {isMobileView && (
        <div className="fixed top-20 right-2 sm:right-4 bg-zinc-600 rounded-lg shadow-lg p-4 z-50 w-32 md:hidden">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className="font-montserrat text-sm text-white font-bold hover:bg-zinc-500 p-3 rounded transition-colors"
              onClick={() => setIsMobileView(false)}
            >
              Home
            </Link>
            <Link
              href="/explore"
              className="font-montserrat text-sm text-white font-bold hover:bg-zinc-500 p-3 rounded transition-colors"
              onClick={() => setIsMobileView(false)}
            >
              Explore
            </Link>
            <Link
              href="/about-us"
              className="font-montserrat text-sm text-white font-bold hover:bg-zinc-500 p-3 rounded transition-colors"
              onClick={() => setIsMobileView(false)}
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
        <div className="fixed top-20 right-4 bg-zinc-600 rounded-lg shadow-lg p-4 z-50 w-30">
          <div className="flex flex-col space-y-2">
            <button className="text-left text-white p-2 font-white rounded text-black font-medium">
              <Link href="sign-in" className="font-montserrat text-sm">
                Sign In
              </Link>
            </button>
            <button className="text-left p-2 text-white rounded text-black font-medium">
              <Link href="sign-up" className="font-montserrat text-sm">
                Sign Up
              </Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
