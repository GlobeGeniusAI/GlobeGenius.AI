"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Logo } from "@/app/UI components/Logo";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="px-14 flex w-full bg-zinc-600 h-16 items-center justify-between px-10">
        <Logo />
        <div className="flex items-center ml-14">
          <div className="flex space-x-6">
            <Link href="/" className="text-white font-bold hover:underline">
              Home
            </Link>
            <Link
              href="/explore"
              className="text-white font-bold hover:underline"
            >
              Explore
            </Link>
            <Link
              href="/about-us"
              className="text-white font-bold hover:underline"
            >
              About us
            </Link>
          </div>
          <div className="flex items-center">
            <button
              className="p-2 rounded-full ml-15"
              onClick={() => setIsMenuOpen(true)}
            >
              <FontAwesomeIcon icon={faUser} className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {isMenuOpen && (
        <div className="fixed top-24 right-4 bg-zinc-600 rounded-lg shadow-lg p-4 z-50 w-30">
          <div className="flex flex-col space-y-2">
            <button className="text-left text-white p-2 font-white rounded text-black font-medium">
              Sign In
            </button>
            <button className="text-left p-2 text-white rounded text-black font-medium">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
}
