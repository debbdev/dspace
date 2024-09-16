"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";
import MenuBar from "./MenuBar";
import Link from "next/link";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";

function NavBar() {
  const { user } = useUser();
  const { theme } = useTheme();
  return (
    <section className="background-light900_dark200 text-dark100_light900 fixed z-50 h-16 w-full">
      <div className="flex-between mx-auto max-w-screen-sm px-4  py-3 sm:max-w-screen-sm sm:px-4 lg:max-w-screen-2xl lg:px-0">
        <div className="flex-start gap-3">
          <div className="">
            <MenuBar />
          </div>
          <Link href={`/`}>
            <div className="flex-start gap-1">
              {theme === "light" ? (
                <Image
                  src="/assets/icons/xspace.svg"
                  alt="xspace"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src="/assets/icons/xspaceD.svg"
                  alt="xspace"
                  width={20}
                  height={20}
                />
              )}

              <h1>
                X<span>Space</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex-start max-h-10 max-sm:hidden">
          <div className="flex-start background-light800_dark300 text-dark100_light900 h-10 px-4 py-2">
            <Image
              src="/assets/icons/search.svg"
              alt="search"
              width={16}
              height={16}
              className=""
            />
            <input
              type="text"
              placeholder="search for courses"
              className="background-light800_dark300 text-dark100_light900 w-96 px-3"
            />
          </div>

          <button className="bg-primary-500 h-10 border-none px-5 py-2">
            Search
          </button>
        </div>
        {!user ? (
          <SignedOut>
            <SignInButton>
              <button className="bg-primary-500 h-10 rounded-md border-none px-5 py-2">
                Login
              </button>
            </SignInButton>
          </SignedOut>
        ) : (
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </SignedIn>
        )}
        {/*<div className="flex-start gap-6">
          <button className="bg-primary-500 h-10 rounded-md border-none px-5 py-2">
            Register
          </button>
          <button className="bg-primary-500 h-10 rounded-md border-none px-5 py-2">
            Login
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default NavBar;
