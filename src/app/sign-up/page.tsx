"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { signInAnonymously } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  async function handleSignUp() {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: username });
      if (!res || !res.user) throw new Error("User creation failed");
      setUsername("");
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (err) {
      console.error(err);
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

  // Anonymous sign-in
  async function handleAnonymousLogin() {
    try {
      const res = await signInAnonymously(auth);
      await updateProfile({ displayName: "Anonymous User" });
      if (!res || !res.user) throw new Error("Anonymous sign-in failed");
      router.push("/");
    } catch (error) {
      console.error("Anonymous sign-in failed:", error);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center text-[#000746]">
      <div>
        <h1 className="font-montserrat text-3xl text-center">Sign up</h1>

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
            <label htmlFor="username" className="block">
              Username:
              <input
                type="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="md:w-90 md:h-10 rounded border border-[#000746] ml-2 md:ml-5 mb-5"
              />
            </label>
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
            onClick={handleSignUp}
            className="w-35 md:w-50 text-sm md:text-base bg-[#000746] text-white p-3 rounded-full mb-10 cursor-pointer"
          >
            Create Account
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

          {/* SignIn with Anonymously */}
          <div>
            <button
              onClick={handleAnonymousLogin}
              className="w-35 md:w-50 text-sm md:text-base bg-[#000746] text-white p-3 rounded-full my-5 cursor-pointer"
            >
              Continue as Guest
            </button>
          </div>

          <p className="mb-10">
            Already have an account?{" "}
            <Link href="sign-in" className="underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
