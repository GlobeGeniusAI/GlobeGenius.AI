import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function NavBar() {
  return (
    <>
      <div className="flex w-full bg-gray-500 h-16 items-center justify-end px-10 space-x-4">
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/about-us">About us</Link>
        <FontAwesomeIcon icon={faUser} className="h-6 w-6 text-white" />
        {/* {isLoggedIn && (
          <FontAwesomeIcon icon={faHeart} className="h-6 w-6 text-white ml-4" />
        )} */}
      </div>
    </>
  );
}
