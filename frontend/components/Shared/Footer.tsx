"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";

function Footer() {
  const { theme } = useTheme();
  return (
    <section className="background-light900_dark200 text-dark100_light900 p-4 shadow-light-300 dark:shadow-none">
      <div className="flex-between mx-auto flex-wrap gap-8 py-10 max-sm:w-80 sm:gap-8  lg:w-[90rem] lg:gap-5">
        <div className="w-full max-sm:w-full lg:w-80">
          <h3 className="pb-3 font-bold text-primary-500">Trending Courses</h3>
          <ul className="list-none">
            <li>Data Analysis</li>
            <li>Data Analytics and Visualization</li>
            <li>Video Editing</li>
          </ul>
        </div>
        <div className="w-full max-sm:w-full lg:w-80">
          <h3 className="pb-3 font-bold text-primary-500">Join Us</h3>
          <ul className="list-none">
            <li>Tutor Request</li>
            <li>Affliate Program</li>
            <li>Request</li>
          </ul>
        </div>
        <div className="w-full max-sm:w-full lg:w-80">
          <h3 className="pb-3 font-bold text-primary-500">About Us</h3>
          <ul className="list-none">
            <li>About</li>
            <li>Blogs</li>
            <li>Video Editing</li>
          </ul>
        </div>
        <div className="w-full max-sm:w-full lg:w-80">
          <h3 className="pb-3 font-bold text-primary-500">Company</h3>
          <ul className="list-none">
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Support Us</li>
          </ul>
        </div>
      </div>
      <hr className="mx-auto w-full border-solid border-black  px-10 max-sm:w-[27rem] sm:w-96 sm:px-10 lg:w-[90rem] lg:px-0" />
      <div className="flex-between mx-auto w-full flex-wrap gap-5 p-10 max-sm:w-full sm:gap-5 sm:px-10 lg:w-[90rem] lg:gap-0 lg:px-0">
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
