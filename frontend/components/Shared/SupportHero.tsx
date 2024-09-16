"use client";
import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import { usePathname } from "next/navigation";

function SupportHero() {
  const { theme } = useTheme();
  const pathname: string | null = usePathname();

  if (!pathname) {
    return null;
  }

  let backgroundClass = "";
  let header = "";
  let text = "";

  switch (pathname) {
    case "/support-us":
      backgroundClass = "bg-support-hero";
      header = "Support Us";
      text =
        "XSpace is an online learning platform established with the primary intent of creating an interface, a light that guides those who are thirsty for entrepreneurial managerial and digital skills with or without prior experience. Coupled with the VISION to teach and propagate knowledge via sharing ideas in a more efficient learning process by creating short and efficient exercises in your course of choices.";
      break;
    case "/privacy-policy":
      backgroundClass = "bg-privacy-hero";
      header = "Privacy Policy";
      text =
        "Our privacy policy is designed to provide transparency into our privacy practices and principles. We ensure that the personal information of our users is kept safe and is used only for the intended purposes.";
      break;
    case "/about-us":
      backgroundClass = "bg-about-hero";
      header = "About Us";
      text =
        "XSpace is an online learning platform established with the primary intent of creating an interface, a light that guides those who are thirsty for entrepreneurial managerial and digital skills with or without prior experience. Coupled with the VISION to teach and propagate knowledge via sharing ideas in a more efficient learning process by creating short and efficient exercises in your course of choices.";
      break;
    case "/contact-us":
      backgroundClass = "bg-contact-hero";
      header = "Contact Us";
      text =
        "XSpace is an online learning platform established with the primary intent of creating an interface, a light that guides those who are thirsty for entrepreneurial managerial and digital skills with or without prior experience. Coupled with the VISION to teach and propagate knowledge via sharing ideas in a more efficient learning process by creating short and efficient exercises in your course of choices.";
      break;
    case "/become-an-instructor":
      backgroundClass = "bg-contact-hero";
      header = "Become An Instructor";
      text =
        "Utilize your expertise by teaching on XSpace, and empower thousands to reach their aspirations and unlock their potential.";
      break;
    case "/join-our-developers":
      backgroundClass = "bg-contact-hero";
      header = "Careers";
      text = "Be a part of an innovative team";
      break;
    default:
      return null;
  }

  return (
    <section
      className={`${theme === "light" ? "text-light-900 bg-neutral-700" : "text-light-900 bg-neutral-600"} ${backgroundClass} h-96 w-full bg-cover bg-center bg-no-repeat pb-16 pt-24 bg-blend-multiply max-sm:h-full lg:h-[26rem] `}
    >
      <div className="mx-auto max-w-screen-sm px-16 sm:max-w-screen-sm sm:px-16 lg:max-w-screen-lg lg:px-0">
        <h1 className=" max-w-screen-sm py-2 text-3xl font-bold sm:max-w-screen-sm lg:max-w-screen-sm">
          {header}
        </h1>
        <hr className=" max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-sm" />
        <p className=" max-w-screen-sm pt-2 text-base sm:max-w-screen-sm lg:max-w-screen-sm">
          {text}
        </p>
      </div>
    </section>
  );
}

export default SupportHero;
