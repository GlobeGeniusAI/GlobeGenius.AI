import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function NavBar() {
  return (
    <>
      <nav className="flex w-full bg-zinc-600 h-16 items-center justify-end px-10 space-x-4">
        <Link href="/" className="text-white mr-8 font-bold hover:underline">
          Home
        </Link>
        <Link
          href="/explore"
          className="text-white mr-8 font-bold hover:underline"
        >
          Explore
        </Link>
        <Link
          href="/about-us"
          className="text-white mr-12 font-bold hover:underline"
        >
          About us
        </Link>
        <FontAwesomeIcon
          icon={faUser}
          className="h-6 w-6 text-white font-bold"
        />
        {/* {isLoggedIn && (
          <FontAwesomeIcon icon={faHeart} className="h-6 w-6 text-white ml-4" />
        )} */}
      </nav>
    </>
  );
}
