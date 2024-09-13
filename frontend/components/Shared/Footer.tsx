"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";

function Footer() {
  const { theme } = useTheme();
  return (
    <section className="background-light900_dark200 text-dark100_light900 shadow-light-300 p-4 dark:shadow-none">
      <div className="flex-between mx-auto max-w-screen-sm flex-wrap gap-8 p-10   sm:max-w-screen-sm sm:gap-8  sm:px-10 lg:max-w-screen-2xl lg:gap-5 lg:px-0">
        <div className="w-full max-sm:w-full lg:w-80">
          <h3 className="text-primary-500 pb-3 font-bold">Trending Courses</h3>
          <ul className="list-none">
            <li>Data Analysis</li>
            <li>Data Analytics and Visualization</li>
            <li>Video Editing</li>
          </ul>
        </div>
        <div className="w-full max-sm:w-full lg:w-80">
          <h3 className="text-primary-500 pb-3 font-bold">Join Us</h3>
          <ul className="list-none">
            <li>Tutor Request</li>
            <li>Affliate Program</li>
            <li>Request</li>
          </ul>
        </div>
        <div className="w-full max-sm:w-full lg:w-80">
          <h3 className="text-primary-500 pb-3 font-bold">About Us</h3>
          <ul className="list-none">
            <li>About</li>
            <li>Blogs</li>
            <li>Video Editing</li>
          </ul>
        </div>
        <div className="w-full max-sm:w-full lg:w-80">
          <h3 className="text-primary-500 pb-3 font-bold">Company</h3>
          <ul className="list-none">
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Support Us</li>
          </ul>
        </div>
      </div>
      <hr className="mx-auto w-full max-w-screen-sm  border-solid  border-black  px-10 sm:max-w-screen-sm sm:px-10 lg:max-w-screen-2xl lg:px-0" />
      <div className="flex-between mx-auto w-full max-w-screen-sm flex-wrap gap-5 p-10 sm:max-w-screen-sm sm:gap-5 sm:px-10  lg:max-w-screen-2xl lg:gap-0 lg:px-0">
        <div>
          <Image
            src="/assets/images/play.png"
            alt="playstore"
            width={400}
            height={200}
          />
        </div>
        <div className="flex-start gap-3">
          <Image
            src="assets/icons/facebook.svg"
            width={20}
            height={20}
            alt="facebook"
          />
          <Image
            src="assets/icons/telegram.svg"
            width={20}
            height={20}
            alt="facebook"
          />
          <Image
            src="assets/icons/instagram.svg"
            width={20}
            height={20}
            alt="facebook"
          />
        </div>
      </div>
      <p className="flex-start mx-auto w-full gap-5 px-10 py-5 sm:w-full sm:px-10 lg:w-[90rem] lg:px-0">
        {theme === "light" ? (
          <Image
            src="assets/icons/xspace.svg"
            alt="xspace"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src="assets/icons/xspaceD.svg"
            alt="xspace"
            width={20}
            height={20}
          />
        )}
        <span>&copy; 2024 xspace. All Rights Reserved.</span>
      </p>
    </section>
  );
}

export default Footer;
