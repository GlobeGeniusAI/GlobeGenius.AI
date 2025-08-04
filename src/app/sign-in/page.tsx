"use client";

import { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  async function handleSignIn() {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (!res || !res.user) throw new Error("User sign in failed");
      router.push("/");
    } catch (err) {
      console.error("Sign in failed. Please try again", err);
    }
  }

  // Google sign-in
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  async function handleGoogleLogin() {
    try {
      const res = await signInWithGoogle();
      if (!res || !res.user) {
        throw new Error("Google sign-in failed. Please try again");
      }
      router.push("/");
    } catch (err) {
      console.error("Google sign-in error", err);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center text-[#000746]">
      <div>
        <h1 className="font-montserrat text-3xl text-center">Sign in</h1>

        <div className="relative m-5 border border-dashed rounded-md md:w-150 text-center">
          <Image
            src="/airplane.svg"
            alt="airplane"
            width={70}
            height={70}
            className="absolute bottom-5 left-[-35.5px]"
          />
          <Image
            src="/airplane.svg"
            alt="airplane"
            width={70}
            height={70}
            className="rotate-180 absolute top-5 right-[-35.5px]"
          />
          <div className="text-end mt-10 w-[80%] mx-auto">
            <label htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" md:w-90 md:h-10 rounded border border-[#000746] ml-2 md:ml-5 mb-5"
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="md:w-90 md:h-10 rounded border border-[#000746] ml-2 md:ml-5 mb-5"
              />
            </label>
          </div>
          <button
            onClick={handleSignIn}
            className="w-35 md:w-50 text-sm md:text-base bg-[#000746] text-white p-3 rounded-full mb-10 cursor-pointer"
          >
            Sign In
          </button>
          {/* OR section */}
          <div className="flex items-center justify-center">
            <div className="basis-[40%] h-0 border border-[#000746]" />
            <p className="basis-[10%]"> OR </p>
            <div className="basis-[40%] h-0 border border-[#000746]" />
          </div>

          {/* SignUp with Google */}
          <div className="w-fit mx-auto">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center m-5 p-3 cursor-pointer border rounded-full border-[#747775] bg-[#ffffff]"
            >
              <Image
                src="/Google_Logo.png"
                alt="Continue with Google"
                width={20}
                height={20}
              />
              <p className="ml-3">Continue with Google</p>
            </button>
          </div>
          <p className="mb-10">
            Don&apos;t have an account?{" "}
            <Link href="sign-up" className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
