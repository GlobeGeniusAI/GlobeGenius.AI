import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Logo } from "@/app/UI components/Logo";

export function Header() {
  return (
    <nav className="px-14 flex w-full bg-zinc-600 h-16 items-center justify-between px-10">
      <Logo />
      <div className="flex items-center space-x-6">
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
          <button className="p-2 rounded-full">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6 text-white" />
          </button>{" "}
        </div>
      </div>
    </nav>
  );
}
